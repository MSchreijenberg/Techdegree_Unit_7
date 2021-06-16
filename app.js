const alertBanner = document.getElementById("alert");
const notifications = document.getElementById("notifications");
const popup = document.getElementById("popup");
const dot = document.getElementById("dot");
const user= document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");


alertBanner.innerHTML =
`<div class="alert-banner">
    <p><strong>Alert:</strong> You have unread messages</p>
    <p class="alert-banner-close">X</p>
    </div>
`
alertBanner.addEventListener('click', e =>{
    const element = e.target;
    if(element.classList.contains("alert-banner-close")){
        alertBanner.style.display ="none"
    }
});

send.addEventListener('click', ()=>{
    if(user.value === "" && message.value=== ""){
        alert("Please fill out user and messages fields before sending");
    }else if(user.value === ""){
        alert("Please fill out user field before sending");
    }else if(message.value === ""){
        alert("Please fill out message field before sending");
    }else{
        alert(`Message succesfully sent to: ${user.value}`)
    }
} );

let messageShown=false;
notifications.addEventListener('click', ()=>{

    if(!messageShown){
        let message = document.createElement('div');
        message.className = "popup-message";
        message.innerHTML =
        `
        <p>You have a message from Dawn</p>
        <p class="message-close">X</p>   
        `;
        popup.appendChild(message);
        dot.style.display = "none";
        messageShown=true;
    }
  
});

popup.addEventListener('click', e =>{
    const element = e.target;
    
    if(element.classList.contains("message-close")){
        const parent = element.parentNode;
        parent.parentNode.removeChild(parent);
    }
});



