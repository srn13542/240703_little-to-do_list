 
//리스트의 각 아이템에 삭제 버튼을 추가한다.겸사겸사 편집 버튼도 추가했다.
var insertBtn = function(someElement){
    var editSpan = document.createElement("SPAN");
    var editTxt = document.createTextNode("edit");
    editSpan.className = "edit";
    editSpan.appendChild(editTxt);
    someElement.appendChild(editSpan);

    var closeSpan = document.createElement("SPAN");
    var closeTxt = document.createTextNode("\u00D7");
    closeSpan.className = "close"
    closeSpan.appendChild(closeTxt);
    someElement.appendChild(closeSpan);
}

//삭제 기능 함수화. x 버튼을 누르면 작동한다.
var closeFunc = function(closeItem){
        closeItem.onclick = function(){
            var div = this.parentElement;
            div.style.display= "none";
        }
}

//편집 버튼 함수화. 편집 버튼을 누를 시 작동한다.
var editFunc = function(editItem){
    editItem.onclick = function(){
        var div = this.parentElement;
        var newTxt = prompt("todo 리스트 항목을 어떻게 수정할까요?");
        if(newTxt ===""){
            alert("다시 입력하십시오.");
        }else{
            div.textContent = newTxt;
            insertBtn(div);
            liveBtn();
        }
    }
}

//버튼에 기능 심는 작업
var liveBtn = function(){
    for (let closeItem of close) {
        closeFunc(closeItem);
    }
      for(let editItem of edit){
        editFunc(editItem);
      }
}


//-----------------------------------------------



var myNodelist = document.getElementsByTagName("LI");
for(let myNodeListItem of myNodelist){
    insertBtn(myNodeListItem);
}

//삭제 버튼을 클릭하면 현재 리스트 아이템을 숨긴다.
var close = document.getElementsByClassName("close");
for(let closeItem of close){
    closeFunc(closeItem);
}

//edit 버튼을 클릭하면 그에 맞는 작업을 한다.
var edit = document.getElementsByClassName("edit");
for (let editItem of edit){
    editFunc(editItem);
}

//리스트 아이템을 클릭했을 때 체크 심볼로 바꾼다(더한다).
var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
});


//-----------------------------------------------



//ADD 버튼을 누르면 새 아이템이 추가된다.
function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    li.appendChild(document.createTextNode(inputValue));
    if(inputValue === ''){
        alert("You must write something!");
    }else{
        document.getElementById("myUL").appendChild(li);
        insertBtn(li);
        liveBtn();
    }
    document.getElementById("myInput").value=""; 
}


//-----------------------------------------------


//사용자 경험을 위해 엔터 키를 눌러도 ADD 버튼을 누른 것과 동일한 효과를 가지도록 수정함.
document.addEventListener("keyup",function(event){
    if(event.keyCode ===13){
        newElement();
    }
})