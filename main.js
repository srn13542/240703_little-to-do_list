//리스트의 각 아이템에 삭제 버튼을 추가한다. 
var myNodelist = document.getElementsByTagName("LI");
var i;
for(i = 0; i<myNodelist.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    //유니코드로 x라고 함.
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//삭제 버튼을 클릭하면 현재 리스트 아이템을 숨긴다.
var close = document.getElementsByClassName("close");
var i;
for(i = 0; i<close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display= "none";
    }
}

//리스트 아이템을 클릭했을 때 체크 심볼로 바꾼다(더한다).
var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
}, false);

//더하기 버튼을 누르면 새 아이템이 추가된다.
function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ''){
        alert("You must write something!");
    }else{
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value="";
    var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
}
}

