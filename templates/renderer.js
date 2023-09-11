"use strict";

require("./style.css");
var _reactDom = require("react-dom");
var _Q = require("./Q715.js");
var _react = _interopRequireDefault(require("react"));
var _smartFormsRenderer = require("@aehrc/smart-forms-renderer");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Create a container element where the React component will be rendered
// Render your React component instead
var root = (0, _reactDom.createRoot)(document.getElementById('renderer'));
root.render( /*#__PURE__*/_react["default"].createElement(_smartFormsRenderer.SmartFormsRenderer, {
  questionnaire: _Q.Q715
}));
