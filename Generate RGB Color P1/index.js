
 window.onload = ()=>{
    main();
 }

 function main(){
    const mybtn=document.getElementById("changeBtn");
    const container=document.getElementById("root");
    mybtn.addEventListener("click",function(){
    
        const bgColor=generatRGBColor();
        container.style.background=bgColor;
    });
    
 }

function generatRGBColor(){
    const red= Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
     return `rgb(${red},${green},${blue})`;
}





