/*!
 * Script for website
 * Copyright (C) 2016-present manhhomienbienthuy
 * This file is distributed under the same license as the website.
 */
addEventListener("load",()=>{var e=()=>{var e=document.querySelector(".article-list");if(e)if(768<=window.innerWidth){let i=[0,0];e.querySelectorAll(".article-item").forEach((e,t)=>{i[t%2]+=e.clientHeight+24}),e.style.height=Math.max(...i)+"px"}else e.style.height=null};e(),window.onresize=e});