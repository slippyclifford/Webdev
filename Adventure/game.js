// C O M M E N T
/* B I G 
C O M M E N T
*/



//alert("Give me my beyblades");
//confirm ("Do you wanna die my friend?");
//prompt("I'm serious about my blades dude");
Game();

function Game(){
alert("Dr.Mario's silly clinic");
var playername = prompt("What's your tag man");
alert("Welcome to my silly virus clinic!" + playername);
    
    Clinic();
    
    function Clinic(){
        var clinic = prompt("You enter the clinic, nostrils flaring as you breathe in the shockingly sterile air. There is an air of unnerving hostility drifting through the room. The Dr. is lounging behind the counter, idly tossing pills into a glass jar. \n - Look around ").tolowercase();
      
        if(clinic == "look around" || "look"){
           var glance = prompt("A quick glance around the room reveals little. A smooth, two-legged beast slumbers in the corner, dreaming of fruit. n\- touch beast n\- stop looking");
        }
            else if(clinic == "stop looking" || "stop"){
                Clinic();
            }
            else if(clinic = "touch beast || touch"){
                
            }
        }
        else if{
            alert("Dr.Mario hated that");
            Clinic();
        }
    } 
