const menuBtn = document.querySelector(".menu-btn")
const navLinks = document.querySelector(".nav-links")

menuBtn.onclick = () => {
navLinks.classList.toggle("active")
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e){
e.preventDefault()

document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"})
})
})

const toggle = document.getElementById("theme-toggle")

toggle.onclick = () =>{
document.body.classList.toggle("light-mode")
}

AOS.init({
duration:1000
})