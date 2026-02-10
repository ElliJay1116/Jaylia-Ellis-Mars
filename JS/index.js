//Making a Footer//
const footerMaker = document.createElement('footer');
footerMaker.className = 'bottom-page';


document.body.append(footerMaker);


const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = ` Jaylia Ellis ${thisYear}`;
footer.appendChild(copyright);
// End of Making a Footer//

// Adding skills in JS with DOM//

const skills = [
    "Javascript", 
    "CSS", 
    "HTML",
    "Github",
    "Hubspot", 
    "Salesforce", 
    "Relationship Building", 
    "Objection Handling", 
    "Porblem Solving", 
    "Time Management", 
    "Customer Onboarding" ];
const skillSection = document.getElementById("skills");
const skillList = skillSection.querySelector('ul');

for (let i=0; i < skills.length; i++) {
    let skill = document.createElement('li');
    let textNode = document.createTextNode(skills[i]);
    skill.appendChild(textNode);
    skillList.appendChild(skill);
}