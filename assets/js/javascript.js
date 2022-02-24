/*jshint esversion: 6 */

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}






// // When the user scrolls the page, execute myFunction  - SCROLLBAR PURPLE ABOUT PAGE
// window.onscroll = function() {myFunction()};

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 190;
//   document.getElementById("myBar").style.height = scrolled + "%";
// }




// // À PROPOS SLIDE LEFT WHEN SCROLL ON VIEW

   const observer = new IntersectionObserver(entries => {
     // Loop over the entries
     entries.forEach(entry => {
      //  const slideabout = entry.target.querySelector('.slideabout');
       // If the element is visible
       if (entry.isIntersecting) {
         // Add the animation class
         entry.target.classList.add('slide-animation-about');
       }
     });
   });

   observer.observe(document.querySelector('.slide-wrapper-about'));
 



     const observer2 = new IntersectionObserver(entries => {
       // Loop over the entries
       entries.forEach(entry => {
        //  const slidecomp = entry.target.querySelector('.slidecomp');
         // If the element is visible
         if (entry.isIntersecting) {
           // Add the animation class
           entry.target.classList.add('slide-animation-comp');
         }
       });
     });

     observer2.observe(document.querySelector('.slide-wrapper-comp'));


    const observer3 = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {
        // const imgtext = entry.target.querySelector('.imgtext');
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add('img-text-animation');
        }
      });
    });

  observer3.observe(document.querySelector('.img-text-wrapper'));



   const observer4 = new IntersectionObserver(entries => {
     // Loop over the entries
     entries.forEach(entry => {
      //  const slideproject = entry.target.querySelector('.slideproject');
       // If the element is visible
       if (entry.isIntersecting) {
         // Add the animation class
         entry.target.classList.add('slide-animation-project');
       }
     });
   });

  observer4.observe(document.querySelector('.slide-wrapper-project'));



   const observer5 = new IntersectionObserver(entries => {
     // Loop over the entries
     entries.forEach(entry => {
      //  const imgtext = entry.target.querySelector('.imgtext');
       // If the element is visible
       if (entry.isIntersecting) {
         // Add the animation class
         entry.target.classList.add('img-text-animation');
       }
     });
   });

 observer5.observe(document.querySelector('.img-text-wrapper'));


   const observer6 = new IntersectionObserver(entries => {
     // Loop over the entries
     entries.forEach(entry => {
      //  const slidefooter = entry.target.querySelector('.slidefooter');
       // If the element is visible
       if (entry.isIntersecting) {
         // Add the animation class
         entry.target.classList.add('slide-animation-footer');
       }
     });
   });

 observer6.observe(document.querySelector('.slide-wrapper-footer'));





  // ScrollFade 0.1

 var fadeElements = document.getElementsByClassName('scrollFade');
 function scrollFade() {
 	// var viewportBottom = window.scrollY + window.innerHeight;
 	for (var index = 0; index < fadeElements.length; index++) {
 		var element = fadeElements[index];
 		var rect = element.getBoundingClientRect();
 		var elementFourth = rect.height/3;
 		var fadeInPoint = window.innerHeight - elementFourth;
 		var fadeOutPoint = -(rect.height/2);
 		if (rect.top <= fadeInPoint) {
 			element.classList.add('scrollFade--visible');
 			element.classList.add('scrollFade--animate');
 			element.classList.remove('scrollFade--hidden');
 		} else {
 			element.classList.remove('scrollFade--visible');
 			element.classList.add('scrollFade--hidden');
 		}
 		if (rect.bottom <= fadeOutPoint) {
 			element.classList.remove('scrollFade--visible');
 			element.classList.add('scrollFade--hidden');
 		}
 	}
 }

 document.addEventListener('scroll', scrollFade);
 window.addEventListener('resize', scrollFade);
 document.addEventListener('DOMContentLoaded', function() {
     scrollFade();
 });



