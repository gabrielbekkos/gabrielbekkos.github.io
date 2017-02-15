var particle = {
    x: 20,
    y: 20,
    size: 150,
    farge: "blue",
    xSpeed: 2,
    ySpeed: 2
};




window.onload = function() {
    boks = document.getElementById("boks");
    bokstx = boks.getContext("2d");
    draw();
};

function draw() {
    bokstx.clearRect(0, 0, 1000, 1000);
    bokstx.fillStyle = particle.farge;
    bokstx.fillRect(particle.x, particle.y, particle.size, particle.size);
    
    particle.y = particle.y + particle.ySpeed;
    
};

var drawInterval = setInterval(function() { draw(); }, 30);



