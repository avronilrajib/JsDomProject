function colorGenerator()
{
    const c1 = Math.floor(Math.random()*255).toString(16);
    const c2 = Math.floor(Math.random()*255).toString(16);
    const c3 = Math.floor(Math.random()*255).toString(16);

    return `#${c1}${c2}${c3}`;
   
}


function main()
{
    const root = document.getElementById("root");
    const output = document.querySelector(".inpSection");
    const copyBtn = document.getElementById("copyBtn");
    const changeBtn= document.getElementById("changeBtn");

    changeBtn.addEventListener("click",function(){
        const color=colorGenerator();
          root.style.background=color;
          output.value=color;

        
    });

    copyBtn.addEventListener("click",function(){
         window.navigator.clipboard.writeText(output.value);        
    });
   
}
main();