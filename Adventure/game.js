Game();
function Game(){
alert("Dr.Mario's silly clinic");
var playername = prompt("What's your tag man");
alert("Welcome to my silly virus clinic \n" +  playername);
    var inventory = {
        yellowpills:1,
        redpills:1,
        bluepills:1,
    }
    
    
    
    Clinic();
    
    function Clinic(){
        var room = prompt("You enter the clinic, nostrils flaring as you breathe in the shockingly sterile air. There is an air of unnerving hostility drifting through the room. The Dr. is lounging behind the counter, idly tossing pills into a glass jar. \n - Look \n - approach the doctor").toLowerCase();
      
      if(room == "approach"){
          var approach = alert("As the doctor meets your eyes, you freeze. His icy blue pupils contain a seemingly infinite expanse of knowledge frozen over by a cruel indifference to life and death")
           
         
          prompt("The doc lifts his gloved hand to reveal a Bloodred pill between his thumb and pointer finger \n- take pill \n - refuse").toLowerCase();
}
          
        
      }
          Clinic();
      }
        else if(room == "look"){
            var look = prompt("A glance around reveals an two-legged beast slumbering in the corner, his  emerald gaze dreaming of a cookie. \n - touch beast \n - stop look").toLocaleLowerCase();
        }
        
        
    else{
        alert("Dr.Mario hated that")
        Clinic();
    }
    
    }
    function street(){
        var insidehouse = prompt(" enter door#1 enter door#2 ").toLocaleLowerCase(); 
        
        switch(insidehouse){
            case " first door ":
                alert("I <3 luigi ");
                break;
                
            case " second door " :
                alert("You will never the see the sun again") ;
               
                break;
        }
    }
}