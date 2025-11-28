// MENU HAMBURGER + OVERLAY
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const overlay = document.getElementById("overlay");

function openMenu() {
    navMenu.style.right = "0px";
    hamburger.classList.add("active");
    overlay.classList.add("active");
}

function closeMenu() {
    navMenu.style.right = "-250px";
    hamburger.classList.remove("active");
    overlay.classList.remove("active");
}

hamburger.addEventListener("click", (e)=>{e.stopPropagation(); navMenu.style.right==="0px"?closeMenu():openMenu();});
overlay.addEventListener("click", closeMenu);
document.querySelectorAll("#nav-menu a").forEach(a=>a.addEventListener("click", closeMenu));
document.addEventListener("click", ()=>{if(navMenu.style.right==="0px") closeMenu();});

// ENVOI EMAILJS FORMULAIRE DEVIS
const form = document.getElementById("devis-form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const formData = {
        name: form.name.value,
        email: form.email.value,
        details: form.details.value
    };
    emailjs.send('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID', formData)
        .then(function(response){
            alert("Merci ! Votre demande de devis a été envoyée.");
            form.reset();
        }, function(error){
            alert("Erreur, veuillez réessayer.");
            console.log(error);
        });
});
