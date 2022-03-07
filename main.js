noseX=0;
noseY=0;

rightX=0;
leftX=0;
difference=0;

function setup(){
    canvas=createCanvas(530,480);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(280,300);
    video.position(5,169);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model has been loaded");
}

function gotPoses(results,error){
    if(results.length>0){
        console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("NoseX= "+noseX+"Nose Y= "+noseY);

rightX=results[0].pose.rightWrist.x;
leftX=results[0].pose.leftWrist.x;
difference=floor(leftX-rightX);
width=difference+100;
    }
    else{
        console.error(error);
    }
}

function draw(){
    background("#FF6347");
    fill("#4807e2");
    rect(noseX,noseY,width,difference);
    document.getElementById("dimensions").innerHTML="The width of the rectangle is "+width+" and the height is "+difference;
}
