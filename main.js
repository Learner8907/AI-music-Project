harry_potter = "";
peter_pan = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

scoreLeftWrist = 0;
song_status = "";
song_1_status = "";

function preload() {
    song = loadSound("music.mp3");
    song = loadSound("music2.mp3");

}
function setup() {
    canvas = createCanvas(500, 500);
    canvas.center()
    canvas.position(470, 300)

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function draw() {
    image(video, 0, 0, 500, 500);
    fill("#FF0000")
    stroke("#FF0000")

    song_1_status = harry_potter.isPlaying();

    if (scoreLeftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20);
        harry_potter.stop()

        if (song_1_status == false) {
        harry_potter.play()
        document.getElementById("button_song_name").innerHTML= "Harry potter theme song";
        }
    }

}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);


        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}
