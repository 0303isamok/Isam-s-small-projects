let player = document.getElementById("player");
let block = document.getElementById("block");

function jump(){
    if(player.classList != "animate"){
        player.classList.add("animate");
    }
    setTimeout(function(){
        player.classList.remove("animate");
    }, 500);
}


function startBlockAnimation() {
    let randomTime = Math.random() * 2000 + 1000; // Random time between 1000ms (1s) and 3000ms (3s)
    
    block.style.display = "none"; // Hide the block before it respawns
    block.style.animation = "none"; // Reset animation

    setTimeout(() => {
        block.style.display = "block";
        block.style.animation = "block 1s linear infinite"; // Restart animation after delay
    }, randomTime);
}

let checkDead = setInterval(function(){
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft <20 && blockLeft > 0 && playerTop >= 130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("u lose");
        startBlockAnimation();
    }

},10);

startBlockAnimation();