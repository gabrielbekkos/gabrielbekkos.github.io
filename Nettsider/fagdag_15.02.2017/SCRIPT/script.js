var particle = {
    x: 20,
    y: 0,
    size: 10,
    farge: "yellow",
    xSpeed: 1,
    ySpeed: 2,
    gravitasjon: 0.1,
    hastighet: 2
};




window.onload = function() {
    boks = document.getElementById("boks");
    bokstx = boks.getContext("2d");
    draw();
};

function draw() {
    bokstx.clearRect(0, 0, 500, 500);
    bokstx.fillStyle = particle.farge;
    bokstx.fillRect(particle.x, particle.y, particle.size, particle.size);
    
    particle.hastighet = particle.gravitasjon + particle.hastighet;
    particle.y += particle.hastighet;
    
console.log(particle.hastighet)
    
//    particle.y = particle.y + particle.ySpeed;
//    particle.x = particle.x + particle.xSpeed;
    
};

var drawInterval = setInterval(function() { draw(); }, 30);



