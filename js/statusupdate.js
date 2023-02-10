//for popup of logout
let popupordercreationlogout=document.querySelector(".popupordercreationlogout")
let logcus=document.querySelector(".logoutcustomer")
console.log(logcus)
logcus.addEventListener('click',()=>{
    popupordercreationlogout.classList.add("open-popup")
})
let closecustomerlogout=document.querySelector(".closecustomerlogout")
closecustomerlogout.addEventListener('click',()=>{
    popupordercreationlogout.classList.remove("open-popup")
})