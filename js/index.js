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