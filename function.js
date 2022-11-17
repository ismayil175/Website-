function person() {
    alert("This website was developed by Ismayil Maharramov");
}

function calculator()
    {
        var num1 = window.prompt("Enter a Number");
        var num2 = window.prompt("Enter second number");

        num1 = parseInt(num1);
        num2 = parseInt(num2);
        num3 = num1+num2;
        alert("The result is: " + num3);
    }

    


	//Validtion Code For Inputs

    function auth(){
        var name = document.getElementById("name").value;
        var sname = document.getElementById("password").value;
        if(name=="max" && sname=="max"){
          
          window.location.href = 'features.html' ;
          alert("Success!!");
          
        }
        else{
          alert("Wrong Name or Surname");
          
        }
      }

      
