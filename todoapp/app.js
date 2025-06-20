 let inp = document.querySelector('input');
 let btn = document.querySelector('button');
 let ul = document.querySelector('ul');
// adding input code
btn.addEventListener("click", function(){
 let item = document.createElement('li');
//  console.log(inp.value)
item.innerText = inp.value;
let delbtn = document.createElement("button");
delbtn.innerText= "delete";
delbtn.classList.add("delete");
item.appendChild(delbtn);

 ul.appendChild(item);
 inp.value = "";
})
// delete button code
ul.addEventListener("click", function(event){
   console.log(event.target)
   if(event.target.nodeName =="BUTTON"){
       let listItem = event.target.parentElement;
    listItem.remove();
       console.log("delete")
   }else{
    console.log("do not delete")
   }
        
    })

