

const submit = document.querySelector("#submit");
const inputForm = document.querySelector("input");
let middleRight = document.createElement("div");
middleRight.classList.add("middleRight");
inputForm.value ="16";
const middle = document.querySelector(".middle");
middle.appendChild(middleRight);
middleRight = document.querySelector(".middleRight");



submit.addEventListener("click",function(){
    middle.removeChild(middleRight);
    let val = inputForm.value;
    if(val > 130){
        val =16;
        alert("Sorry but the grid side is limited to 130 boxes per row\nSo default 16 has been seted now");
    }
    val = parseInt(val);
    let hightBox = 500/val;
    // let temp = document.createElement("div");
    // temp.classList.add("middleRight");
    middleRight = document.createElement("div");
    middleRight.classList.add("middleRight");
    for(let i =1;i <= val*val;i++){
        
        let div = document.createElement("div");
        div.style.cssText = `width:${hightBox}px;height:${hightBox}px;border:1px solid white;
                            box-sizing:border-box;`;
        
        div.addEventListener("mousemove",function(){
            let colorBox = document.querySelector("#cInput input");

            div.style.backgroundColor = colorBox.value;
        });
        div.classList.add("divHover");
        middleRight.appendChild(div);


    }

    middle.appendChild(middleRight);
    

});



let eve =new Event("click");
submit.dispatchEvent(eve);

