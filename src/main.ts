import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// const scrollUp: any = () => {
//   const scrollUp = document.getElementById('scroll-up');
//   // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
//   scrollY >= 350
//     ? scrollUp!.classList.add('show-scroll')
//     : scrollUp!.classList.remove('show-scroll');
// };
//
// window.addEventListener('scroll', scrollUp);
//
// const sections = document.querySelectorAll('section[id]');
//
// const scrollActive = () => {
//   const scrollDown = window.scrollY;
//
//   sections.forEach((current) => {
//     const sectionHeight= current.offsetHeight,
//       sectionTop = current.offsetTop - 58,
//       sectionId = current.getAttribute('id'),
//       sectionsClass = document.querySelector(
//         '.nav__menu a[href*=' + sectionId + ']',
//       );
//
//     if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
//       sectionsClass!.classList.add('active-link');
//     } else {
//       sectionsClass!.classList.remove('active-link');
//     }
//   });
// };
// window.addEventListener('scroll', scrollActive);
