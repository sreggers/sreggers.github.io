"use strict";

import { createApp, reactive } from 'petite-vue';
import { createI18n } from 'petite-vue-i18n-lite';
import languages from './languages';

const i18n = reactive(createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: languages,
}));

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

function App() {
    return {}
}

createApp({
    i18n,
    App,
    Navbar,
})
.directive('t', ({el, get, effect}) => effect(() => el.innerHTML = i18n.t(get())))
.mount();

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