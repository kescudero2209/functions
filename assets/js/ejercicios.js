//Part 1
let example = function(a,b,c){
    return a+b+c
}

//Part 2
let suma = (a,b) => a + b;

if (document.getElementById("ele1") !== null) {
    //Parte 3
    document.getElementById("ele1").style.backgroundColor ="green"
    function paint(element, color){
    
        element.style.backgroundColor = color;
    
    }
    
    let color="yellow"
    let ele = document.getElementById("ele1")
    
    ele.addEventListener("click", ()=>{
        paint(ele,color)
    })
    }

    //Part 4

let colorGlobal = "";

document.addEventListener("keydown", (e) => { 
  switch (event.key) {
    case "a":
      colorGlobal = "red";
      console.log(colorGlobal);
      break;
    case "s":
      colorGlobal = "green";
      console.log(colorGlobal);
      break;
    case "d":
      colorGlobal = "blue";
      console.log(colorGlobal);
      break;
  }
});

function changeColor(element, color) {
  element.style.backgroundColor = color;
}

document.querySelectorAll("div").forEach((element) => {
  element.addEventListener("click", (e) => {
    const id = e.target.getAttribute("id");
    console.log(id);
    changeColor(e.target, colorGlobal);
    console.log(colorGlobal);
  });
});

