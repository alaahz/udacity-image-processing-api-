"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_fs_1 = require("node:fs");
var path_1 = __importDefault(require("path"));
var validator = function (req, res, next) {
    var file = path_1.default.join(process.cwd(), 'images', 'fall', "".concat(req.query.filename, ".jpg"));
    // access() method used to check if the image is existing in fall folder and then check the height and width
    (0, node_fs_1.access)(file, node_fs_1.constants.F_OK, function (err) {
        if (err) {
            res
                .status(400)
                .send('Please enter one of following file name [encenadaport , fjord, icelandwaterfall , palmtunnel , santamonica]');
            return;
        }
        else {
            // undefined = the user doesn't enter the  height and width in url
            // '' = the user doesn't assign value to the height and width  in url
            if (req.query.height === '' ||
                req.query.height === undefined ||
                Number(req.query.height) <= 0) {
                res
                    .status(400)
                    .send('Please make sure you enter the image height (Positive number).');
                return;
            }
            if (req.query.width === '' ||
                req.query.width === undefined ||
                Number(req.query.width) <= 0) {
                res
                    .status(400)
                    .send('Please make sure you enter the image width (Positive number).');
                return;
            }
            else {
                // The user enter the right query value then go back to images route
                next();
            }
        }
    });
};
exports.default = validator;
