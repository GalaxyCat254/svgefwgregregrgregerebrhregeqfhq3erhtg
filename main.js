function setup() {
canvas=createCanvas(620, 800);
canvas.position(150,250);
video=createCapture(VIDEO);
video.hide();
}

function draw() {
   
      
    // Use color() function
    let p = color('pink');
    let r = color('red');   
    let t = color('turquoise');
    
    image(video,0,0,640,480);
    // top frame
    fill(p);
    ellipse(30, 30, 40, 40);
    fill(r);
    circle(30, 30, 15);
    fill(p);
    ellipse(70, 30, 40, 40);
    fill(r);
    circle(70, 30, 15);
    fill(p);
    ellipse(110, 30, 40, 40);
    fill(r);
    circle(110, 30, 15);
    fill(p);
    ellipse(150, 30, 40, 40);
    fill(r);
    circle(150, 30, 15);
    fill(p);
    ellipse(190, 30, 40, 40);
    fill(r);
    circle(190, 30, 15);
    fill(p);
    ellipse(230, 30, 40, 40);
    fill(r);
    circle(230, 30, 15);
    fill(p);
    ellipse(270, 30, 40, 40);
    fill(r);
    circle(270, 30, 15);
    fill(p);
    ellipse(310, 30, 40, 40);
    fill(r);
    circle(310, 30, 15);
    fill(p);
    ellipse(350, 30, 40, 40);
    fill(r);
    circle(350, 30, 15);
    fill(p);
    ellipse(390, 30, 40, 40);
    fill(r);
    circle(390, 30, 15);
    fill(p);
    ellipse(430, 30, 40, 40);
    fill(r);
    circle(430, 30, 15);
    fill(p);
    ellipse(470, 30, 40, 40);
    fill(r);
    circle(470, 30, 15);
    fill(p);
    ellipse(510, 30, 40, 40);
    fill(r);
    circle(510, 30, 15);
    fill(p);
    ellipse(550, 30, 40, 40);
    fill(r);
    circle(550, 30, 15);
    fill(p);
    ellipse(590, 30, 40, 40);
    fill(r);
    circle(590, 30, 15);

    //bottom frame
    fill(p);
    ellipse(30, 450, 40, 40);
    fill(r);
    circle(30, 450, 15);
    fill(p);
    ellipse(70, 450, 40, 40);
    fill(r);
    circle(70, 450, 15);
    fill(p);
    ellipse(110, 450, 40, 40);
    fill(r);
    circle(110, 450, 15);
    fill(p);
    ellipse(150, 450, 40, 40);
    fill(r);
    circle(150, 450, 15);
    fill(p);
    ellipse(190, 450, 40, 40);
    fill(r);
    circle(190, 450, 15);
    fill(p);
    ellipse(230, 450, 40, 40);
    fill(r);
    circle(230, 450, 15);
    fill(p);
    ellipse(270, 450, 40, 40);
    fill(r);
    circle(270, 450, 15);
    fill(p);
    ellipse(310, 450, 40, 40);
    fill(r);
    circle(310, 450, 15);
    fill(p);
    ellipse(350, 450, 40, 40);
    fill(r);
    circle(350, 450, 15);
    fill(p);
    ellipse(390, 450, 40, 40);
    fill(r);
    circle(390, 450, 15);
    fill(p);
    ellipse(430, 450, 40, 40);
    fill(r);
    circle(430, 450, 15);
    fill(p);
    ellipse(470, 450, 40, 40);
    fill(r);
    circle(470, 450, 15);
    fill(p);
    ellipse(510, 450, 40, 40);
    fill(r);
    circle(510, 450, 15);
    fill(p);
    ellipse(550, 450, 40, 40);
    fill(r);
    circle(550, 450, 15);
    fill(p);
    ellipse(590, 450, 40, 40);
    fill(r);
    circle(590, 450, 15);

    //left frame
    fill(t);
    rect(20, 70, 15, 15);
    rect(20, 170, 15, 15);
    rect(20, 270, 15, 15);
    rect(20, 370, 15, 15);
//rightframe
    rect(575, 70, 15, 15);
    rect(575, 170, 15, 15);
    rect(575, 270, 15, 15);
    rect(575, 370, 15, 15);
}

function take_snapshot () {
    save('student_name.png');
}