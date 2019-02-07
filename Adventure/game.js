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
      
switch(room){
     case "look":
         prompt("A glance around reveals an two-legged beast slumbering in the corner, his  emerald gaze dreaming of a cookie. \n - touch beast \n - stop look");
        
    case "touch beast":
         alert("Yoshi was awakened by the intrusion on his dreams and reacted with force. \n He opened his great jurassic jaws and bit down on instinct. You are no more.");
         Clinic();
         break;
    case "stop look":
        alert("You stop looking")
        Clinic();
        break; 
        
        break;
         
     case "touch beast":
         alert("Yoshi was awakened by the intrusion on his dreams and reacted with force. \n He opened his great jurassic jaws and bit down on instinct. You are no more.");
         Clinic();
         break;
       
    case "approach":
        alert("As the doctor meets your eyes, you freeze. His icy blue pupils contain a seemingly infinite expanse of knowledge frozen over by a cruel indifference to life and death. He lifts his gloved hand to reveal a Bloodred pill between his thumb and pointer finger \n- take pill \n - refuse");
        break;
}
        


   
        
 }
    
    }
    
 