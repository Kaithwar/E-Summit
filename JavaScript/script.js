const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const rightdiv = document.querySelector('.rightdiv')
const navlist = document.querySelector('.navlist')

burger.addEventListener('click',()=>{
    rightdiv.classList.toggle('vclassresp');
    navlist.classList.toggle('vclassresp');
    navbar.classList.toggle('hnavresp');
}) 

// Responsive navigation menu toggle

const menubtn = document.querySelector(".burger")
const closebtn = document.querySelector(".nav-close-btn")
const navigation = document.querySelector(".navlist")
const navItem = document.querySelectorAll(".navlist ul li")

menubtn.addEventListener("click", () => {
    navigation.classList.add("active");
})

closebtn.addEventListener("click", () => {
    navigation.classList.remove("active");
})

navItem.forEach((navItem) =>{
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    })
})

// Navigation bar effect on scroll 
window.addEventListener("scroll", function(){
  const header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
})

// Navigation effect on Scrolling

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
      let sectionHeight = current.offsetHeight;
      let sectionTop = current.offsetTop - 50;
      let id = current.getAttribute("id");

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector(".navlinks ul li a[href*=" + id + "]").classList.add("active");
      }
      else{
          document.querySelector(".navlinks ul li a[href*=" + id + "]").classList.remove("active");
      }
  })
})
