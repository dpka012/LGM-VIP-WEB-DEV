
const inputEl = document.getElementById("input-el")
const listContent = document.getElementById("li-content")

function addTask(){
    if(inputEl.value === ''){
        alert("You must write something.")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputEl.value 
        listContent.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputEl.value = "";
    saveData();
}

listContent.addEventListener("click",function(e){
    if( e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if( e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data" , listContent.innerHTML )
}

function showList(){
    listContent.innerHTML = localStorage.getItem("data")
}
showList();