// smooth hover animation

document.querySelectorAll(".sidebar a").forEach(link => {

link.addEventListener("mouseover",()=>{
link.style.transform="translateX(4px)"
})

link.addEventListener("mouseout",()=>{
link.style.transform="translateX(0px)"
})

})
