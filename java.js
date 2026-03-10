let projects = [

{
name:"Portfolio Website",
tech:"HTML CSS JS",

},

{
name:"product showcase website",
tech:"React.js CSS",
link:
"https://shyam5557.github.io/Product-website-react/"
},

{
name:"Todo App",
tech:"JavaScript DOM",
link:
"https://shyam5557.github.io/Task-manager-app/"
}

];

let container = document.getElementById("project-container");

projects.forEach(function(project){

let div = document.createElement("div");

div.classList.add("project");

div.innerHTML = `
<h3>${project.name}</h3>
<p>${project.tech}</p>

<a href="${project.link}"
target="_blank">View Project</a>
`;

container.appendChild(div);

});
