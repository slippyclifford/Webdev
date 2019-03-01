Game();
function Game(){
alert("Dr.Mario's silly clinic");

    var playername = prompt("What's your tag man");
    
   
    while(!confirm("Is that really your tag man???")){
  prompt("Then what is it my dude??????")
    }
alert("Welcome to my silly virus clinic \n" +  playername)
    
   var eaten = false;
    var inventory = {
        yellowpills:0,
        redpills:0,
        bluepills:0,
       
    }
    
    

    Clinic();

    function Jar(){  var race = prompt("Your dismissal of the pill was not taken heartily by the doctor, as indicated by his nasty glare. He raises a hand to your throat and begins to squeeze  \n - break free");
        
        if(race == "break free"){
            if(inventory.redpills >= 1){
              inventory.redpills -= 1;
              alert("You manage to shove your red pill down his throat and begin running through the back door, hoping against hope that it leads to safety.") ;
                 Virus();
             }
            
            else if(inventory.redpills == 0){var death = alert("Try as you might, you can't break free from the doctor's iron grip. His fist gets tighter and tighter, his quaint smile widening into a fiendish grin that seems to consume your fragile mind.  As your vision begins to fade, he leans in your ear and whispers \n It's a me, MARIO. ")}
            Clinic();
}}

    function Clinic(){
        var room = prompt("You enter the clinic, nostrils flaring as you breathe in the shockingly sterile air. There is an aura of unnerving hostility drifting through the room. The Dr. is lounging behind the counter, idly tossing pills into a glass jar. \n - Look \n - approach the doctor");
      
switch(room){
    
    case "virus":
        Virus();
        break;
    case "look":
       var decide = prompt("A glance around reveals a two-legged beast slumbering in the corner, his pleasant demeanor seeming to indicate dreams of cookies and young babes floating perilously in bubbles. On the other side of the waiting area, you notice a delicious red pill resting on the carpet.   \n - touch beast \n - stop look \n - take pill");
        
        switch(decide){
            case "take pill":
            case "take":
                var taken = alert("You slyly swept the pill up from the floor and deposited it in the pocket of your jeans. ")
      inventory.redpills += 1;
           Clinic();
                break;
        }
        
        if(decide == "touch beast" || "touch"){
         var touched = alert("Yoshi was awakened by the intrusion on his dreams and reacted with force. \n He opened his great jurassic jaws and bit down on instinct. You are no more.");
         Clinic();
        }
        
        else if(decide == "stop look" || "stop"){
          var stoplook = alert("you stop looking")
            Clinic();
        
        }
      
        
        else{
            alert(" Dr. Mario hated that.")
           Clinic();
        }
     break;
   
   
   
   
       
       
    case "approach":
      var take = prompt("As the doctor meets your eyes, you freeze. His icy blue pupils contain a seemingly infinite expanse of knowledge frozen over by a cruel indifference to life and death. He lifts his gloved hand to reveal a Bloodred pill between his thumb and pointer finger \n- grab pill \n - refuse");
   if(take == "refuse"){
        alert("The insincts hidden in the deepest pits of terror lurking about the depths of your mind go on high alert when your gaze falls upon the forbidden object in his hand.");
       Jar();
   }
    case "grab":
    case "grab pill":
        alert("You cautiousy pluck the pill from the doc's rubber touch, raising it to your mouth as the sweet, salty taste of sweat trickles down your forhead. ")
       var take = confirm("Are you sure you want to do this?")

    if(take){
        alert("You place the pill on your tounge, knowing full well that your doom is sealed as soon as your lips close.");
        Clinic();
        inventory.redpills = 0;
         inventory.bluepills = 0;
        inventory.bluepills = 0;
    }
       
   else {
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
         
        var takeoff = prompt("Your fight or flight instinct kicks in and you take off at a desperate sprint out of the building, Yoshi hot on your tail.  \n keep running \n go around to alley. "); 
       
        if(takeoff == "keep running" || takeoff == "run"){
           var decide = prompt("Yoshi chases you down the street, and you worry that he will soon catch up. You see a great rusty dumpster on your left and a pile of boxes on your right. \n - climb boxes \n - hide in dumpster");
           
           if(decide == "climb" || decide == "climb boxes"){
               alert("You scramble up the splintered crates with the haste only shown by those whose lives are on the line. \n Unfortunately, it's not fast enough for Yoshi, and he casually snatches you with his jaws as if it were the easiest thing he's ever done..... . GAME OVER");
               Clinic();
           }
            else if(decide == "hide" || decide == "hide in dumpster"){
                alert("The putrid stench of garbage overpowers Yohsi's powerful scence of smell, and you successfully hide until he leaves. You get out and walk down the street. intent on celebrating your survival");
                Street();
            }
         }
     else if(takeoff == "go around"){
            
                 var around = prompt(" As you dash behind a dumpster and into the alley, your panicked gaze lingers on a yellow pill on the street, silver moonlight flashing off its iridescent sheen. \n pick up pill \n face yoshi ");
              
             if(around == "pick up"){
                 inventory.yellowpills += 1;
                 var around = alert("you feel braver now.");
             }
     }
             
              if(around == "face yoshi"){
                 alert("Unfortunately, without a weapon to defend yourself, you make a quick lunch for Yoshi" );
                 Clinic();
             }
          while(inventory.yellowpills >= 1){
              inventory.yellowpills -= 1;
              alert("Using your newfound pill, you successfully choke the beast to death") ;
          }
            var death = prompt("Staring at the fallen corpse of this great emerald beast, a sudden pang of hunger overcomes you \n - eat \n - reject your urges");
                
             if(death == "eat"){
                 var eat = alert("You engore yourself on the flesh of Yoshi, and finding yourself suitably fed, wander off down the street, intent on celebrating your survival");
                 eaten = true;
                 Street();
             }
             
             
        else{
            alert("Dr. Mario hated that");
            Outside;
        }
         }

    function Virus(){
        var fall = prompt("You burst through the back door, expecting to embrace the sunlight, as you fall through the non-existant floor and into a great, dark jar teeming with viruses. \n you land on a tower of multicolored pills in the center of this glass prison, gasping for air as you sink into the plastic sea. \n climb out \n sink further in");
        
       switch(fall){
           case "climb":
               alert("You struggle and thrash and do everything in your power to climb out , but the harder you try, the quicker you sink into the mountain of medical refuse. The last thing you see is a panicked glimpse of red, yellow, and blue....... GAME OVER");
               Clinic();
               break;
          
           case "sink":
               var sink = prompt("You allow the sea of pills to overcome you, slowly drifting to the bottom of the jar. When you hit the glass floor, you realize that your oxygen is running low. In front of you are seven pills lying next to each other: red, red, yellow, blue, red, blue, blue. \n switch ? with ?");
               
               switch(sink){
                   case "switch red with yellow":
                   case "switch red with blue":
                   
                       alert("The combination of pills creates an explosive chemical reaction that bursts through the jar! Golden sunlight shines through a broken section of wall, and you crawl to freedom. As you leave, you notice a particularly juicy pill lying on the pavement. \n Eat it? ");
                     
                     
                       break;
               }
               break;
       
           default:
            alert("Dr.Mario hated that");
               Virus();
               break;
       }
    }
    

    function Street(){
       alert("You walk down the street, simply happy to have escaped that nightmare with your life.");
       alert("you walk");
        alert("You walk");
        alert("you walk");
        var walk = prompt("The road shows no sign of stopping, and you begin to grow concerned. Also, hungry \n - Take a nap \n - continue on");
        
        if(walk == "nap" || "take a nap"){
            if(eaten == true){
                alert("Using the extra energy gained from your snack, you are able to power ");
            }
        }
       
    }
}
