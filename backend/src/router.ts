import { ExtendedRouter, type extPaths } from "@ublitzjs/router";
import { RouterPlugin as openapiPlugin, type methodAddOns, type routeAddOns } from "@ublitzjs/openapi"
import type { serverType } from "./index.ts";
import { closure } from "@ublitzjs/core";
import {WSSchemas} from "../proto/dist/websockets.js"
var router  = new ExtendedRouter({
  "/ws": {
    ws: {
      controller: closure(()=>{
        WSSchemas.Hello.create();
        return {
          
        }
      })
    }
  }
} satisfies extPaths<methodAddOns, routeAddOns>, [openapiPlugin])

export default (server: serverType)=>{
  router.bind(server)
}
