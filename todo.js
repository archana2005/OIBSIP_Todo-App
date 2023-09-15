let btn =  document.querySelector("button");
let ol =document.querySelector("ol");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn =document.createElement("button");    
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ol.appendChild(item);
    inp.value= "";
    
});

ol.addEventListener("click", function(){
    if(event.target.nodeName == "BUTTON"){
        let listitem =event.target.parentElement;
        listitem.remove();
 }
});