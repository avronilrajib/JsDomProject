
function colorGenerator(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `rgb(${red},${green},${blue})`;
}

function main(){
    const myBtn= document.getElementById("changeBtn");
    const container=document.getElementById("root");
     
     myBtn.addEventListener("click",function(){

        const rgb=colorGenerator();
        container.style.background=rgb;
     });

}

main();
