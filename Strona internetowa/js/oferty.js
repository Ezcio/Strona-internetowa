var box = document.querySelectorAll(".oferta");


box.forEach(element => {
    element.addEventListener("mouseup", () =>{
        tytul = element.querySelector(".tytulOferty")
        opis = element.querySelector(".opisOferty")
        tytul.classList.toggle("tytulOferty-animation");
        opis.classList.toggle("opisOferty-animation");
        element.classList.toggle("oferta-animation");
    });
});