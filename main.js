noseX =0;
noseY =0;
RightWristX = 0;
LeftWristX = 0;
difference = 0;

function preload()
{
   
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500)
    
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Pose Net Is Initialized!!');
}

function draw()
{
    clear();
   fill("navy");
   stroke("yellow");

   square(noseX, noseY, difference);
   
}

function gotPoses(results)
{
   if(results.length > 0)
   {
       console.log(results);
       noseX = results[0].pose.nose.x;
       noseY = results[0].pose.nose.y;

       LeftWristX = results[0].pose.leftWrist.x;
       RightWristX = results[0].pose.rightWrist.x;
       difference = floor(LeftWristX - RightWristX);

    
   }
}


