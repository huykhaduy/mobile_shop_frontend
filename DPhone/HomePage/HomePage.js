// Hàm mousemove dùng để bắt sự kiện khi trỏ chuột trỏ vào đối tượng
// Hàm createElement dùng để tạo ra phần tử html
// Phương thức className = "classname" dùng để tạo class cho phần tử
// Hàm appendChild dùng để thêm phần tử con vào phần tử cha
// Hàm style.setProperty dùng để xét thuộc tính style cho phần tử
// Hàm PageX, PageY dùng để lấy vị trí của trỏ chuột đối với trang web
// Hàm offsetTop, offsetLeft dùng để lấy vị trí của phần tử đối với trang web
// Hàm oninput dùng để bắt sự kiện khi nhập cái gì đó vào ô input. Bắt tại ô input
// Hàm textContent dùng để nhận nội dung văn bản từ một phần tử nào đó
// Hàm onblur để bắt sự kiện khi trỏ chuột ra khỏi ô input. Bắt tại ô input

// var range = document.querySelector('.range')
// var rangeShow = document.querySelector('.value__range')
// range.addEventListener('input', function() {
//  var rangeValue = range.value
//  rangeShow.textContent = rangeValue
// })

// Xử lí Header Menu 
var header_menu = document.querySelector('.header__menu__logo')
var menu_a = document.querySelectorAll('.header__menu ul>li>a')
var header_logo = document.querySelector('.header__logo')
var open_sidebar = document.querySelector('.open__menu__sidebar')
var menu_sidebar = document.querySelector('.header__menu__sidebar')
var section_item = document.querySelectorAll('.section_item')

window.addEventListener('scroll', function(){
 if (this.window.pageYOffset > 100){
  header_menu.classList.add('active')
  header_logo.classList.add('active')
  open_sidebar.classList.add('active')
  document.querySelector('.order__btn__header').classList.add('active')
  menu_a.forEach(e => {
   e.style.color = '#111'
  })
 } else {
  header_menu.classList.remove('active')
  header_logo.classList.remove('active')
  open_sidebar.classList.remove('active')
  document.querySelector('.order__btn__header').classList.remove('active')
  menu_a.forEach(e => {
   e.style.color = '#fff'
  })
 }

 if (this.window.pageYOffset > 100) {
  menu_sidebar.classList.remove('active')
 }


   var elm = ''
   var pageOffset = window.pageYOffset;
   section_item.forEach(e => {
    var start = e.offsetTop
    if (pageOffset >= start - 200) {
     elm = e.getAttribute('id')
    } 
    menu_a.forEach(e => {
     e.classList.remove('active')
     if (e.classList.contains(elm)){
      e.classList.add('active')
     }
    })
   }) 

   var scrolltoTop = this.document.querySelector('.scroll__to__top')
   if (this.window.pageYOffset > 100) {
     scrolltoTop.classList.add('active')
   } else {
     scrolltoTop.classList.remove('active')
   } 
   scrolltoTop.addEventListener('click', function(){
    window.scrollTo(0,0)
  })
})

var height_menu = header_menu.clientHeight;
menu_sidebar.style.setProperty('--height_menu',height_menu + 'px')

open_sidebar.addEventListener('click', function(){
 menu_sidebar.classList.toggle('active')
})

window.addEventListener('click', (e) => {
  if (e.target.classList[0] !== 'menu_sidebar' && e.target.classList[0] !== 'open__menu__sidebar') {
    menu_sidebar.classList.remove('active')
  }
  // console.log(e.target.classList[0])
})


menu_sidebar.addEventListener('click', function(){
 menu_sidebar.classList.remove('active')
})

document.querySelector('.order__btn__sidebar').addEventListener('click', function(e){
 e.stopPropagation()
})

// Xử lí phần button
var order_btn = document.querySelectorAll('.order__btn')
var order_btn_span = document.querySelectorAll('.order__btn span')
order_btn.forEach( elm => {
 elm.addEventListener('mousemove', function(e){
  // Lấy tọa độ con trở chuột
  const x = e.pageX;
  const y = e.pageY;
  // Lấy tọa độ hover
  const xhover = x - elm.offsetLeft;
  const yhover = y - elm.offsetTop;
  // Đưa thuộc tính vào khối button__hover
  order_btn_span.forEach(e => {
   e.style.setProperty('--xhover',xhover + 'px')
   e.style.setProperty('--yhover',yhover + 'px')
  })
 })
})

// Xử lí phần toggle question
var faq__question__title = document.querySelectorAll('.faq__question__title')
var faq__question__answer = document.querySelectorAll('.faq__question__answer')
faq__question__title.forEach(btn => {
  btn.addEventListener('click', function(e){
    faq__question__answer.forEach(acc => {
      if(e.target.nextElementSibling !== acc && acc.classList.contains('active')) {
        acc.classList.remove('active')
        faq__question__title.forEach((btn) => btn.classList.remove('active'))
      }
    })
    const panel = btn.nextElementSibling
    panel.classList.toggle('active')
    btn.classList.toggle('active')
  })
})

// Xử lí carousel
const videos = document.querySelectorAll('.video-background')
const dots = document.querySelectorAll('.video-bg-dot')
const nextBgBtn = document.querySelector('.video-next-btn')
const prevBgBtn = document.querySelector('.video-prev-btn')
let currentSlide = 0;
let previousSlide = 0;
videos[0].play();

function changSlideShow() {
  //Giới hạn
  if (currentSlide == -1) {
    currentSlide = index = videos.length - 1;
  }
  if (currentSlide == videos.length) {
    currentSlide = 0;
  }
  if (previousSlide >= 0 && previousSlide !== currentSlide) {
    videos[previousSlide].classList.remove('active');
    dots[previousSlide].classList.remove('active');
    videos[currentSlide].pause();
  }
  previousSlide = currentSlide;
  videos[currentSlide].currentTime = 0;
  videos[currentSlide].play();
  videos[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

prevBgBtn.addEventListener('click', () => {
  currentSlide--;
  changSlideShow();
})

nextBgBtn.addEventListener('click', () => {
  currentSlide++;
  changSlideShow();
})


dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dot.classList.add('active')
    currentSlide = index;
    changSlideShow();
  })
})


function letAnimation() {
  
}


// AOS
const featureItem = document.querySelectorAll('.feature__content__item')
const samsungLeft = document.querySelector('.about__content__samsung .about__content__left')
const samsungRight = document.querySelector('.about__content__samsung .about__content__right')
const xiaomiLeft = document.querySelector('.about__content__xiaomi .about__content__left')
const xiaomiRight = document.querySelector('.about__content__xiaomi .about__content__right')
const appleLeft = document.querySelector('.about__content__apple .about__content__left')
const appleRight = document.querySelector('.about__content__apple .about__content__right')
const vivoLeft = document.querySelector('.about__content__vivo .about__content__left')
const vivoRight = document.querySelector('.about__content__vivo .about__content__right')
const oppoLeft = document.querySelector('.about__content__oppo .about__content__left')
const oppoRight = document.querySelector('.about__content__oppo .about__content__right')
const vsmartLeft = document.querySelector('.about__content__vsmart .about__content__left')
const vsmartRight = document.querySelector('.about__content__vsmart .about__content__right')
const faqLeft = document.querySelector('.faq__content__left')
const faqRight = document.querySelector('.faq__content__right')
const aosAnimate = () => {
 window.addEventListener('scroll', () => {
   let featureItemPos = featureItem[0].getBoundingClientRect().top
   let samsungPos = samsungLeft.getBoundingClientRect().top
   let xiaomiPos = xiaomiLeft.getBoundingClientRect().top
   let applePos = appleLeft.getBoundingClientRect().top
   let vivoPos = vivoLeft.getBoundingClientRect().top
   let oppoPos = oppoLeft.getBoundingClientRect().top
   let vsmartPos = vsmartLeft.getBoundingClientRect().top
   let faqPos = faqLeft.getBoundingClientRect().top
   let screenPos = window.innerHeight
   if (featureItemPos < screenPos + 100) {
     featureItem.forEach(feature => {
      feature.classList.add('aos')
     })
    //  appleLeft.classList.add('aos') 
    //  appleRight.classList.add('aos')
   } else {
     featureItem.forEach(feature => {
      feature.classList.remove('aos')
     })
    //  appleLeft.classList.remove('aos') 
    //  appleRight.classList.remove('aos') 
   }
  //  Samsung
   if (samsungPos < screenPos + 100) {
     samsungLeft.classList.add('aos') 
     samsungRight.classList.add('aos')
   } else {
     samsungLeft.classList.remove('aos') 
     samsungRight.classList.remove('aos') 
   }
  //  Xiaomi
   if (xiaomiPos < screenPos + 100) {
     xiaomiLeft.classList.add('aos') 
     xiaomiRight.classList.add('aos')
   } else {
     xiaomiLeft.classList.remove('aos') 
     xiaomiRight.classList.remove('aos')
   }
  //  Apple
   if (applePos < screenPos - 100) {
     appleLeft.classList.add('aos') 
     appleRight.classList.add('aos')
   } else {
     appleLeft.classList.remove('aos') 
     appleRight.classList.remove('aos')
   }
  //  Vivo
   if (vivoPos < screenPos - 100) {
     vivoLeft.classList.add('aos') 
     vivoRight.classList.add('aos')
   } else {
     vivoLeft.classList.remove('aos') 
     vivoRight.classList.remove('aos')
   }
  //  Oppo
   if (oppoPos < screenPos - 100) {
     oppoLeft.classList.add('aos') 
     oppoRight.classList.add('aos')
   } else {
     oppoLeft.classList.remove('aos') 
     oppoRight.classList.remove('aos')
   }
  //  Vsmart
   if (vsmartPos < screenPos - 100) {
     vsmartLeft.classList.add('aos') 
     vsmartRight.classList.add('aos')
   } else {
     vsmartLeft.classList.remove('aos') 
     vsmartRight.classList.remove('aos')
   }
  //  faq
   if (faqPos < screenPos - 100) {
     faqLeft.classList.add('aos') 
     faqRight.classList.add('aos')
   } else {
     faqLeft.classList.remove('aos') 
     faqRight.classList.remove('aos')
   }
 })
}
aosAnimate()




