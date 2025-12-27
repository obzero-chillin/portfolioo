const burger = document.querySelector(".burger");
const nav = document.querySelector(".navContainer");

burger.addEventListener("click", ()=>{
    nav.classList.toggle("open");
})

if(window.innerWidth<768){
    const navbtn = document.querySelector('.navItem');
    navbtn.onclick(()=>{
        nav.classList.toggle("open");
    })
}

//............................................................................
