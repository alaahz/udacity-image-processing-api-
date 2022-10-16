"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
/* Resize the given image and save the reise image in thumb folder.
  if any error happen during the resize process will display message Something went Wrong */
var resizeImage = function (file, height, width, thumbFolder) {
    return new Promise(function (resolve, reject) {
        try {
            (0, sharp_1.default)(file)
                .resize(width, height)
                .toFile(thumbFolder, function (err, info) {
                resolve(info);
            });
        }
        catch (error) {
            reject('Something went wrong');
        }
    });
};
exports.default = resizeImage;
