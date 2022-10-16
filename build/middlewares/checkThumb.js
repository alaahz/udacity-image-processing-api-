"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var image_size_1 = __importDefault(require("image-size"));
var checkThumb = function (req, res, next) {
    var file = path_1.default.join(process.cwd(), 'images', 'thumbnail', "".concat(req.query.filename, ".jpg"));
    var height = Number(req.query.height);
    var width = Number(req.query.width);
    // access() method used to check if the image is existing in thumb folder
    fs_1.default.access(file, fs_1.default.constants.F_OK, function (err) {
        if (err) {
            // Meaning the image is never save in the thumb folder, so go to images route
            next();
        }
        else {
            // Meaning the image is in the thumb folder, so check the height and width are same diplay the image
            var dimensions = (0, image_size_1.default)(file);
            if (dimensions.height === height && dimensions.width === width) {
                res.status(200).sendFile(file);
                return;
            }
            else {
                //Height and width are not same go to images route
                next();
            }
        }
    });
};
exports.default = checkThumb;
