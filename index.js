let btn = document.getElementById("btn");
let clearBtn = document.getElementById("clearBtn");
let result = document.getElementById("calculateValue");

btn.addEventListener("click", () => {
  let percentage = document.getElementById("percentage").value;
  let ofNumber = document.getElementById("ofNumber").value;
  if (isNaN(percentage) || isNaN(ofNumber)) {
    alert("Please enter valid numbers for percentage and ofNumber");
    return;
  }

  let totalValue = (percentage * ofNumber) / 100;
  result.innerText = totalValue;
  
  document.getElementById("percentage").value='';
  document.getElementById("ofNumber").value='';
  
});
clearBtn.addEventListener("click", () => {
  result.innerText = "";
});
