function modify(){
  let label = document.querySelector(".label");
  let c = document.querySelector(".c");
  let f = document.querySelector(".f");
  
  if(c.checked){
    label.innerHTML ="Fahrenheit : ";
  }else if(f.checked){
    label.innerHTML = "celsius: ";
   
  }
  }

function check(){
    event.preventDefault();
    let c = document.querySelector(".c");
    let f = document.querySelector(".f");
    let confirmedVal = document.querySelector(".val").value;
    // console.log(confirmedVal);
 let output =document.getElementById("result");

    if(c.checked){
  //     //  let confirmedVal = document.querySelector(".val").value;
  //  console.log(c.value);
   let res = ((confirmedVal - 32)* (5/9)).toFixed(2);
    output.innerHTML = res + "&deg C";
  //  document.getElementById("result").innerHTML = res+ "&deg C";
   
    } else if(f.checked){
     // label.innerHTML = "Celsius";
      //  let confirmedVal = document.querySelector(".val").value;
        let res = ((confirmedVal * (9/5)) + 32).toFixed(2);
        output.innerHTML = res + "&deg F";
   // document.getElementById("result").innerHTML = res+ "&deg F";

    }

}







