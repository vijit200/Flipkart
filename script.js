let ham = document.getElementById("ham")
let slide1 = document.getElementById("slide-pg1")
ham.addEventListener("click",(e)=>{
    slide1.classList.toggle("translate-x-[-100%]")
})

slide1.addEventListener("click",(e)=>{
    if (slide1 !== e.target){
        slide1.classList.toggle("translate-x-[-100%]")
    }
})