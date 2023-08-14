
//hexadecimal color generate
function hexaColor()
{
    const hexOne=Math.floor(Math.random()*255).toString(16);
    const hexTwo=Math.floor(Math.random()*255).toString(16);
    const hexThree=Math.floor(Math.random()*255).toString(16);
    return `#${hexOne}${hexTwo}${hexThree}`;
    
}

function main()
{
    const root=document.getElementById('root');
    const input = document.querySelector('.inpSection');
    const btn=document.getElementById("changeBtn");
    btn.addEventListener("click",function(){
          const color=hexaColor();
          root.style.background=color;
          input.value=color;
    });
}
main();