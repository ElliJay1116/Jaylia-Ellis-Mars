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