import{D as c,c as l,Q as d}from"./vendor.428c8833.js";const h=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}};h();document.documentElement.classList.remove("no-js");document.documentElement.classList.add("js");var u={en:{navbar:{about:"About",experience:"Experience",education:"Education",skills:"Skills",imgalt:"This is a picture of me."},about:{header:"Hello there!",p1:`My name is Sebastiaan Reggers and I'm currently working as a <span class="highlight">fullstack developer</span> for the inSign software from IS2. As a programmer I get the most satisfaction out of developing an <span class="highlight">intuative and accessible</span> frontend built on top of a <span class="highlight">robust and secure</span> backend.`,p2:'Outside of my professional carreer I like to work on hobby projects. These projects can vary between trying out <span class="highlight">new web technologies</span>, such as Svelte and Astro, writing and playing <span class="highlight">Dungeons and Dragons</span> campaigns, creating <span class="highlight">rom hacks</span> of my favorite childhood games, experimenting with <span class="highlight">embedded devices</span>, such as the rasperry pi and organizing another, probably doomed, fortress in the game <span class="highlight">Dwarf Fortress</span>.'},experience:{header:"Experience"},education:{header:"Education",subjects:"The subjects covered by this studies were:",a1:{header:"H\xE4me University of Applied Sciences, HAMK",subheader:"Bachelor of Applied Science -  Business Information Technology",extra:"2019 - 2020",description:"Double degree programme in Finland, organised by Erasmus, in cooperation with the Thomas More University. This programme helped me approach my studies from a different point of view, due to the more individualistic study methods used in the Finnish education system.",subject1:"Cloud-based full-stack Mobile Development",subject2:"Business Administration and Business Intelligence",subject3:"Thesis in Geospatial Data Analysis",subject4:"Project in Virtual Studio Movie Capturing"},a2:{header:"Thomas More University of Applied Sciences",subheader:"Bachelor of Applied Science - Computer Science",extra:"2017 - 2020",description:"Bachelor degree programme in Belgium, with a primary focus on Full-stack Application Development. This studies helped me approach programming in a more structured way and introduced me to several different programming languages and working methods.",subject1:"Full-stack Application Development in Windows and Linux Distributions",subject2:"ERP Software Management and Project Planning",subject3:"Basics of Networking and Embedded Devices",subject4:"Basics of Business Management"},a3:{header:"KU Leuven",subheader:"Bachelor of Science, Biochemistry and Biotechnology, unfinished",extra:"2016 - 2017",description:"The first two semesters of this studies taught me some studying methods, but also made me realize this was not a path I wanted to follow."},a4:{header:"Escuela T\xE9cnica N\xBA35, Crespo, Argentina",subheader:"High School, Business Administration",extra:"2015 - 2016",description:"Two semesters at a local, technical, high school during my exchange year in Argentina, organized by AFS. This was my first long-term international experience and got me hooked."},a5:{header:"Onze-Lieve-Vrouwecollege, Antwerpen",subheader:"High School, Latin-Sciences",extra:"2009 - 2015",description:"General high school education (ASO)."}},skills:{header:"Skills"}},nl:{navbar:{about:"Introductie",experience:"Ervaring",education:"Opleiding",skills:"Vaardigheden"},about:{header:"Hallo!",p1:`Mij naam is Sebastiaan Reggers and I'm currently working as a <span class="highlight">fullstack developer</span> for the inSign software from IS2. As a programmer I get the most satisfaction out of developing an <span class="highlight">intuative and accessible</span> frontend built on top of a <span class="highlight">robust and secure</span> backend.`,p2:'Outside of my professional carreer I like to work on hobby projects. These projects can vary between trying out <span class="highlight">new web technologies</span>, such as Svelte and Astro, writing and playing <span class="highlight">Dungeons and Dragons</span> campaigns, creating <span class="highlight">rom hacks</span> of my favorite childhood games, experimenting with <span class="highlight">embedded devices</span>, such as the rasperry pi and organizing another, probably doomed, fortress in the game <span class="highlight">Dwarf Fortress</span>.'}}};const r=c(l({locale:"en",fallbackLocale:"en",messages:u}));function p(i){return{active:window.innerWidth>=768?!0:i,toggle(){this.active=!this.active},scrollSmooth(n){const t=n.currentTarget.getAttribute("href").replace("#","");document.getElementById(t).scrollIntoView({behavior:"smooth"})}}}function g(){return{}}d({i18n:r,App:g,Navbar:p}).directive("t",({el:i,get:n,effect:t})=>t(()=>i.innerHTML=r.t(n()))).mount();window.onload=function(){const i=document.querySelectorAll("#scrollspy .nav-elem"),n=document.querySelectorAll(".info-section section");window.onscroll=()=>{let t=0;n.forEach((a,e)=>{a.getBoundingClientRect().top<100&&(t=e)}),i.forEach(a=>a.classList.remove("active")),i.item(t).classList.add("active")}};