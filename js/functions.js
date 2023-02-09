
function generateBorderRadious() {
     let inputAnswer = document.querySelector(".textCode");
     let input1 = document.querySelector("#input1");
     let input2 = document.querySelector("#input2");
     let input3 = document.querySelector("#input3");
     let input4 = document.querySelector("#input4");

     if(input1.value == "" || isNaN(input1.value)){
          input1.value = 0;
     }
     if(input2.value == "" || isNaN(input2.value)){
          input2.value = 0;
     }
     if(input3.value == "" || isNaN(input3.value)){
          input3.value = 0;
     }
     if(input4.value == "" || isNaN(input4.value)){
          input4.value = 0;
     }

     let string = input1.value + "% " + input3.value + "% " + input4.value + "% " + input2.value + "%";
     var previewer = document.getElementById("previewer");
     previewer.style.borderRadius = string;
     previewer.innerHTML = "";
     inputAnswer.value = "border-radius: " + string + ";";
}

function copyText(){
     let text = document.querySelector(".textCode");
     text.select();
     text.setSelectionRange(0, 99999); // for mobile service

     navigator.clipboard.writeText(text.value);
}

addEventListener("input", generateBorderRadious, false);

let detectCopy = document.querySelector(".copyCode");
detectCopy.addEventListener("click", copyText);