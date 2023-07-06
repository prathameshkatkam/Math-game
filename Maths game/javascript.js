var playing=false;
var score;
var timeremaining;
var res;
//if we click on start/reset
document.getElementById("startreset").onclick=function()
{
    //if we are playing 
    if(playing==true)
    location.reload();//to reload the page
    else{ //if we are not playing
        //change mode to playing
        playing=true;
        score=0; //set score to zero
        document.getElementById("scorevalue").innerHTML=score;

        //show countdown box

        document.getElementById("timeremaining").style.display="block";

        timeremaining=60;

        document.getElementById("time").innerHTML=timeremaining;
        
        //hide gameover box
        hide("gameover");

        //change button to reset
        document.getElementById("startreset").innerHTML="Reset Game";

        //start countdown
        startcountdown();

        //generate questions
        generateqa();
    }
}
//clicking on answer box
for(i=1;i<5;i++)
{
    document.getElementById("box"+i).onclick=function()
{
    if(playing==true)
    {
        if(this.innerHTML==res){
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            //hide wrong box and show corrct box
            hide("Wrong");
            show("correct");
            setTimeout(function(){
                hide("correct")
            },1000);

            //generate qn
            generateqa();
        }
        else{
            hide("correct");
            show("Wrong");
            setTimeout(function(){
                hide("Wrong")
            },1000);

        }
    }
}
}

  //if we are playing 
    //reload page
  //if we are not playing
    //set score to zero
    //show countdown box
    //reduce time by 1 sec in loops
      //time left?
        //yes->continue
        //no->gameover
    //change button to reset
    //generate new qn

//if we click on answer box
  //if we are playing
    //correct?
       //yes
         //increase score
         //show correct box for 1 sec
         //generate new qn
        //no
          //show try again box for 1 sec
//functions

 function startcountdown()
 {
    action=setInterval(function(){
        timeremaining-=1;
        document.getElementById("time").innerHTML=timeremaining;
        if(timeremaining==0)//gameover
        {
           stopcountdown();
           document.getElementById("gameover").style.display="block";
           document.getElementById("gameover").innerHTML="<p>game over!</p> <p>Your score is "+score +"</p>"
           hide("timeremaining");
           hide("wrong");
           hide("correct");
           playing=false;
           document.getElementById("startreset").innerHTML="Start Game";
        }
    },1000);
 }

 function stopcountdown()
 {
    clearInterval(action);
 }

 function hide(id)
 {
    document.getElementById(id).style.display="none";
 }

 function show(id)
 {
    document.getElementById(id).style.display="block";
 }

function generateqa()
{
    var x=1+Math.round(9*Math.random())
    var y=1+Math.round(9*Math.random())
    res=x*y;
    document.getElementById("question").innerHTML=x +"x"+y;
    var correctpos=1+Math.round(3*Math.random())
    document.getElementById("box"+correctpos).innerHTML=res;//fill one box with crct answer
    
    //fill other boxes with wrong answer
    var answers=[res];
    for(i=1;i<5;i++){
        if(i!=correctpos){
            var wrongans;
            do{
            wrongans=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()))
            }while(wrongans==res);
            document.getElementById("box"+i).innerHTML=wrongans;
            answers.push(wrongans);
        }

    }
   
}
