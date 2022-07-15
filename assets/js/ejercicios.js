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