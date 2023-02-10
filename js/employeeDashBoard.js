

let logout=document.querySelector('#logout');
let popupcustomerlogout=document.querySelector(".popupcustomerlogout")
let logcus=document.querySelector(".logoutcustomer")
let employeeName=document.querySelector('#employeeName');


logcus.addEventListener('click',()=>{
    popupcustomerlogout.classList.add("open-popup");
})


let closecustomerlogout=document.querySelector(".closecustomerlogout")
closecustomerlogout.addEventListener('click',()=>{
    popupcustomerlogout.classList.remove("open-popup");

})

logout.addEventListener('click',()=>{
    setCookie('auth-token',"",-1);
    console.log(document.cookie);
    setTimeout(window.location="./home.html",1000);
    console.log("hello....");
    console.log(document.cookie);

})

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
  
const getEmployeeName=()=>{

  fetch('http://127.0.0.1:8000/api/employee/getMyProfile',{
        
     
    'headers':{
               'Content-Type':'application/json',
               'authorization': getCookie('auth-token')
    },
})
.then((response)=>{
    console.log(getCookie('auth-token'));
  const hd=response.json();
    return hd;
}).then((data)=>{
   employeeName.innerHTML=data.emp_name;
   console.log(data);
}).catch(
    (err)=>{
    document.write(err);
    setTimeout(window.location='./home.html',3000);
    }
);
}


