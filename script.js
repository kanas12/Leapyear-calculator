 let output = document.getElementById("output")
 function check(){
    var year = parseInt(document.getElementById('year').value);

    if(year%4==0 ){
        if (year % 100 == 0){
            if(year % 400 == 0){
                output.innerHTML = "Leap Year";
            }
        }
    }
    else{
        output.innerHTML = "Not a Leap Year";
    }
 }