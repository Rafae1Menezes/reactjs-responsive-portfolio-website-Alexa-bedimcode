/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navCLose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navCLose) {
   navCLose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
   skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
   let itemClass = this.parentNode.className

   for (i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = 'skills__content skills__close'
   }

   if (itemClass == 'skills__content skills__close') {
      this.parentNode.className = 'skills__content skills__open'
   }
}

skillsHeader.forEach(el => {
   el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
   tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
   /* Cria um evento click em cada uma das tabs */
   tab.addEventListener('click', () => {
      /* Selecioina a lista respeciva da tab que foi clicada (#education ou #work) */
      const target = document.querySelector(tab.dataset.target)

      /* remove de todas as listas o active */
      tabContents.forEach(tabContent => {
         tabContent.classList.remove('qualification__active')
      })

      /* Adiciona na lista que foi clica o active  */
      target.classList.add('qualification__active')

      /* remove de todas as tab o active */
      tabs.forEach(tab => {
         tab.classList.remove('qualification__active')
      })

      /* Adiciona na tab clica o active */
      tab.classList.add('qualification__active')
   })
})

/*==================== SERVICES MODAL ====================*/
const modalViews =
      document.querySelectorAll('.services__modal') /* Todos os modais */,
   modalBtns =
      document.querySelectorAll(
         '.services__button'
      ) /* Todos botoes de abrir os modais */,
   modalCloses = document.querySelectorAll(
      '.services__modal-close'
   ) /* todos os botões de fechar os modais */

let modal = function (modalclick) {
   modalViews[modalclick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
   modalBtn.addEventListener('click', () => {
      modal(i)
   })
})

modalCloses.forEach(modalCLose => {
   modalCLose.addEventListener('click', () => {
      modalViews.forEach(modalView => {
         modalView.classList.remove('active-modal')
      })
   })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPorfolio = new Swiper('.portfolio__container', {
   cssMode: true,
   loop: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
})

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonal__container', {
   loop: true,
   grabCursor: true,
   spaceBetween: 48,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
   },

   breakpoints:{
      568:{
         slidesPerView: 2,
      }
   }
})


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
   const scrollY= window.pageYOffset

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50
      const sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
      }else{
         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
   })
}

window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
   const nav = document.getElementById('header')
   // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
   if(this.scrollY >= 80) nav.classList.add('scroll-header')
   else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
   const scrollUp = document.getElementById('scroll-up');
   //when the scholl is height than 560 viewpot height, add the show-scroll clas to the tag with the scroll-up id
   if(this.scrollY >= 560) 
      scrollUp.classList.add('show-scroll')
   else
      scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//Previously selected tpic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current them that the interface has by validating the dark-them class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

//we validade if the user previousl chose a topic
if(selectedTheme){
   //If the validadetion is fulfilled, we ask what the issue was to know if we activaed or deactivated the dark-theme
   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
   themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
   //Add or remove te dark / icon theme
   document.body.classList.toggle(darkTheme)
   themeButton.classList.toggle(iconTheme)
   //We save the theme and the current icon that the user chose
   localStorage.setItem('selected-theme', getCurrentTheme())
   localStorage.setItem('selected-icon', getCurrentIcon())

})