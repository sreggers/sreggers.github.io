import{c,Q as l}from"./vendor.6bd6add4.js";const a=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};a();document.documentElement.classList.remove("no-js");document.documentElement.classList.add("js");const d=c({locale:"en",fallbackLocale:"en",messages:{en:{navbar:{about:"About",experience:"Experience",education:"Education",skills:"Skills"},about:{header:"Hello there!",text:"My name is Sebastiaan Reggers and I'm currently working as a fullstack developer for the inSign software from IS2. As a programmer I get the most satisfaction out of developing an intuative and accessible frontend built on top of a robust and secure backend."},experience:{header:"Experience"},education:{header:"Education"},skills:{header:"Skills"}},nl:{navbar:{about:"Introductie",experience:"Ervaring",education:"Opleiding",skills:"Vaardigheden"}}}});l(d).mount();window.onload=function(){const s=document.querySelectorAll("#scrollspy .nav-elem"),n=document.querySelectorAll(".info-section section");window.onscroll=()=>{let r=0;n.forEach((o,e)=>{o.getBoundingClientRect().top<100&&(r=e)}),s.forEach(o=>o.classList.remove("active")),s.item(r).classList.add("active")}};
