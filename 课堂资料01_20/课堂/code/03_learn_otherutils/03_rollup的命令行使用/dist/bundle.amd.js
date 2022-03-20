define(['exports'], function (exports) { 'use strict';

  const message = "Hello Rollup";
  console.log(message);

  const sum = (num1, num2) => {
    return num1 + num2;
  };

  exports.sum = sum;

  Object.defineProperty(exports, '__esModule', { value: true });

});
