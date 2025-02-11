import { _ as _taggedTemplateLiteral } from '../../dist/taggedTemplateLiteral-8e47dbd7.browser.esm.js';
import outdent from 'outdent';
import { onBeginFileScope, onEndFileScope } from '../../adapter/dist/vanilla-extract-css-adapter.browser.esm.js';

var _templateObject;
var refCounter = 0;
var fileScopes = [];
function setFileScope(filePath, packageName) {
  refCounter = 0;
  var fileScope = {
    filePath,
    packageName
  };
  fileScopes.unshift(fileScope);
  onBeginFileScope(fileScope);
}
function endFileScope() {
  onEndFileScope(getFileScope());
  refCounter = 0;
  fileScopes.splice(0, 1);
}
function hasFileScope() {
  return fileScopes.length > 0;
}
function getFileScope() {
  if (fileScopes.length === 0) {
    throw new Error(outdent(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        Styles were unable to be assigned to a file. This is generally caused by one of the following:\n\n        - You may have created styles outside of a '.css.ts' context\n        - You may have incorrect configuration. See https://vanilla-extract.style/documentation/getting-started\n      "]))));
  }
  return fileScopes[0];
}
function getAndIncrementRefCounter() {
  return refCounter++;
}

export { endFileScope, getAndIncrementRefCounter, getFileScope, hasFileScope, setFileScope };
