function speakThis(){
    var speak = new SpeechSynthesisUtterance();
    speak.text = "Welcome To Family Member Recognition Web";
    window.speechSynthesis.speak(speak);
}