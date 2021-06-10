const list=document.querySelector("ul")
const share=document.getElementById("shareBtn")
const triangle=document.querySelector(".triangle")
const removeBtn=document.getElementById("removeBtn")
share.addEventListener("click",()=>{
list.classList.toggle("open")
triangle.classList.toggle("opent")

})
removeBtn.addEventListener("click",()=>{
    list.classList.remove("open")
})
