

//for popup of customer login
let popcuslog=document.querySelector(".popcuslog")
let logcus=document.querySelector(".logcus")
let closecuslog=document.querySelector(".closecuslog")
let logemp=document.querySelector(".logemp")
let popemplog=document.querySelector(".popemplog")
let regcus=document.querySelector(".regcus")
let popcusreg=document.querySelector(".popcusreg")
let successfulregistration=document.querySelector(".successfulregistration");
console.log(logcus)



//opening popup of customer login...
logcus.addEventListener('click',()=>{
    popcusreg.classList.remove("open-popup");
    popemplog.classList.remove("open-popup");
    popcuslog.classList.add("open-popup")

})


closecuslog.addEventListener('click',()=>{   
    popcuslog.classList.remove("open-popup")
})

const phonenumber = document.getElementById('phonenumber');
const password = document.getElementById('password');
let flag=true;



let subcuslog=document.querySelector('.subcuslog');
subcuslog.addEventListener('click',()=>{   //submitCustomerLogin
    flag=true;
    validateInputs();
    if(!flag) return;
    const userLoginBody={
        'user_phone_number':phonenumber.value,
        'user_password':password.value,
    }
    console.log(userLoginBody);

    fetch('http://127.0.0.1:8000/api/user/login',{
        
        'method': 'POST',

        'headers':{
                   'Content-Type':'application/json',
        },

        'body':JSON.stringify(userLoginBody), 
    })
    .then((response)=>{
      const hd=response.json();
        return hd;
    }).then((data)=>{
        const message=data.message;
        if(message!="login successful"){
          let loginStatus=document.querySelector('#customerloginmessage');
          loginStatus.innerHTML=message;

        }
        else{

            const cname='auth-token';
            const authToken=data[cname];
            setCookie(cname,authToken,1000000);
            console.log(document.cookie);
            setTimeout(window.location='./userDashboard.html',300000000);
            
        }
    }).catch((err)=>console.log(err));
}) 


//for popup of customer registration

regcus.addEventListener('click',()=>{
    popcuslog.classList.remove("open-popup");
    popemplog.classList.remove("open-popup");
    popcusreg.classList.add("open-popup")
})

let closecusreg=document.querySelector(".closecusreg")
closecusreg.addEventListener('click',()=>{
    popcusreg.classList.remove("open-popup")
})

const username = document.querySelector('#username');
const email = document.querySelector('#email');
const address=document.querySelector('#address');
const city=document.querySelector('#city');
const pin=document.querySelector('#pin')
const phonenumber1 = document.querySelector('#phonenumber1');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const state=document.querySelector('#state');


let subcusreg=document.querySelector('.subcusreg');

//customer registartion submit button.....
subcusreg.addEventListener('click', () => {
    flag=true;
    // validateInputs1(); 

    if(!flag) return;
    
   subcusreg.innerHTML="Loading......";
    
    const userObject={
        "user_name":username.value,
        "user_email":email.value,
        "user_password":password1.value,
        "user_retype_password":password2.value,
        "user_phone_number":phonenumber1.value,
        "user_state":state.value,
        "user_pincode":pin.value,
        "user_address":address.value,
        "user_city":city.value
    }
  
    console.log(userObject);

    fetch('http://127.0.0.1:8000/api/user/signUp',{
        'method':'POST',
        'headers':{
           'Content-Type':'application/json',
        },
        'body':JSON.stringify(userObject),
     })
     .then((response)=> {
        
        let yn = document.querySelector('#YN');
        if(response.ok){
         yn.innerHTML="Request successful!!!"
         yn.style.color='green';
        }
        else{
            yn.innerHTML="Request unsuccessful!!!";
            yn.style.color='red';
        }
        return response.json();
     }
     )
     .then(data=>{
        
        let responseElement=document.querySelector('#responsepopupdata');
        console.log(responseElement,data);
        responseElement.innerHTML=data.message;
        
     })
     .catch(err=>console.log(err));


//      //after getting data from server
     popcusreg.classList.remove("open-popup");
    
     successfulregistration.classList.add("open-popup");
     let closesuccessfulregistration=document.querySelector(".closesuccessfulregistration")
    
     closesuccessfulregistration.addEventListener('click',()=>{   
         successfulregistration.classList.remove("open-popup")

     })
   

   
});


//for pop of employee login

logemp.addEventListener('click',()=>{
    popcusreg.classList.remove("open-popup");
    popcuslog.classList.remove("open-popup");
    successfulregistration.classList.remove("open-popup");
    popemplog.classList.add("open-popup")
})

let closeemplog=document.querySelector(".closeemplog")
closeemplog.addEventListener('click',()=>{
    popemplog.classList.remove("open-popup")
})

const phonenumber2 = document.querySelector('#phonenumber2');
const password3 = document.querySelector('#password3');
let subemplog=document.querySelector('.subemplog');


// employee login submit button....
subemplog.addEventListener('click', e => {
    flag=true;
    validateInputs2(); 
    // document.write("You will be redirected to main page in 10 sec.");
     
    if(!flag) return;
    const empLoginBody={
        'emp_phone_number':phonenumber2.value,
        'emp_password':password3.value,
    }
    console.log(empLoginBody);

    fetch('http://127.0.0.1:8000/api/employee/login',{
        'method': 'POST',

        'headers':{
                   'Content-Type':'application/json',
        },

        'body':JSON.stringify(empLoginBody), 
    })
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        const message=data.message;
        console.log(data);
        if(message!="login successful"){
          let loginStatus=document.querySelector('#loginStatus');
          loginStatus.innerHTML=message;
        }
        else{
            const cname='auth-token';
            const authToken=data[cname];
            setCookie(cname,authToken,1000000);
            console.log(document.cookie);
           setTimeout(window.location="./employeeDashBoard.html", 300000000);
        
        }
    }).catch((err)=>console.log(err));

});




//for customer login validation
const setError = (element, message) => {
    flag=false;
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    return;
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    return
};

const isValidphone = phone => {
    const re = /^[0-9]{10}$/;
    return re.test(String(phone));
}

const isValidpin = pin => {
    const re = /^[0-9]{6}$/;
    return re.test(String(phone));
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const phoneValue = phonenumber.value.trim();
    const passwordValue = password.value.trim();


    if(phoneValue==''){
        setError(phonenumber,'phonenumber is required');
    } else if (phoneValue.length!=10){
        setError(phonenumber,'provide a valid phone number');
    } else if (!isValidphone(phoneValue)){
        setError(phonenumber, 'provide a valid phone number');
    }else{
        setSuccess(phonenumber);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
    return;
};



//for customer reg validation
const validateInputs1 = () => {
    console.log("nedowiweh....")
    const usernameValue = username.value.trim();
    console.log(usernameValue);
    const emailValue = email.value.trim();
    const phoneValue = phonenumber1.value.trim();
    const addressvalue = address.value.trim();
    const cityvalue = city.value.trim();
    console.log(pin);
    const pinvalue = pin.value.trim();
    const passwordValue = password1.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(phoneValue==''){
        setError(phonenumber1,'phonenumber is required');
    } else if (phoneValue.length!=10){
        setError(phonenumber1,'provide a valid phone number');
    } else if (!isValidphone(phoneValue)){
        setError(phonenumber1, 'provide a valid phone number');
    }else{
        setSuccess(phonenumber1);
    }

    if(addressvalue==''){
        setError(address,'address is required');
    }
    else{
        setSuccess(address)
    }

    if(cityvalue==''){
        setError(city,'city is required');
    }else{
        setSuccess(city);
    }

    // console.log(pinvalue)
    if(pinvalue==''){
        setError(pin,'phonenumber is required');
    } else if (pinvalue.length!=6){
        setError(pin,'provide a valid pincode');
    }else{
        setSuccess(pin);
    }

    if(passwordValue === '') {
        setError(password1, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password1, 'Password must be at least 8 character.')
    } else {
        setSuccess(password1);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};


//for validate employee login
const validateInputs2 = () => {
    const phoneValue = phonenumber2.value.trim();
    const passwordValue = password3.value.trim();


    if(phoneValue==''){
        setError(phonenumber2,'phonenumber is required');
    } else if (phoneValue.length!=10){
        setError(phonenumber2,'provide a valid phone number');
    } else if (!isValidphone(phoneValue)){
        setError(phonenumber2, 'provide a valid phone number');
    }else{
        setSuccess(phonenumber2);
    }

    if(passwordValue === '') {
        setError(password3, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password3, 'Password must be at least 8 character.')
    } else {
        setSuccess(password3);
    }

};



 //for popup of track
 let poptrack=document.querySelector(".poptrack")
 let trackbtn=document.querySelector(".trackbtn")
 
 console.log(poptrack)
 console.log(trackbtn)
 trackbtn.addEventListener('click',()=>{
     const courier_id= document.querySelector('#track').value;
     console.log(courier_id);

     fetch(`http://127.0.0.1:8000/api/courierSearch?courier_id=${courier_id}`,{
        'method': 'GET',

        'headers':{
                   'Content-Type':'application/json',
        },

     

    })
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        const message=data.message;
        console.log(data);
        document.querySelector('#courierstatusx').innerHTML=JSON.stringify(data);
        
    }).catch((err)=>console.log(err));

     poptrack.classList.add("open-popup")
 })


 let closepoptrack=document.querySelector(".closepoptrack")
 closepoptrack.addEventListener('click',()=>{
     poptrack.classList.remove("open-popup")
 })



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

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

