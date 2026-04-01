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
    "Problem Solving", 
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
// leaving a message field and returning the message//

const messageForm = document.forms["leave_message"];
 messageForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const userName = event.target.userName.value;
    const userEmail = event.target.userEmail.value;
    const userMessage = event.target.userMessage.value;

    console.log(userName, userEmail, userMessage);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");

    newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a>
    <span> ${userMessage}</span>`;

    const removeButton =document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
 });

 //fetch//

 fetch("https://api.github.com/users/ElliJay1116/repos")
    .then(function (response) {
        return response.json();
    })
    .then (function (repositories) {

console.log(repositories);

// const promise = new Promise((resolve, reject) => {
//     throw new Error("error: repo is empty");
// })
//     promise.catch(Error) ; {
//         console.error(Error);
//     };
const projectSection = document.getElementById("Projects");
const projectList= projectSection.querySelector("ul");

for (let i = 0; i < repositories.length; i++) {
    const project = document.createElement("li");
    project.innerText = repositories[i] ["name"];
    projectList.appendChild(project);

}
    })

  .catch(error => {
        console.error("error: repo is empty", error.message);
    });