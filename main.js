function speakThis(){
    var speak = new SpeechSynthesisUtterance();
    speak.text = "Welcome To Family Member Recognition Web";
    window.speechSynthesis.speak(speak);
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NT_EXMipV/model.json", modelLoaded);
 }
 
 function modelLoaded(){
    console.log("Model Is Loaded");
 }
 
 function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResults);
 }
 
 function gotResults(error, results){
    if(error){
       console.error(error);
    }else if(results){
       console.log(results);
       document.getElementById("result_object_name").innerHTML = results[0].label;
       document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
 }