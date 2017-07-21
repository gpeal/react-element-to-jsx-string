'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _collapseWhiteSpace = require('collapse-white-space');

var _collapseWhiteSpace2 = _interopRequireDefault(_collapseWhiteSpace);

var _react = require('react');

var _stringifyObject = require('stringify-object');

var _stringifyObject2 = _interopRequireDefault(_stringifyObject);

var _sortobject = require('sortobject');

var _sortobject2 = _interopRequireDefault(_sortobject);

var _parseReactElement = require('./../parser/parseReactElement');

var _parseReactElement2 = _interopRequireDefault(_parseReactElement);

var _formatReactElementNode = require('./formatReactElementNode');

var _formatReactElementNode2 = _interopRequireDefault(_formatReactElementNode);

var _spacer = require('./spacer');

var _spacer2 = _interopRequireDefault(_spacer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function noRefCheck() {}

exports.default = function(value, inline, lvl, options) {
  var normalizedValue = (0, _sortobject2.default)(value);

  var stringifiedValue = (0, _stringifyObject2.default)(normalizedValue, {
    transform: function transform(currentObj, prop, originalResult) {
      var currentValue = currentObj[prop];

      if (currentValue && (0, _react.isValidElement)(currentValue)) {
        return (0, _formatReactElementNode2.default)(
          (0, _parseReactElement2.default)(currentValue, options),
          true,
          lvl,
          options
        );
      }

      if (typeof currentValue === 'function') {
        return noRefCheck;
      }

      return originalResult;
    },
  });

  if (inline) {
    return (0, _collapseWhiteSpace2.default)(stringifiedValue)
      .replace(/{ /g, '{')
      .replace(/ }/g, '}')
      .replace(/\[ /g, '[')
      .replace(/ ]/g, ']');
  }

  // Replace tabs with spaces, and add necessary indentation in front of each new line
  return stringifiedValue
    .replace(/\t/g, (0, _spacer2.default)(1, options.tabStop))
    .replace(
      /\n([^$])/g,
      '\n' + (0, _spacer2.default)(lvl + 1, options.tabStop) + '$1'
    );
};
//# sourceMappingURL=formatComplexDataStructure.js.map
