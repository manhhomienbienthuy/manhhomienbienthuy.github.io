/*!
 * Script for website
 * Copyright (C) 2016-present manhhomienbienthuy
 * This file is distributed under the same license as the website.
 */
addEventListener("load",()=>{return t=window,i=document,(e=()=>{var e=i.querySelector(".article-list");if(e)if(768<=t.innerWidth){let i=[0,0];e.querySelectorAll(".article-item").forEach((e,t)=>{i[t%2]+=e.clientHeight+24}),e.style.height=Math.max(...i)+"px"}else e.style.height=null})(),void(t.onresize=e);var t,i,e});