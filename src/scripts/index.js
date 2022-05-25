"use strict";

import { createApp } from 'petite-vue';
import { createI18n } from 'petite-vue-i18n-lite';

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: {
            navbar: {
                about: 'About',
                experience: 'Experience',
                education: 'Education',
                skills: 'Skills',
            },
            about: {
                header: 'Hello there!',
                text: 'My name is Sebastiaan Reggers and I\'m currently working as a fullstack developer for the inSign software from IS2. As a programmer I get the most satisfaction out of developing an intuative and accessible frontend built on top of a robust and secure backend.',
            },
            experience: {
                header: 'Experience',
            },
            education: {
                header: 'Education',
            },
            skills: {
                header: 'Skills',
            },
        },
        nl: {
            navbar: {
                about: 'Introductie',
                experience: 'Ervaring',
                education: 'Opleiding',
                skills: 'Vaardigheden',
            },
        },
    }
});

function Navbar(active) {
    return {
        active: window.innerWidth >= 768 ? true : active,
        toggle() {
            this.active = !this.active
        },
        scrollSmooth(event) {
            const headerId = event.currentTarget.getAttribute('href').replace('#', '');
            document.getElementById(headerId).scrollIntoView({behavior: "smooth"});
        }
    }
}

function Language() {
    return i18n;
}

createApp({
    Language,
    Navbar
}).mount();

window.onload = function(){
    const scrollspy_elems = document.querySelectorAll('#scrollspy .nav-elem');
    const info_sections = document.querySelectorAll('.info-section section');

    window.onscroll = () => {
        let lastIndex = 0;
        info_sections.forEach((s,i) => {
            const sectionTopPos = s.getBoundingClientRect().top;
            if (sectionTopPos < 100) {
                lastIndex = i;
            }
        });
        scrollspy_elems.forEach(e => e.classList.remove('active'))
        scrollspy_elems.item(lastIndex).classList.add('active');
    }
};