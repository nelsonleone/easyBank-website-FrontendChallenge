const openNav = document.getElementById('openNav')
const navLinks = document.getElementById('primary-navLinks')

openNav.addEventListener('click', function(){
    if(openNav.src.match("hamburger")){
        openNav.src = "images/icon-close.svg";
        navLinks.style.display = "block";
    }else{
        openNav.src = "images/icon-hamburger.svg";
        navLinks.style.display = "none";
    }

})
