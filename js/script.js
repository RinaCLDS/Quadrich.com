let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');

listVideo.forEach(video => {
  video.onclick = () => {
      listVideo.forEach(vid => vid.classList.remove('active'));
      video.classList.add('active');
      if (video.classList.contains('active')) {
          let src = video.children[0].getAttribute('src');
          mainVideo.src = src;
          let text = video.children[1].innerHTML;
          title.innerHTML = text;
      }
  }
})

$ = function(id) {
    return document.getElementById(id);
  }
var show = function(id) {
	$(id).style.display ='block';
}
var hide = function(id) {
	$(id).style.display ='none';
}

let loginForm = document.querySelector('.header .login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

const banner = new Swiper('.banner', {
  direction: 'horizontal',
  loop: true,
  pagination: {
      el: '.swiper-pagination',
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  scrollbar: {
      el: '.swiper-scrollbar',
  },
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  // effect: 'coverflow',
  // slide, fade, cube, flip, creative
});
