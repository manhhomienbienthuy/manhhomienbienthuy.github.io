/*!
 * Script for website
 * Copyright (C) 2016-present manhhomienbienthuy
 * This file is distributed under the same license as the website.
 */
addEventListener("load",()=>{return r=window,n=document,(e=()=>{var e,t,l=n.querySelector(".sm\\:h-\\[3500px\\]");l&&(640<=r.innerWidth?(e=[].reduce.call(n.getElementsByClassName("sm:order-1"),(e,t)=>e+t.clientHeight+24,0),t=[].reduce.call(n.getElementsByClassName("sm:order-2"),(e,t)=>e+t.clientHeight+24,0),l.style.height=Math.max(e,t)+"px"):l.style.height=null)})(),void(r.onresize=e);var r,n,e});