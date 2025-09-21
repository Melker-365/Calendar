var divNum = 0;
var content = [];
var storedContent = localStorage.getItem("content");
var storedDivNum = localStorage.getItem("divNum");


const container = document.querySelector('#container');

if(storedDivNum){
    divNum = JSON.parse(storedDivNum);
}

if(storedContent) {
    content = JSON.parse(storedContent);
}

const inputTitle = document.querySelector('#TitleId');
const inputDescription = document.querySelector('#DescriptionId');

for(let i = 0; i < content.length; i++){
    const newDiv = document.createElement("div");
    newDiv.id = "div" + i;
    container.appendChild(newDiv);
    
    const title = document.createElement("h2");
    title.innerHTML = content[i][0];
    newDiv.appendChild(title);
    
    const description = document.createElement("p");
    description.innerHTML = content[i][1];
    newDiv.appendChild(description);
}


document.querySelector("#btnAdd").addEventListener("click", addDiv);
document.addEventListener("keydown", function(event) {

    if(event.key === "Enter"){

        addDiv();

    }

});

document.querySelector("#btnClear").addEventListener("click", function() {

    localStorage.removeItem("content");
    localStorage.removeItem("divNum");

    container.innerHTML ="";

    divNum = 0;
    content = [];

});

function addDiv() {

    divNum++;
    const newDiv = document.createElement("div");
    newDiv.id = "div" + divNum;
    container.appendChild(newDiv);
    
    const title = document.createElement("h2");
    title.innerHTML = inputTitle.value;
    newDiv.appendChild(title);
    
    const description = document.createElement("p");
    description.innerHTML = inputDescription.value;
    newDiv.appendChild(description);

    content.push([inputTitle.value, inputDescription.value]);
    localStorage.setItem("content", JSON.stringify(content));
    localStorage.setItem("divNum", JSON.stringify(divNum));

    inputDescription.innerHTML = "";
    inputTitle.innerHTML = "";

}
