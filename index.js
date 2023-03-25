var n=document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++){
    //we can use anonymous function
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // alert("I got clicked");
        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();
        //this.style.color="white"
        var buttoninnerHtml=this.innerHTML;
        buttonAnimation(buttoninnerHtml);
        switch (buttoninnerHtml) {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            default:
                break;
        }
    });
    // we can use separate function as well
    // document.querySelectorAll(".drum")[i].addEventListener("click",respondToClick);
    // function respondToClick(){
    //     alert("I got clicked");
    // }
}

document.addEventListener("keydown",function(event){
    var mykey=event.key;
    buttonAnimation(mykey);
    switch (mykey) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            break;
    }
});

var activeButton = document.querySelector("."+ currentKey);
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");
    // activeButton.classList.remove("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}