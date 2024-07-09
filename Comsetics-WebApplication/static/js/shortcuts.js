function main(event){
    main_controller(event);
    if (window.location.href.includes("index")){
        Nav_handler(event);
    }
    else
    if (window.location.href.includes("shop")){
        Nav_handler(event);
    }
    else
    if (window.location.href.includes("about")){
        Nav_handler(event);
    }
    else
    if (window.location.href.includes("contactus")){
        Nav_handler(event);

    }
    else
    if (window.location.href.includes("login")){
        login_handler(event);
    }
    else
    if (window.location.href.includes("cart")){
        cart_handler(event);
    }

}
function main_controller(event){
    if (event.key === "Backspace") {
        event.preventDefault();
        history.back();
    }
}
function Nav_handler(event) {
    if (event.ctrlKey && event.key === "l") {
        event.preventDefault();
        window.location.href = "../templates/login.html";
    } else if (event.key === "1") {
        event.preventDefault();
        window.location.href= "../templates/index.html";
    }else if(event.key === "2"){
        event.preventDefault();
        window.location.href= "../templates/shop.html";
    }else if(event.key === "3"){
        event.preventDefault();
        window.location.href= "../templates/about.html";
    }else if(event.key === "4"){
        event.preventDefault();
        window.location.href= "../templates/contactus.html";
    }else if(event.key === "Tab"){
        event.preventDefault();
        window.location.href= "../templates/cart.html";
    }
    // Search doesn't exist yet
    // else if(event.ctrlKey && event.key === "s") {
    //     event.preventDefault();
    //     window.location.href = "../templates/search.html";
    // }
}
function login_handler(event) {
    if (event.ctrlKey && event.key === "l") {
        event.preventDefault();
        history.back();
    }
}
function cart_handler(event) {
    if (event.key === "Tab") {
        event.preventDefault();
        history.back();
    }
}
function JOKE_ON_YOU_HaHaHa(){
    var logo = document.querySelector("img");
    logo.addEventListener("mouseover", (e)=>{logo.style.cursor = "pointer";});
    logo.addEventListener("click", (e)=>{window.location.href= "../templates/index.html";});
    // document.querySelector("img").addEventListener("click", (e)=>{window.alert("wa3")})
}
document.addEventListener("keydown", main);
JOKE_ON_YOU_HaHaHa();