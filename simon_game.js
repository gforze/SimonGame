var sequence=[];
var num=[];
var ans=0;
var strict=new Boolean(true);

window.onload = function(){
  $("button").click(function(){
     key = this.id;
     if(key="start"){
       game();
     }
     checkSeq(["g", "y", "r"], ["g", "y", "r"]);
     console.log(nextColor());
  });
}

function game(){
  if(sequence.length<=0){
    playButtons(nextColor());
  }
}

function flashColor(color){
  setInterval(function(){

  })
}
function playButtons(color){
  sequence.push(color);

  for(x in sequence){
    if(sequence == "g"){

    }
    else if (sequence == "y") {

    }
    else if (sequence == "r") {

    }
    else if (sequence == "b") {

    }
    else{
      console.log("something wrong with sequence");
    }
  }
}
function checkSeq(seq, tocheck){
  if(seq.length == tocheck.length){
    for(x in seq){
      if(tocheck[x]!=seq[x]){
        //console.log("not equal");
        return false;
      }
    }
    //console.log("equal");
    return true;
  }
  else{
    //console.log("len");
    return false;
  }

}

function nextColor(){
  var color="";
  switch(Math.floor(Math.random() * Math.floor(4))){
    case 0:
      color ="g";
      break;
    case 1:
      color ="r";
      break;
    case 2:
      color ="y";
      break;
    case 3:
      color ="b";
      break;
  }
  return color;
}
