
var usernameGlobal;
var minRange;
var maxRange;
var randomTrueNumber;
var randomChoiceNumber;
var btn_username=document.getElementsByClassName("btn_username_input");
var isWinner;
var level_number;
var number_chances;

//btn_username.onclick=function()
function usernameInput()
{
    var username=document.getElementById("username_id");
    var btn_submit = document.getElementById("btn_username_input");
    usernameGlobal=username.value;
    localStorage.setItem('username-value',usernameGlobal);
            
   


    
   // console.log(username.value);
  // alert(usernameGlobal);
  window.location.href = "choice_number.html";
}
function choiceRange()
{
   /* usernameGlobal = localStorage.getItem('username-value');
    var txt_msg = "Welcome, "+usernameGlobal+"!";
    document.getElementsByClassName("para_inputs_number")[0].innerHTML = "txt_msg";*/
    var range_min_element = document.getElementById("range_min");
    var range_max_element = document.getElementById("range_max");
    minRange = range_min_element.value;
    maxRange = range_max_element.value;
    if (minRange>= maxRange)
    {
        alert("The minimum value has to be less than the maximum value! ");
    }
    else
    {
        localStorage.setItem('min-range',minRange);
        localStorage.setItem('max-range',maxRange);
        window.location.href = "level_game.html";
    

}
}

function retry()
{
  //  window.location.href = "choice_number.html";
    window.history.back();
    localStorage.removeItem('min-range');
    localStorage.removeItem('max-range');
    localStorage.removeItem('level-number');
    localStorage.removeItem('winner-state');
}
function goBack()
{
    //  window.location.href = "choice_number.html";
      window.history.back();
    
  }
  
function comparison_random()
{
    isWinner = (localStorage.getItem('winner-state') == "true");
    level_number = parseInt(localStorage.getItem('level-number'));
    
    
  var number_chosen = document.getElementById("number_chosen").value;
  minRange = parseInt(localStorage.getItem('min-range'));
  maxRange = parseInt(localStorage.getItem('max-range'));
  number_chances = parseInt(localStorage.getItem('number-chances'));
  
  randomTrueNumber =  Math.floor(Math.random() * (maxRange - minRange + 1) ) + minRange;
   
        if(isWinner)
        {
            if(number_chosen == randomTrueNumber)
            {
                if(number_chances > 1)
                {
                localStorage.setItem('min-range',minRange);
                maxRange+=1;
                localStorage.setItem('max-range',maxRange);
                level_number+=1;
                localStorage.setItem('level-number',level_number);
                localStorage.setItem('winner-state',isWinner);
                number_chances=parseInt(localStorage.getItem('number-chances'));
                var text_level = "Stage "+level_number+": Range between " + minRange + " and " + maxRange;
                var text_confirm = "Well done! Now play the stage " + level_number + 
                ". You still have " + number_chances + " chances";
                document.getElementsByClassName('level_number')[0].innerHTML = text_level;
                document.getElementsByClassName('msg_confirm')[0].innerHTML = text_confirm;
                }
                else if(number_chances == 1)
                {
                    localStorage.setItem('min-range',minRange);
                    maxRange+=1;
                    localStorage.setItem('max-range',maxRange);
                    level_number+=1;
                    localStorage.setItem('level-number',level_number);
                    localStorage.setItem('winner-state',isWinner);
                    number_chances=parseInt(localStorage.getItem('number-chances'));
                    var text_level = "Stage "+level_number+": Range between " + minRange         
                var text_confirm = "Well done! Now play the stage " + level_number + 
                ". You still have " + number_chances + " chance";
                document.getElementsByClassName('level_number')[0].innerHTML = text_level;
                document.getElementsByClassName('msg_confirm')[0].innerHTML = text_confirm;
                }
            
            }
            else
            {
             if(number_chances > 2)
            {
                number_chances-=1;
                localStorage.setItem('number-chances',number_chances);
                var text_confirm = "Unfortunately, the good number is " + randomTrueNumber +
                ".\n You still have "+number_chances+" chances";
                document.getElementsByClassName('msg_confirm')[0].innerHTML = text_confirm;
                /*isWinner = false;
                localStorage.setItem('winner-state',isWinner);*/
            }
            else if (number_chances == 2)
            {
                number_chances-=1;
                localStorage.setItem('number-chances',number_chances);
                var text_confirm = "Unfortunately, the good number is " + randomTrueNumber +
                ".\n You still have "+number_chances+" chance";
                document.getElementsByClassName('msg_confirm')[0].innerHTML = text_confirm;
                /*isWinner = false;
                localStorage.setItem('winner-state',isWinner);*/
            }
            else if( number_chances == 1)
            {
                number_chances-=1;
                localStorage.setItem('number-chances',number_chances);
                var text_confirm = "Unfortunately, the good number is " + randomTrueNumber +
                ".\n Game over! Press Retry to play again!";
                document.getElementsByClassName('msg_confirm')[0].innerHTML = text_confirm;
                /*isWinner = false;
                localStorage.setItem('winner-state',isWinner);*/
            }

            }
             
        }
           
        else
        {
           
        }
    }