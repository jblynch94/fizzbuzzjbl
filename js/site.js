function getNumbers(){
    let start = document.getElementById("startValue").value;
    let end = document.getElementById("endValue").value;
    let control = document.getElementById("control").value;
    if(control==""){
        control=100;
    }
    start = parseInt(start);
    end = parseInt(end);
    control = parseInt(control);
   

    if(!Number.isInteger(start) || !Number.isInteger(end)) {
        Swal.fire({
            backdrop: false,
            title: "oops!",
            text: "You can only enter numbers."
           });
    }else if(control>100 || control<0){
        Swal.fire({
            backdrop: false,
            title: "oops!",
            text: "the number contol must be a positve number under 100"
           });
    }else{
       let numbers = generateNumbers(control);
       displayValues(start,end,numbers);
    }
}
// generates numbers
// buessness logic
function generateNumbers(control){
    let numbers = [];
    for(let i=1; i<=control; i++){
        numbers.push(i);
    }
    return numbers;
}

// displays a list of numbers
// bold the even numbers
function displayValues(start,end,value){
    results = document.getElementById("results");
    results.innerHTML="";

    for(let i=0; i < value.length; i++){
        let currentNumber = value[i];
        let divTag = document.createElement("div");
        divTag.classList.add("col");
           
        if(currentNumber%start==0 && currentNumber%end==0){
            divTag.classList.add("fizzBuzz");
            divTag.innerHTML = "FizzBuzz";
            results.appendChild(divTag);
        }else if(currentNumber%start==0){
            divTag.classList.add("fizz");
            divTag.innerHTML = "Fizz";
            results.appendChild(divTag);
        }else if(currentNumber%end==0){
            divTag.classList.add("buzz");
            divTag.innerHTML = "Buzz";
            results.appendChild(divTag);
        }else{
            results.appendChild(divTag);
            divTag.classList.add("numbers");
            divTag.innerHTML = currentNumber;
            
        }
    }
}
