

const submit = document.querySelector("#submit");
const inputForm = document.querySelector("input");
const middleRight = document.querySelector(".middleRight");
inputForm.value ="16";
const middle = document.querySelector(".middle");


submit.addEventListener("click",function(){
    doc.removeChild(middleRight);
    let val = inputForm.value;
    val = parseInt(val);
    let hightBox = 500/val;
    let temp = document.createElement("div");
    temp.classList.add("middleRight");
    for(let i =1;i <= val*val;i++){
        
        let div = document.createElement("div");
        div.style.cssText = `width:${hightBox}px;height:${hightBox}px;border:1px solid black;
                            box-sizing:border-box;`;
        temp.appendChild(div);

    }

    middle.appendChild(temp);

});