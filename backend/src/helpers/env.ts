import { Ajv } from "ajv";
import { Type, type Static } from "@sinclair/typebox";
var envSchema = Type.Object({
  PORT: Type.Number({ minimum: 80, maximum: 64*1024 }),
  BUILD_DOCS: Type.Boolean()
})
var validator = new Ajv({ strict: true, coerceTypes: true }).compile(envSchema)
export type envType = Static<typeof envSchema>;
var env: envType = {} as any;
process.argv.splice(0, 2)
for(const arg of process.argv){
  var pair = arg.split('=');
  (env as any)[pair[0] as string] = pair[1];
}
if(!validator(env)){
  throw new Error("Environent variables are not right", { cause: validator.errors });
}

export default env;
