///QUESTIONS////////////////////////////////////////////////////////////////////////

const navbarNav = document.querySelectorAll(".arrow-button");
//const btnArrow = document.querySelectorAll(".arrow-button");

navbarNav.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        
        const dropmenu = e.currentTarget.parentElement.nextElementSibling;
        console.log(dropmenu)
        dropmenu.classList.toggle("show-menu");
        
    });
});


navbarNav.forEach(function (bt) {
    bt.addEventListener("click", function (e) {
        const current = e.currentTarget;
        console.log(current)
        current.classList.toggle("arrow-light")
           
    });
});

/*SIDEBAR*////////////////////////////////////////////////////

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");
const hamIcon = document.querySelector(".ham-icon");
const closeIcon = document.querySelector(".close-icon");

toggleBtn.addEventListener("click", function () {

     if (sidebar.classList.contains("show-sidebar")) {       
        closeIcon.style.visibility = "hidden";
         hamIcon.style.visibility = "visible";
      sidebar.classList.remove("show-sidebar");
     } else {
       sidebar.classList.add("show-sidebar");
        closeIcon.style.visibility ="visible";
         hamIcon.style.visibility = "hidden";
    }
   // sidebar.classList.toggle("show-sidebar");
    console.log(sidebar)
});
/*
closeIcon.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});*/
//});

//closeBtn.addEventListener("click", function () {
  //  sidebar.classList.remove("show-sidebar");

//});

/*
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (bt) {
    bt.addEventListener("click", function (e) {
        const current = e.currentTarget;

        current.classList.toggle("arrow-up");
    });
});*/