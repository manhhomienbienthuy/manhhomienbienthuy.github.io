/*!
 * Script for website
 * Copyright (C) 2016-present manhhomienbienthuy
 * This file is distributed under the same license as the website.
 */
addEventListener("load",()=>{var t,a;t=window,(a=document).querySelectorAll("[data-mode]").forEach(e=>e.addEventListener("click",()=>{switch(e.dataset.mode){case"dark":localStorage.theme="dark",a.documentElement.classList.add("dark");break;case"light":localStorage.theme="light",a.documentElement.classList.remove("dark");break;default:localStorage.removeItem("theme"),t.matchMedia("(prefers-color-scheme: dark)").matches?a.documentElement.classList.add("dark"):a.documentElement.classList.remove("dark")}a.querySelector("#theme-toggle").checked=!1}))});