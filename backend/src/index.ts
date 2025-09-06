import { serverExtension as openapiExtension } from "@ublitzjs/openapi";
import { App, type us_listen_socket, us_listen_socket_close } from "uWebSockets.js";
import { extendApp } from "@ublitzjs/core";
import env from "./helpers/env.ts";
var serverSocket: us_listen_socket;
var server = extendApp(
  App(),
  openapiExtension({
    info:{
      title: "Backend side",
      version: "1.0.0",
    },
    openapi: "3.0.0",
  })
)
/*<DEV>*/if(env.BUILD_DOCS) await server.buildOpenApi("public/openapi.json", true);/*</DEV>*/

function STOP(){ us_listen_socket_close(serverSocket); }
process.once("SIGINT", STOP).once("SIGTERM", STOP);



await server.serveOpenApi("/docs",{ path: "public/openapi.json", clearMimes: true })
server.listen("0.0.0.0", env.PORT, (socket) => {
  serverSocket = socket;
});

export type serverType = typeof server;
