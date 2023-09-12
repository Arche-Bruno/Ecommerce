var nav = document.getElementById("nav")

function scrollHandler(){

    if(window.scrollY >=200){
        nav.classList.add("scrolling-nav")
        nav.classList.remove("scrolling-nav-remove")
    }else{
        nav.classList.remove("scrolling-nav")
        nav.classList.add("scrolling-nav-remove")
    }
}


window.addEventListener("scroll", scrollHandler)
