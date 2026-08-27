/*!
 * Script for website
 * Copyright (C) 2016-present manhhomienbienthuy
 * This file is distributed under the same license as the website.
 */
addEventListener("load",()=>{return t=window,r=document,(e=()=>{var e=r.querySelector(".article-list");if(e)if(640<=t.innerWidth){let i=0,l=0;r.querySelectorAll(".article-list .article-item").forEach((e,t)=>{t%2?l+=e.clientHeight+24:i+=e.clientHeight+24}),e.style.height=Math.max(i,l)+"px"}else e.style.height=null})(),void(t.onresize=e);var t,r,e});