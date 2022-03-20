(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  const message='Hello Rollup';
  console.log(message);
  const sum=(num1,num2)=>{
    return num1+num2
  };
  exports.sum=sum;

}));
