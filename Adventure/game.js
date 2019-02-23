Game();
function Game(){
alert("Dr.Mario's silly clinic");

    var playername = prompt("What's your tag man");
    
   
    while(!confirm("Is that really your tag man???")){
  prompt("Then what is it my dude??????")
    }
alert("Welcome to my silly virus clinic \n" +  playername)
    
    
    var inventory = {
        yellowpills:0,
        redpills:0,
        bluepills:0,
    }
    
    

    Clinic();
    function Jar(){  var race = prompt("Your dismissal of the pill was not taken heartily by the doctor, as indicated by his nasty glare. He raises a hand to your throat and begins to squeeze  \n - break free").toLowerCase();
        
        if(race == "break free"){
            var death = alert("Try as you might, you can't break free from the doctor's iron grip. His fist gets tighter and tighter, his quaint smile widening into a fiendish grin that seems to consume your fragile mind.  As your vision begins to fade, he leans in your ear and whispers \n It's a me, MARIO. ")
            Clinic();
        }
                 while(inventory.redpills >= 1){
              inventory.redpills -= 1;
              alert("You manage to shove your red pill down his throat and escape") ;
                  }
    
             
                  }
                
        
               
               
        
    
   
    
    function Clinic(){
        var room = prompt("You enter the clinic, nostrils flaring as you breathe in the shockingly sterile air. There is an aura of unnerving hostility drifting through the room. The Dr. is lounging behind the counter, idly tossing pills into a glass jar. \n - Look \n - approach the doctor").toLowerCase();
      
switch(room){
    
   
    case "look":
       var decide = prompt("A glance around reveals a two-legged beast slumbering in the corner, his pleasant demeanor seeming to indicate dreams of cookies and young babes floating perilously in bubbles. On the other side of the waiting area, you notice a delicios red pill resting on the carpet.   \n - touch beast \n - stop look \n - take pill");
        
        if(decide == "touch beast"){
         var touched = alert("Yoshi was awakened by the intrusion on his dreams and reacted with force. \n He opened his great jurassic jaws and bit down on instinct. You are no more.");
         Clinic();
        }
        
        else if(decide == "stop look"){
          var stoplook = alert("you stop looking")
            Clinic();
        
        }
       else if(decide == "take pill"){
           var taken = alert("You slyly swept the pill up from the floor and deposited it in the pocket of your jeans. ")
      inventory.redpills += 1;
           Clinic();
           }
        
        else{
            alert(" Dr. Mario hated that.")
           Clinic();
        }
     break;
   
   
   
   
       
       
    case "approach":
      var take =   prompt("As the doctor meets your eyes, you freeze. His icy blue pupils contain a seemingly infinite expanse of knowledge frozen over by a cruel indifference to life and death. He lifts his gloved hand to reveal a Bloodred pill between his thumb and pointer finger \n- take pill \n - refuse");
   if(take == "refuse"){
        alert("The insincts hidden in the deepest pits of terror lurking about the depths of your mind go on high alert when your gaze falls upon the forbidden object in his hand.");
       Jar();
   }
    case "take":
        alert("You cautiousy pluck the pill from the doc's rubber touch, raising it to your mouth as the sweet, salty taste of sweat trickles down your forhead. ")
       var take = prompt("Are you sure you want to do this?")

    if(take == "yes"){
        alert("You place the pill on your tounge, knowing full well that your doom is sealed as soon as your lips close.");
        Clinic();
        inventory.redpills = 0;
         inventory.bluepills = 0;
        inventory.bluepills = 0;
    }
       
   else if(take == "no"){
   var run = prompt("The second your pill hits the floor, you know that your doom is sealed. His eyes light up with a hellish rage as his mouth curls into a snarl so hideous god above would cower in fear. \n RUN");
       
       if(run == "run"){
       Outside();
       }
 }
       
   
       
        
        break;
        
   default:
        alert("Dr Mario Hated that ");
        Clinic();
        break;
        break;

}

    
    }
    function Outside(){
          var takeoff = prompt("Your fight or flight instinct kicks in and you take off at a desperate sprint out of the building, Yoshi hot on your tail.  \n keep running \n go around to alley.  ") 
         
         if(takeoff == "go around"){
             var around = prompt(" As you dash behind a dumpster and into the alley, your panicked gaze lingers on a yellow pill on the street, silver moonlight flashing off its iridescent sheen. \n pick up pill \n face yoshi ")
              
             if(around == "pick up"){
                 inventory.yellowpills += 1;
                 var around = alert("you feel braver now.");
             }
             
             else if(around == "face yoshi"){
                 alert("Unfortunately, without a weapon to defend yourself, you make a quick lunch for Yoshi" )
                 Clinic();
             }
          while(inventory.yellowpills >= 1){
              inventory.yellowpills -= 1;
              alert("Using your newfound pill, you successfully choke the beast to death") ;
          }
            var death = prompt("Staring at the fallen corpse of this great emerald beast, a sudden pang of hunger overcomes you \n - eat \n - reject your urges");
                
             
             }
         }

    
}
    
   
