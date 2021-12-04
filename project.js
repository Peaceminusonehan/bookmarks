const lebal =document.querySelector(".ham")
const ull =document.querySelector(".ul1")
const over=document.querySelector(".overlay")
const laybar=() => {
   if (over.classList.contains("lee")) {
       over.classList.remove("show")
       over.classList.remove("lee")
   } else{
    over.classList.add("show")
    over.classList.add("lee")
   }
  
}

lebal.addEventListener("click",laybar)
ull.addEventListener("click",laybar)

