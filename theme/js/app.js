/*!
 * Script for website
 * Copyright (C) 2016-present manhhomienbienthuy
 * This file is distributed under the same license as the website.
 */
addEventListener("load",()=>{let t=document.documentElement,o=document.querySelector("#theme-toggle");document.querySelector("#theme-toggle ~ ul").addEventListener("click",e=>{e=e.target.dataset.mode;"system"===e?localStorage.removeItem("theme"):localStorage.theme=e,t.classList.toggle("dark","dark"===e||"system"===e&&window.matchMedia("(prefers-color-scheme: dark)").matches),o.checked=!1})});