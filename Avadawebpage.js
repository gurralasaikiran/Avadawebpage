function f1(){
  document.getElementById("s").style.backgroundImage=`url(https://avada.com/wp-content/uploads/2021/07/live-visual.jpg)`
  document.getElementById("e").setAttribute("href" , `https://avada.com/feature/live-visual-builder/`)
  }
  function f2(){
    document.getElementById("s").style.backgroundImage=`url(https://avada.com/wp-content/uploads/2021/07/layout-builder-4.jpg)`
    document.getElementById("e").setAttribute("href" , `https://avada.com/feature/layout-builder/`)
  }
  function f3(){
    document.getElementById("s").style.backgroundImage=`url(https://avada.com/wp-content/uploads/2021/07/header-builder-5.jpg)`
    document.getElementById("e").setAttribute("href" , `hhttps://avada.com/feature/header-builder/`)
  }
  function f4(){
    document.getElementById("s").style.backgroundImage=`url(https://avada.com/wp-content/uploads/2023/03/mega-menu-feature.jpg)`
    document.getElementById("e").setAttribute("href" , `https://avada.com/feature/mega-menu-builder/`)
  }
  function f5(){
    document.getElementById("s").style.backgroundImage=`url(https://avada.com/wp-content/uploads/2021/07/form-builder.jpg)`
    document.getElementById("e").setAttribute("href" , `https://avada.com/feature/footer-builder/`)
  }
  function f6(){
    document.getElementById("s").style.backgroundImage=`url(https://avada.com/wp-content/uploads/2023/03/off-canvas-feature.jpg)`
    document.getElementById("e").setAttribute("href" , `https://avada.com/feature/form-builder/`)
  }
  function f7(){
    document.getElementById("s").style.backgroundImage=`url(https://avada.com/wp-content/uploads/2023/03/setup-wizard-1.jpg)`
    document.getElementById("e").setAttribute("href" , `https://avada.com/feature/off-canvas-builder/`)
  }
  function f8(){
    document.getElementById("s").style.backgroundImage=`url(https://avada.com/wp-content/uploads/2021/07/performance-wizard.jpg)`
    document.getElementById("e").setAttribute("href" , `https://avada.com/feature/performance-wizard/`)
  }

     // main.js file
var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}