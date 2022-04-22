eyex=0;
eyey=0;
function preload() {
  clown_eye=loadImage("https://i.postimg.cc/Wz76YsL7/do.png")
}

function setup() {
    canvas = createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO)  ;
    video.size(400,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses)
}

function gotPoses(results){
    if(results.length   > 0){
        console.log(results);
        eyex=results[0].pose.leftEye.x-60;
        eyey=results[0].pose.leftEye.y-20;

        console.log("eye x = " +results[0].pose.leftEye.x);
        console.log("eye y = " +results[0].pose.leftEye.y);
    }
}
 
function modelLoaded() {
    console.log("Posenet is lod");
}

function draw() {
    image(video,0,0,400,300);
image(clown_eye,eyex,eyey,100,100);

}

function take_snapshot() {
 save('my filterImage.png');
}
