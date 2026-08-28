/*!
 * Script for website
 * Copyright (C) 2016-present manhhomienbienthuy
 * This file is distributed under the same license as the website.
 */
addEventListener("load",()=>{let e=document.querySelector(".article-list");var t;e&&((t=()=>{if(window.innerWidth<768)e.style.height="";else{let i=[0,0];e.querySelectorAll(".article-item").forEach((e,t)=>{i[t%2]+=e.clientHeight+24}),e.style.height=Math.max(i[0],i[1])+"px"}})(),addEventListener("resize",t))});