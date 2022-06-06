difference =0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    
    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
    
    }
    
    function modeLoaded(){
        console.log('Posenet is intialized!');
    }
    
    function draw(){
        background('green');

        document.getElementById("font_size").innerHTML = "Font size of the text will be = "+ difference+"px";
       textSize(difference);
        fill('#F90093');
        text('Star', 50, 400);
     
    }
    
    function gotPoses(results){
        if(results.length > 0)
        {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("noseX ="+ noseX + "noseY = " + noseY);

            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);

            console.log("leftWristX ="+ leftWristX + "rightWristX = " + rightWristX);

        }
    }