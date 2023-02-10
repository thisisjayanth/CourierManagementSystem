

let logout=document.querySelector('#logout');
let popupcustomerlogout=document.querySelector(".popupcustomerlogout")
let logcus=document.querySelector(".logoutcustomer")
let username=document.querySelector('#username');


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
  
const getUserCourierData=()=>{

  fetch('http://127.0.0.1:8000/api/user/getMyProfile',{
        
     
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
   username.innerHTML=data.user_name;
}).catch(
    (err)=>{
    document.write(err);
    setTimeout(window.location='./home.html',3000);
    }
);


fetch('http://127.0.0.1:8000/api/user/getMyCourierDataAsSender',{
        
     
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
    console.log(data['data']);
    buildTable(data['data']);
//    username.innerHTML=data.user_name;
}).catch(
    (err)=>{
    document.write(err);
    // setTimeout(window.location='./home.html',3000);
    }
);


}



function buildTable(data){
    var table = document.getElementById('myTable');
    table.innerHTML = ''
    console.log(table.innerHTML);
    console.log(data.length);
    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${i+1}</td>
                        <td>${data[i].courier_id}</td>
                        <td>${data[i].courier_created_date}</td>
                        <td>${data[i].from_name}</td>
                        <td>${data[i].to_name}</td>
                        <td>${data[i].courier_status}</td>
                        <td><button id=more_info${i+1}><</button></td>
                  </tr>`
        table.innerHTML += row


    }
    console.log(table.innerHTML);
}