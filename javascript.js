const container = document.querySelector(".container");

function resetBorder(element){
    let border = element.style.border;
    element.style.border = "none";

    setTimeout(()=>{
        element.style.border = border || "3px solid black";
    }, 100);
}

function createSquares(x){
    let checkDivs = document.querySelectorAll(".pixel");
    if(checkDivs.length>0){
        checkDivs.forEach(node => node.remove());
    }

    resetBorder(container); 

    const width = container.offsetWidth;
    const squareSize = (width/x);

    for(let i = 0; i <x; i++){
        for(let j = 0; j<x; j++){
            const div = document.createElement("div");
            div.style.boxSizing = "border-box";
            const borderSize = squareSize*0.001;
            div.style.width = `${squareSize}px`;
            div.style.height = `${squareSize}px`;
            //div.style.border = `${borderSize}px solid black`;
            div.style.margin = "0px";
            div.setAttribute("class", "pixel");
            container.append(div);
        }
    }
}

let pixels;
const input = document.querySelector("#myInput");
const button = document.querySelector("#myButton");
function takeInput(){
    pixels = input.value;
    pixels = parseInt(pixels.replace(/\s+/g, ""));
    if(isNaN(pixels)){
        alert("Enter a Number Please");
    }
    else if(pixels>100){
        alert("Enter a Smaller Number");
    }
    else{
        createSquares(pixels);
    }
}

button.addEventListener("click", takeInput);

let isDrawing = false;

container.addEventListener("mousedown", ()=> {
    isDrawing = true;
});

container.addEventListener("mouseup", ()=>{
    isDrawing = false;
});

container.addEventListener("mousemove", (e) => {
    if(isDrawing){
        draw(e);
    }
} )

function draw(e){
    const pixel = e.target;
    if(pixel.classList.contains("pixel")){
        pixel.style.backgroundColor = "black";
        let currentOpacity = parseFloat(pixel.style.opacity || 0);
        if(currentOpacity<1){
            currentOpacity += 0.1;
        }
        pixel.style.opacity = currentOpacity;
    }
}





