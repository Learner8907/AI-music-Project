harry_potter= "";
peter_pan= "";

function preload(){
    song = loadSound("music.mp3");
    song = loadSound("music2.mp3");

}
function setup(){
    canvas = createCanvas(500 , 500);
    canvas.center()
    canvas.position(470,300)
    
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 500, 500);
}