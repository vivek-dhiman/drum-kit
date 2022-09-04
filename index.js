for (i = 0; i < 7; i++)
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);

function handleClick() {
    var buttonInnerhtml=this.innerHTML;
    makeSound(buttonInnerhtml);
    animation1(buttonInnerhtml);
}
document.addEventListener("keydown",function(event){
   makeSound(event.key);
   animation1(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
          var a1 = new Audio("tom-1.mp3");
          a1.play();
          break;
        case "a":
          var a2 = new Audio("tom-2.mp3");
          a2.play();
          break;
        case "s":
          var a3 = new Audio("tom-3.mp3");
          a3.play();
          break;
        case "d":
          var a4 = new Audio("tom-4.mp3");
          a4.play();
          break;
        case "j":
          var a5 = new Audio("snare.mp3");
          a5.play();
          break;
        case "k":
          var a6 = new Audio("crash.mp3");
          a6.play();
          break;
        case "l":
          var a7 = new Audio("kick-bass.mp3");
          a7.play();
          break;
        default:
          var a6 = new Audio("crash.mp3");
          a6.play();
      }
    }
    
    function animation1(key){
      document.querySelector("."+key).classList.add("pressed");
    
      setTimeout(function() {
        document.querySelector("."+key).classList.remove("pressed");
      }, 1000);
    }
