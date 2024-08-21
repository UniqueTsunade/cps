// Common elements
const sidebar = document.querySelector(".sidebar");
const sidebarHeader = document.querySelector(".sidebar__header");
const blurOverlay = document.querySelector(".blur-overlay");
const modalWindow = document.querySelector(".modal-window");

// Individual elements
const openMobileMenuBtns = document.querySelectorAll(".nav__burger-menu");  
const mobileMenuCloseBtn = document.querySelector(".sidebar__close-btn");  
 
const feedbackBtns = document.querySelectorAll(".feedback-btn");  
const modalFeedback = document.querySelector(".modal-window__feedback");  
const modalCloseBtns = document.querySelectorAll(".modal-window__close-btn"); 


const orderCallBtns = document.querySelectorAll(".order-call-btn");  
const modalOrderCall = document.querySelector(".modal-window__order-call"); 

// function to open/close mobile menu
function toggleMobileMenu(isOpen) {
    if (isOpen) {
        sidebar.classList.add("sidebar_mobile");
        sidebarHeader.classList.add("sidebar__header--mobile");
        blurOverlay.classList.add("blur-overlay_active");
    } else {
        sidebar.classList.remove("sidebar_mobile");
        sidebarHeader.classList.remove("sidebar__header--mobile");
        blurOverlay.classList.remove("blur-overlay_active");
    }
}

// function to open/close modal window
function toggleModal(isOpen, modalType) {
    if (isOpen) {
        blurOverlay.classList.add("blur-overlay_active");
        modalWindow.classList.remove("is--hidden");
        modalType.classList.remove("is--hidden");
    } else {
        blurOverlay.classList.remove("blur-overlay_active");
        modalWindow.classList.add("is--hidden");
        modalType.classList.add("is--hidden");
    }
}


// Open mobile menu
openMobileMenuBtns.forEach(btn => 
    btn.addEventListener("click", () => toggleMobileMenu(true))
);

// Close mobile menu
mobileMenuCloseBtn.addEventListener("click", () => toggleMobileMenu(false));

// Open feedback
feedbackBtns.forEach(btn => 
    btn.addEventListener("click", () => {
        toggleMobileMenu(false);
        toggleModal(true, modalFeedback);
    })
);

// Close feedback
modalCloseBtns.forEach(btn => 
    btn.addEventListener("click", () => toggleModal(false, modalFeedback))
);

// Open order call
orderCallBtns.forEach(btn => 
    btn.addEventListener("click", () => {
        toggleMobileMenu(false);
        toggleModal(true, modalOrderCall);
    })
);

// Close order call
modalCloseBtns.forEach(btn => 
    btn.addEventListener("click", () => toggleModal(false, modalOrderCall))
);

// Closing on click outside the modal window
blurOverlay.addEventListener("click", () => {
    toggleMobileMenu(false, modalFeedback)
    toggleModal(false, modalFeedback);
    toggleModal(false, modalOrderCall);
});

// Closing by pressing Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        toggleMobileMenu(false, sidebar);
        toggleModal(false, modalFeedback);
        toggleModal(false, modalOrderCall);
    }
});


//Menu item selection
const headerListItems = document.querySelectorAll(".descriptive-content__item");

headerListItems.forEach(listItem => listItem.addEventListener("click", function() {
    headerListItems.forEach(item => item.classList.remove("descriptive-content__item--picked"));

    listItem.classList.add("descriptive-content__item--picked");

}))


//Read more
const headerExpansionBtn = document.querySelector(".descriptive-content__expansion-btn"); 
const headerInfoTextTablet = document.querySelector(".descriptive-content__text--tablet");
const headerInfoTextDesktop = document.querySelector(".descriptive-content__text--desktop");


headerExpansionBtn.addEventListener("click", function() {
    if (window.innerWidth < 768) {
        headerExpansionBtn.classList.toggle("up");
        headerInfoTextDesktop.classList.toggle("descriptive-content__text--desktop-clicked");
      } else if (window.innerWidth >= 768) {
        headerExpansionBtn.classList.toggle("up");
        headerInfoTextTablet.classList.toggle("is--hidden");
      }
})


