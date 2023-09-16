import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')
//
// const scrollActive = () =>{
//   const scrollDown = window.scrollY
//
//   sections.forEach(current =>{
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 58,
//       sectionId = current.getAttribute('id'),
//       sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
//
//     if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
//       sectionsClass.classList.add('active-link')
//     }else{
//       sectionsClass.classList.remove('active-link')
//     }
//   })
// }
// window.addEventListener('scroll', scrollActive)
