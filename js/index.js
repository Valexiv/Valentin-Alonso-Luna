let footer = document.createElement('footer');
document.body.appendChild(footer); 
let today = new Date();
let thisYear= today.getFullYear(); 
let copyright = document.createElement('p');
copyright.innerHTML= `&copy; ${thisYear} Valentin`;
footer.appendChild(copyright); 

let skills= ["Assemlby", " Welding", "Fabrication"];
let skillsSection= document.querySelector('#Skills');
let skillsList= skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement('li');       
  skill.innerText = skills[i];                    
  skillsList.appendChild(skill);                  
}


let messageForm=document.forms["leave_message"];
messageForm.addEventListener("submit", function(event){
  event.preventDefault();

  let userName = event.target.elements["usersName"].value;
  let userEmail = event.target.elements["usersEmail"].value;
  let usersMessage = event.target.elements["usersMessage"].value;
 
  console.log("Name:", userName);
  console.log("Email:", userEmail);
  console.log("Message:", usersMessage);

let messageSection=document.getElementById("messages");
let messageList = messageSection.querySelector("ul");
let newMessage= document.createElement("li"); 
newMessage.innerHTML = `
  <a href="mailto:${userEmail}">${userName}</a>
  <span> — ${usersMessage}</span>
`;

let removeButton=document.createElement("button");
removeButton.innerText="remove";
removeButton.type="button";
removeButton.addEventListener("click", function (){

  let entry=this.parentNode;
  entry.remove();
});
  newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);

  document.forms["leave_message"].reset();

}); 



