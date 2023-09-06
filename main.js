rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;

fb="";
eikal="";

function preload(){

fb=loadSound("fb.mp3");
eikal=loadSound("eikal.mp3");

}

function setup(){

video = createCapture(VIDEO);
video.hide();

canvas = createCanvas(670, 500);
canvas.center();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log("model loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log("results");
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
    }
}

function draw(){

image(video, 0, 0, 670, 500);

}