// menu show 
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

// menu show 
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show');
    })
}

// menu hidden
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show');
    })
}
// remove menu
const navLink = document.querySelectorAll('.nav-link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// scroll section
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const secitonTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')

        if(scrollY > secitonTop && scrollY <= secitonTop + sectionHeight){
            document.querySelector('.nav_menu a[href=*=' + sectionId + ']').classList.add('active')
        }else {
            document.querySelector('.nav_menu a[href=*=' + sectionId + ']').classList.remove('active')
        }
    })
}
// change background color of header
window.onscroll = () => {
    const nav = document.getElementById('header')
    if(this.scrollY >= 200) {
        nav.classList.add('scroll-header');
    }else {
        nav.classList.remove('scroll-header');0
    }
}