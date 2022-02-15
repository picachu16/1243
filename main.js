function preload(){

}
function setup(){
    canvas=createCanvas(840,580);
    canvas.position(1010,250);
    video=createCapture(VIDEO);
    video.hide();
    clr="";
}
function draw(){

    image(video,90,50,640,480);
    tint(clr);
    fill(63,136,143);
    rect(25,10,50,500);
    rect(765,10,50,500);
    rect(25,30,790,50);
    rect(25,500,790,50);
    fill("green");
    circle(50,50,100);
    circle(790,50,100);
    circle(50,530,100);
    circle(790,530,100);

}
function filter_tint(){
    clr=document.getElementById("colorName").value;
}
function take_snapshot(){
    save("IMG.png");
}