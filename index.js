
for (let i=0;i<=6;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonHTML=this.innerHTML;
        makesound(buttonHTML);
        makeAnimation(buttonHTML);

    })
}


    // for (let i=0;i<=6;i++){
    //     document.querySelectorAll(".drum")[i].onclick=function(){
    //         var one=new Audio("sounds/music"+i+".mp3");
    //         one.play();
    
    //     }
    // }

document.addEventListener("keypress",function(event){
    makesound(event.key);
    makeAnimation(event.key);
})

function makesound(key){
    switch(key){
        case "w":
            var one=new Audio("sounds/music0.mp3");
            one.play();
            break;
        case "a":
            var two=new Audio("sounds/music1.mp3");
            two.play();
            break;
        case "s":
            var three=new Audio("sounds/music2.mp3");
            three.play();
            break;
        case "d":
            var four=new Audio("sounds/music3.mp3");
            four.play();
            break;
        case "j":
            var five =new Audio("sounds/music4.mp3");
            five.play();
            break;
        case "k":
            var six=new Audio("sounds/music5.mp3");
            six.play();
            break;
        case "l":
            var seven=new Audio("sounds/music6.mp3");
            seven.play();
            break;
    }
}
function makeAnimation(currentKey){
    var one=document.querySelector("."+currentKey);
    one.classList.add("pressed");
    setTimeout(function(){
    one.classList.remove("pressed");
} ,100);
}
