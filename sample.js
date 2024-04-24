

var inputEl = document.getElementById("inputEl");
var ansEl = document.getElementById("outputEl");

function answer(){
    ansEl.textContent=inputEl.value;
}

var helloBtnEl = document.getElementById("AddhelloBtn");

function hello(){
    let helloEl = document.createElement("h1");
    helloEl.textContent = "Hello";
    document.body.appendChild(helloEl);
}
var changecolorBtnEl = document.getElementById("changeColorBtn");
function changecolorBg(){

    changecolorBtnEl.style.backgroundColor="Red";

}

var anschangeNameEl = document.getElementById("answerchangenameEl");


function changenamejohn(){

    anschangeNameEl.textContent = document.getElementById("johnBtn").textContent;
}
function changenamehari(){

    anschangeNameEl.textContent = document.getElementById("hariBtn").textContent;
}
function changenamepravin(){

    anschangeNameEl.textContent = document.getElementById("pravinBtn").textContent;
}