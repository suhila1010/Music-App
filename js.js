window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        
         "lightsalmon",
         "lightskyblue",
         "yellowgreen",
         "#60d394",
         "d36060",
         "#c060d3"
        
    ]
    pads.forEach((pad, index) => {
     pad.addEventListener("click" , function() {
         sounds[index].currentTime = 0;
         sounds[index].play();
         creatBubble(index);

     });

    });

    const creatBubble = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend" , function(){
            visual.removeChild(this);
        })


    };


});