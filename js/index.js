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

fetch('https://api.github.com/users/Valexiv/repos') 
.then(response => response.json())
 .then(data=>{ console.log("Fetched repos: ", data); 
  return data;
 }) 
 .then(data=>{ let repositories=data; console.log ("repositories: ", repositories);
   let projectSection= document.getElementById("Projects"); let projectList=projectSection.querySelector("ul"); 
   for (let i=0;i< repositories.length; i++)
     { let project=document.createElement("li"); project.innerText= repositories[i].name; projectList.appendChild(project); }; })
   .catch(error=>{ console.error("Error fetching repositories: ", error); });