const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video")
const linkDoVideo= video.src;
const modal= document.querySelector(".modal");

botaoTrailer.addEventListener("click",()=>{
    
    modal.classList.add("aberto")
    video.setAttribute("src", linkDoVideo)
    
})


const fmodal = document.querySelector(".fechar-modal")
fmodal.addEventListener("click",()=>{

    modal.classList.remove("aberto")
    video.setAttribute("src", "")

})
