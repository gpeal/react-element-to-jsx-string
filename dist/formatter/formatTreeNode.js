'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _formatReactElementNode = require('./formatReactElementNode');

var _formatReactElementNode2 = _interopRequireDefault(_formatReactElementNode);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var escape = function escape(s) {
  return s.replace(/{/g, '&lbrace;').replace(/}/g, '&rbrace;');
};

exports.default = function(node, inline, lvl, options) {
  if (node.type === 'string' || node.type === 'number') {
    return node.value ? escape(node.value.toString()) : '';
  }

  if (node.type === 'ReactElement') {
    return (0, _formatReactElementNode2.default)(node, inline, lvl, options);
  }

  throw new TypeError('Unknow format type "' + node.type + '"');
};
//# sourceMappingURL=formatTreeNode.js.map
