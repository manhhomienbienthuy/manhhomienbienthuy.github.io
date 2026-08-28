/*!
 * Script for website
 * Copyright (C) 2016-present manhhomienbienthuy
 * This file is distributed under the same license as the website.
 */
addEventListener("load",()=>{document.querySelectorAll("[data-mode]").forEach(e=>e.addEventListener("click",()=>{switch(e.dataset.mode){case"dark":localStorage.theme="dark",document.documentElement.classList.add("dark");break;case"light":localStorage.theme="light",document.documentElement.classList.remove("dark");break;default:localStorage.removeItem("theme"),window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}document.querySelector("#theme-toggle").checked=!1}))});