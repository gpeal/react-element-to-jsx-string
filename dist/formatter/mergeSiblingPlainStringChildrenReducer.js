'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

exports.default = function(previousNodes, currentNode) {
  var lastNode = previousNodes[previousNodes.length - 1];
  var newNode = _extends({}, currentNode);

  if (newNode.type === 'number') {
    newNode.type = 'string';
    newNode.value = String(newNode.value);
  }

  if (
    lastNode &&
    lastNode.type === 'string' &&
    typeof lastNode.value === 'string' &&
    newNode.type === 'string'
  ) {
    lastNode.value += newNode.value || '';
  } else {
    previousNodes.push(newNode);
  }

  return previousNodes;
};
//# sourceMappingURL=mergeSiblingPlainStringChildrenReducer.js.map
