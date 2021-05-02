noseX = 0;
noseY = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/RZLt46bL/580b57fbd9996e24bc43bed5.png')
}
function gotPoses(results){
    if(results.length > 0);

    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
}

function draw () {
    Image(video, 0 , 0 , 300 , 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 20)
}
