const lis = document.querySelectorAll("li")
const ul = document.querySelector("ul")

        const i1 = document.querySelector("#item1")
        const i2 = document.querySelector("#item2")
        const i3 = document.querySelector("#item3")
        const i4 = document.querySelector("#item4")
        const i5 = document.querySelector("#item5")
        
        const a1 = document.querySelector("#um")
        const a2 = document.querySelector("#dois")
        const a3 = document.querySelector("#tres")
        const a4 = document.querySelector("#quatro")
        const a5 = document.querySelector("#cinco")

lis.forEach( (item, index) => {

    item.addEventListener("click", () =>{

        ul.querySelector(".futureli").classList.remove("futureli")
        item.classList.add("futureli")
    })

})

i1.addEventListener("click",()=>{
    a1.style.display = "flex"
    a2.style.display = "none"
    a3.style.display = "none"
    a5.style.display = "none"
    a4.style.display = "none"
})

i2.addEventListener("click",()=>{
    a2.style.display = "flex"
    a3.style.display = "none"
    a1.style.display = "none"
    a5.style.display = "none"
    a4.style.display = "none"
})

i3.addEventListener("click",()=>{
    a5.style.display = "none"
    a4.style.display = "none"
    a3.style.display = "flex"
    a2.style.display = "none"
    a1.style.display = "none"
})

i4.addEventListener("click",()=>{
    a5.style.display = "none"
    a4.style.display = "flex"
    a3.style.display = "none"
    a2.style.display = "none"
    a1.style.display = "none"
})

i5.addEventListener("click",()=>{
    a5.style.display = "flex"
    a4.style.display = "none"
    a3.style.display = "none"
    a2.style.display = "none"
    a1.style.display = "none"
})

