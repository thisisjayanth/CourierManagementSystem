
const username = document.getElementById('username');
const email = document.getElementById('email');
const address=document.getElementById('address');
const pin=document.getElementById('pin')
const phonenumber1 = document.getElementById('phonenumber1');
const password1 = document.getElementById('password1');
const state=document.querySelector('#state');

// console.log(phonenumber1.placeholder);
// phonenumber1.placeholder="phone number"
// console.log(phonenumber1.placeholder);

// const password2 = document.getElementById('password2');
let flag=true;
let submitupdate=document.querySelector('.submitupdate');
submitupdate.addEventListener('click', () => {
    flag=true;
    validateInputs(); 
     if(!flag) return;

     submitupdate.innerHTML="Loading......";
    
     const userObject={
         "emp_name":username.value,
         "emp_email":email.value,
         "emp_password":password1.value,
         "emp_phone_number":phonenumber1.value,
         "emp_state":state.value,
         "emp_pincode":pin.value,
         "emp_address":address.value,
        //  "user_city":city.value
     }
   
     console.log(userObject);
 
     fetch('http://127.0.0.1:8000/api/employee/updateProfile',{
         'method':'POST',
         'headers':{
            'Content-Type':'application/json',
            'authorization':getCookie('auth-token')
         },

         'body':JSON.stringify(userObject),
      })
      .then((response)=> {
         
         let yn = document.querySelector('#YN');
         if(response.status==401){
            setTimeout(window.location="./home.html",1000);
            return;
         }
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
         if(data.message=='data updated successfully'){
         document.getElementById('username2').innerHTML=data.emp_name;
         username.value=data.emp_name;
         email.value=data.emp_email;
         address.value=data.emp_address;
         pin.value=data.emp_pincode;
         phonenumber1.value=data.emp_phone_number;
         document.querySelector("#state").value=data.emp_state;
         }

         
      })
        .catch(
            (err)=>{
              console.log(err);
            }
        );

        const successfulregistration=document.querySelector('.successfulregistration')
        successfulregistration.classList.add("open-popup2");
        let closesuccessfulregistration=document.querySelector(".closesuccessfulregistration")
       
        closesuccessfulregistration.addEventListener('click',()=>{   
            successfulregistration.classList.remove("open-popup2");
            let responseElement=document.querySelector('#responsepopupdata');
            console.log(responseElement);
            responseElement.innerHTML="";
   
        })
        
        submitupdate.innerHTML="Update Profile";

});


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



//for customer reg validation
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phonenumber1.value.trim();
    const addressvalue = address.value.trim();
    // console.log(pin);
    const pinvalue = pin.value.trim();
    const passwordValue = password1.value.trim();
    // const password2Value = password2.value.trim();
    // console.log(username);

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

    

};


//for popup of customer login
let popupcustomerlogout=document.querySelector(".popupcustomerlogout")
let logcus=document.querySelector(".logoutcustomer")
console.log(logcus)
logcus.addEventListener('click',()=>{
    popupcustomerlogout.classList.add("open-popup")
})
let closecustomerlogout=document.querySelector(".closecustomerlogout")
closecustomerlogout.addEventListener('click',()=>{
    popupcustomerlogout.classList.remove("open-popup")
})

let logout=document.querySelector('#logout');

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
  

const getEmployeeData=()=>{

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
    console.log(data);
   document.getElementById('username2').innerHTML=data.emp_name;
   username.value=data.emp_name;
   email.value=data.emp_email;
   address.value=data.emp_address;
   pin.value=data.emp_pincode;
   phonenumber1.value=data.emp_phone_number;
   document.querySelector("#state").value=data.emp_state;
}).catch(
    (err)=>{
    document.write(err);
    setTimeout(window.location='./home.html',3000);
    }
);
}


// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const address=document.getElementById('address');
// const pin=document.getElementById('pin')
// const phonenumber1 = document.getElementById('phonenumber1');
// const password1 = document.getElementById('password1');