var canvas;
var bird;
var pipe;
var pipes = [];
var mic, pitch, freq, audioContext;
var score = 0;
var sound;
let bg; //background image
let b; //bird image
let fg; //foreground image
let font, fontsize = 70;
var playing = false;
var button;

function setup(){ 
    audioContext = getAudioContext();
    bg = loadImage('images/arcade1280x720.jpg');
    fg = loadImage('images/foreground1280x720.jpg');
    b = loadImage('images/flappy-prova.jpg');
    sound = loadSound('sounds/score.mp3');
    canvas = createCanvas(1280,720);
    var x = (windowWidth - width) / 2;
    var y = 100;
    canvas.position(x, y);
    font = loadFont('font/Flappy-Bird.ttf');
    textFont(font);
    textSize(fontsize);
    mic = new p5.AudioIn();
    mic.start(startPitch);
    bird = new Bird();
    pipe = new Pipe();
    pipes.push(new Pipe());
}



function startPitch() {
    pitch = ml5.pitchDetection('./model/', audioContext , mic.stream, modelLoaded);
}

function modelLoaded() {
    getPitch();
}

function getPitch(){
    pitch.getPitch(function(err, frequency){
        if (frequency){
        freq = Math.floor(frequency);
        //console.log(freq);
        bird.up();
        }
    getPitch();
    })
}

function draw(){
    background(bg);
    
    for(var i=0; i<pipes.length; i++){
        pipes[i].show();
        pipes[i].update();
        if(pipes[i].hits(bird)){
            score = 0;
        }
        else if(pipes[i].x==50){
            score++;
            //sound.play();
            console.log(score);
        }
    }

    image(fg, 0, height-fg.height);
    
    bird.show();
    bird.update();
    bird.show();
    
    if(frameCount%150 == 0){
        pipes.push(new Pipe());
    }

    textAlign(CENTER);
    drawWords(width * 0.50);
}

function drawWords(x) {
    fill(0);
    text('SCORE '+score, x, height-fg.height/2+45);
}