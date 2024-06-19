let about = document.querySelector(".about")
let aboutModal = document.querySelector(".about-modal")
let main = document.querySelector(".main")

about.addEventListener("click",function(e){
    e.preventDefault();
    // main.classList.add("hidden")
    aboutModal.classList.contains("hidden") ? aboutModal.classList.remove("hidden") : aboutModal.classList.add("hidden");
})
