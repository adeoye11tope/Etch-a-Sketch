const container = document.getElementById("container");
const button = document.querySelector("button");

let rownumdiv;
let columnnumdiv;








function makeDiv(rownumdiv , columnnumdiv ){
  
  for(let r = 0; r < rownumdiv ; r++){
    let  node = document.createElement("div")
    container.appendChild(node).className = "grid-item color-item";
    
    
    for(c = 0; c < columnnumdiv; c++){
      let  node1 = document.createElement("div")
      container.appendChild(node).appendChild(node1).className = "grid-item1 color-item1";
      
    }
    
    
    
     
        
    
  }
  return container;
    
 }
makeDiv(16, 16) 
button.addEventListener('click',function makeDiv(rownumdiv , columnnumdiv ){
  let row;
  let column;
  
  
   
     row = prompt('please enter rows: ');
     if(row > 100){
      alert('pick a number greater than 100');
      return;
      

    }
    rownumdiv = parseInt(row);
  
  
  
    column = prompt('please enter column: ');
    if(column > 100){
      alert('pick a number greater than 100');
      return;
      

    }
  
  columnnumdiv = parseInt(column)

  container.replaceChildren();

  
  for(let r = 0; r < rownumdiv ; r++){
    let  node = document.createElement("div")
    container.appendChild(node).className = "grid-item color-item";
    
    
    for(c = 0; c < columnnumdiv; c++){
      let  node1 = document.createElement("div")
      container.appendChild(node).appendChild(node1).className = "grid-item1 color-item1";
      
    }
    
    
    
     
        
    
  }
  return container;
    
 });