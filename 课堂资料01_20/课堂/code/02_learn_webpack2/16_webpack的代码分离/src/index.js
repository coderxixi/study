// import _ from 'lodash';
// import dayjs from 'dayjs';

import "./bar_01";

console.log("Hello Index");

const button = document.createElement("button");
button.innerHTML = "加载元素";
button.addEventListener("click", () => {
  // prefetch -> 魔法注释(magic comments)
    /* webpackPrefetch: true */
    /* webpackPreload: true */
  import(
    /* webpackChunkName: 'element' */
    /* webpackPrefetch: true */
    "./element"
  ).then(({default: element}) => {
    document.body.appendChild(element);
  })
});
document.body.appendChild(button);
