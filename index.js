//Mobile menu
const openMobileMenuBtns = document.querySelectorAll(".nav__burger-menu");
const closeMobileMenuBtn = document.querySelector(".mobile-menu__close");
const mobileMenu = document.querySelector(".mobile-menu");
const blurOverlay = document.querySelector(".blur-overlay");


function openMobileMenu() {
    mobileMenu.classList.remove("none");
    blurOverlay.classList.add("blur-overlay_active");
}


function closeMobileMenu() {
    mobileMenu.classList.add("none");
    blurOverlay.classList.remove("blur-overlay_active");
}


openMobileMenuBtns.forEach(btn => btn.addEventListener("click", openMobileMenu));
closeMobileMenuBtn.addEventListener("click", closeMobileMenu);


//Feedback
const feedbackBtns = document.querySelectorAll(".feedback-btn");
const modalFeedback = document.querySelector(".modal-feedback");
const modalFeedbackCloseBtn = document.querySelector(".modal-feedback__close");



function openmodalFeedback() {
    modalFeedback.classList.remove("none");
    blurOverlay.classList.add("blur-overlay_active");
}

function closemodalFeedback() {
    modalFeedback.classList.add("none");
    blurOverlay.classList.remove("blur-overlay_active");
}


feedbackBtns.forEach(btn => btn.addEventListener("click", openmodalFeedback));
modalFeedbackCloseBtn.addEventListener("click", closemodalFeedback);


//Order a call
const orderCallBtns = document.querySelectorAll(".order-call-btn");
const modalOrderCall = document.querySelector(".modal-order-call");
const modalOrderCallCloseBtn = document.querySelector(".modal-order-call__close");


function openModalOrderCall() {
    modalOrderCall.classList.remove("none");
    blurOverlay.classList.add("blur-overlay_active");
}

function closeModalOrderCall() {
    modalOrderCall.classList.add("none");
    blurOverlay.classList.remove("blur-overlay_active");
}

orderCallBtns.forEach(btn => btn.addEventListener("click", openModalOrderCall));
modalOrderCallCloseBtn.addEventListener("click", closeModalOrderCall);



//Service selection
const headerListItems = document.querySelectorAll(".header-list__item");

headerListItems.forEach(listItem => listItem.addEventListener("click", function() {
    headerListItems.forEach(item => item.classList.remove("header-list__item_picked"));

    listItem.classList.add("header-list__item_picked");

}))


//Read more
const headerExpansionBtn = document.querySelector(".header__expansion-btn"); 
const headerInfoTextTablet = document.querySelector(".header-info-block__text_tablet");
const headerInfoTextDesktop = document.querySelector(".header-info-block__text_desktop");


headerExpansionBtn.addEventListener("click", function() {
    if (window.innerWidth < 768) {
        headerInfoTextDesktop.classList.toggle("header-info-block__text_desktop_clicked");
      } else if (window.innerWidth >= 768) {
        headerInfoTextTablet.classList.toggle("none")
        headerInfoTextDesktop.classList.toggle("header-info-block__text_desktop_clicked");
      }
})


