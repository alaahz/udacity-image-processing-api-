'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var routes = express_1.default.Router();
routes.get('/image', function (req, res) {
  res.send('MAIN API ROUTE');
});
exports.default = routes;
