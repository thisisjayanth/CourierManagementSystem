



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



// const setError = (element, message) => {
//     flag=false;
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');
//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
//     return;
// }
 
// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');
//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
//     return
// };

// const isValidphone = phone => {
//     const re = /^[0-9]{10}$/;
//     return re.test(String(phone));
// }

// const isValidpin = pin => {
//     const re = /^[0-9]{6}$/;
//     return re.test(String(phone));
// }

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }




// //sender validations
// const senderusername = document.getElementById('senderusername');
// const senderemail = document.getElementById('senderemail');
// const senderaddress=document.getElementById('senderaddress');
// const senderpin=document.getElementById('senderpin')
// const senderphonenumber = document.getElementById('senderphonenumber');
// const sendercity = document.getElementById('sendercity');

// let flag=true;

// const sendervalidateInputs = () => {
//     const senderusernameValue = senderusername.value.trim();
//     const senderemailValue = senderemail.value.trim();
//     const senderphoneValue = senderphonenumber.value.trim();
//     const senderaddressvalue = senderaddress.value.trim();
//     const senderpinvalue = senderpin.value.trim();
//     const sendercityValue = sendercity.value.trim();

//     if(senderusernameValue === '') {
//         setError(senderusername, 'Username is required');
//     } else {
//         setSuccess(senderusername);
//     }

//     if(senderemailValue === '') {
//         setError(senderemail, 'Email is required');
//     } else if (!isValidEmail(senderemailValue)) {
//         setError(senderemail, 'Provide a valid email address');
//     } else {
//         setSuccess(senderemail);
//     }

//     if(senderphoneValue==''){
//         setError(senderphonenumber,'phonenumber is required');
//     } else if (senderphoneValue.length!=10){
//         setError(senderphonenumber,'provide a valid phone number');
//     } else if (!isValidphone(senderphoneValue)){
//         setError(senderphonenumber, 'provide a valid phone number');
//     }else{
//         setSuccess(senderphonenumber);
//     }

//     if(senderaddressvalue==''){
//         setError(senderaddress,'address is required');
//     }
//     else{
//         setSuccess(senderaddress)
//     }

//     if(senderpinvalue==''){
//         setError(senderpin,'phonenumber is required');
//     } else if (senderpinvalue.length!=6){
//         setError(senderpin,'provide a valid pincode');
//     }else{
//         setSuccess(senderpin);
//     }

//     if(sendercityValue === '') {
//         setError(sendercity, 'Password is required');
//     } else {
//         setSuccess(sendercity);
//     } 

// };



// //for validation of receiver
// const receiverusername = document.getElementById('receiverusername');
// const receiveremail = document.getElementById('receiveremail');
// const receiveraddress=document.getElementById('receiveraddress');
// const receiverpin=document.getElementById('receiverpin')
// const receiverphonenumber = document.getElementById('receiverphonenumber');
// const receivercity = document.getElementById('receivercity');

// const receivervalidateInputs = () => {
//     const receiverusernameValue = receiverusername.value.trim();
//     const receiveremailValue = receiveremail.value.trim();
//     const receiverphoneValue = receiverphonenumber.value.trim();
//     const receiveraddressvalue = receiveraddress.value.trim();
//     const receiverpinvalue = receiverpin.value.trim();
//     const receivercityValue = receivercity.value.trim();

//     if(receiverusernameValue === '') {
//         setError(receiverusername, 'Username is required');
//     } else {
//         setSuccess(receiverusername);
//     }

//     if(receiveremailValue === '') {
//         setError(receiveremail, 'Email is required');
//     } else if (!isValidEmail(receiveremailValue)) {
//         setError(receiveremail, 'Provide a valid email address');
//     } else {
//         setSuccess(receiveremail);
//     }

//     if(receiverphoneValue==''){
//         setError(receiverphonenumber,'phonenumber is required');
//     } else if (receiverphoneValue.length!=10){
//         setError(receiverphonenumber,'provide a valid phone number');
//     } else if (!isValidphone(receiverphoneValue)){
//         setError(receiverphonenumber, 'provide a valid phone number');
//     }else{
//         setSuccess(receiverphonenumber);
//     }

//     if(receiveraddressvalue==''){
//         setError(receiveraddress,'address is required');
//     }
//     else{
//         setSuccess(receiveraddress)
//     }

//     if(receiverpinvalue==''){
//         setError(receiverpin,'phonenumber is required');
//     } else if (receiverpinvalue.length!=6){
//         setError(receiverpin,'provide a valid pincode');
//     }else{
//         setSuccess(receiverpin);
//     }

//     if(receivercityValue === '') {
//         setError(receivercity, 'Password is required');
//     } else {
//         setSuccess(receivercity);
//     } 

// };

 




// //for pricing validation
// let weight=document.querySelector("#weight");
// let price=document.querySelector("#price");
// //validation of pricing
// const pricevalidation=()=>{
//     const weightvalue=weight.value.trim();
//     const pricevalue=price.value.trim();
//     if(weightvalue==''){
//         setError(weight,"weight is required");
//     }else{
//         setSuccess(weight);
//     }
//     if(pricevalue==""){
//         setError(price,"price is required");
//     }else{
//         setSuccess(price);
//     }
// }

let createorder=document.querySelector(".createorder");
createorder.addEventListener('click',()=>{
    const obj={

       "from_name":document.querySelector('#senderusername').value,
       "courier_id":document.querySelector('#courierid').value,
       "from_email":document.querySelector('#senderemail').value,
       "from_phone_number":document.querySelector('#senderphonenumber').value,
       "from_state":document.querySelector('#senderstate').value,
       "from_pincode":document.querySelector('#senderpin').value,
       "from_city":document.querySelector('#sendercity').value,
       "courier_status":document.querySelector('#courierstatus').value,
       "to_name":document.querySelector('#receiverusername').value,
       "to_email":document.querySelector('#receiveremail').value,
       "to_phone_number":document.querySelector('#receiverphonenumber').value,
       "to_state":document.querySelector('#receiverstate').value,
       "to_pincode":document.querySelector('#receiverpin').value,
       "to_city":document.querySelector('#receivercity').value,
       "couriers_placed_from_this_date":document.querySelector('#orderedafterdate').value,
       "couriers_placed_until_this_date":document.querySelector('#orderedbeforedate').value,
       "couriers_delivered_from_this_date":document.querySelector('#delivereafterdate').value,
       "couriers_delivered_until_this_date":document.querySelector('#deliverebeforedate').value,

    }
    console.log(obj);

    fetch('http://127.0.0.1:8000/api/employee/filterCourierData',{
        'method':'POST',
        'headers':{
           'Content-Type':'application/json',
           'authorization':getCookie('auth-token')
        },

        'body':JSON.stringify(obj),
     })
     .then((response)=> {
        return response.json();
     }
     )
     .then(data=>{
        
        let responseElement=document.querySelector('#responsepopupdata');
        console.log(responseElement,data);
        const msg=data.message;
        if(msg=="Courier Created Successfully")
        responseElement.innerHTML=" Your Courier is Created with courier id " + data.courier_id;
        else 
        responseElement.innerHTML=msg;
        
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
       
       createorder.innerHTML="Update Profile";
    
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
    let employeeName=document.querySelector('#username');
     employeeName.innerHTML=data.emp_name;
     console.log(data);
  }).catch(
      (err)=>{
      document.write(err);
      setTimeout(window.location='./home.html',3000);
      }
  );
  }


