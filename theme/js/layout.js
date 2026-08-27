/*!
 * Script for website
 * Copyright (C) 2016-present manhhomienbienthuy
 * This file is distributed under the same license as the website.
 */
addEventListener("load",()=>{return t=window,r=document,(e=()=>{var e=r.querySelector(".article-list");if(e)if(640<=t.innerWidth){let l=0,i=0;r.querySelectorAll(".article-list .article-item").forEach((e,t)=>{console.log("debug",t,e.clientHeight),t%2?i+=e.clientHeight+24:l+=e.clientHeight+24}),console.log("debug",l,i),e.style.height=Math.max(l,i)+"px"}else e.style.height=null})(),void(t.onresize=e);var t,r,e});