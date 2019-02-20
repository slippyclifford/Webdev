Game();
function Game(){
alert("Dr.Mario's silly clinic");
var playername = prompt("What's your tag man");
alert("Welcome to my silly virus clinic \n" +  playername);
    var inventory = {
        yellowpills:0,
        redpills:0,
        bluepills:0,
    }
    
    
  
    Clinic();
    
   
    
    function Clinic(){
        var room = prompt("You enter the clinic, nostrils flaring as you breathe in the shockingly sterile air. There is an aura of unnerving hostility drifting through the room. The Dr. is lounging behind the counter, idly tossing pills into a glass jar. \n - Look \n - approach the doctor").toLowerCase();
      
switch(room){
    
   
    case "look":
       var decide = prompt("A glance around reveals an two-legged beast slumbering in the corner, his  emerald gaze dreaming of a cookie. \n - touch beast \n - stop look");
        
        if(decide == "touch beast"){
         var touched = alert("Yoshi was awakened by the intrusion on his dreams and reacted with force. \n He opened his great jurassic jaws and bit down on instinct. You are no more.");
         Clinic();
        }
        
        else if(decide == "stop look"){
          var stoplook = alert("you stop looking")
            Clinic();
        
        }
        else{
            alert(" Dr. Mario hated that.")
        }
     break;
   
   
   
   
       
       
    case "approach":
        prompt("As the doctor meets your eyes, you freeze. His icy blue pupils contain a seemingly infinite expanse of knowledge frozen over by a cruel indifference to life and death. He lifts his gloved hand to reveal a Bloodred pill between his thumb and pointer finger \n- take pill \n - refuse");
    case "take pill":
        alert("You cautiousy pluck the pill from the doc's rubber touch, raising it to your mouth as the sweet, salty taste of sweat trickles down your forhead. ")
       var take = prompt("Are you sure you want to do this?")

    if(take == "yes"){
        alert("You place the pill on your tounge, knowing full well that your doom is sealed as soon as your lips close.");
        Clinic();
    }
       
   else if(take == "no"){
   var run = prompt("The second your pill hits the floor, you know that your doom is sealed. His eyes light up with a hellish rage as his mouth curls into a snarl so hideous god above would cower in fear. \n RUN");
       
       if(run == "run"){
       Outside();
       }
 }
       
   
       
        
        break;
        break;
    default:
        alert("Dr Mario Hated that ");
        Clinic();
        break;
 }
    
    }
    function Outside(){
          var takeoff = prompt("Your fight or flight instinct kicks in and you take off at a desperate sprint out of the building, Yoshi hot on your tail.  \n keep running \n go around to alley.  ") 
         
         if(takeoff == "go around"){
             var around = prompt(" As you dash behind a dumpster and into the alley, your panicked gaze lingers on a yellow pill on the street, silver moonlight flashing off its iridescent sheen. \n pick up pill \n face yoshi ")
              
             if(around = "pick up"){
                 inventory.yellowpills += 1;
                 var around = prompt("you feel braver now \n face yoshi");
             }
             
            else if(around = "face yoshi"){
                 if(inventory.yellowpills == 0){
                     alert("Unfortunately, without a weapon to defend yourself, you quickly become yoshi's lunch")
                     
                 }
                else if(inventory.yellowpills == 1){
                    alert("You throw the pill and kill that jerk")
                }
             }
         }
    }
   }
 