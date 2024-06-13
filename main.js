Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90

})
camera = document.getElementById("camera")
Webcam.attach("#camera")

function capture() {
    Webcam.snap(function (image) {
        document.getElementById("result").innerHTML = "<img id='pic' src='" + image + "'>"
    })
}

console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_j7I5cnaY/model.json", modelloaded)
function modelloaded() {
    console.log("model is loaded");
}
p1 = ""
p2 = ""
function speak() {
    synth = window.speechSynthesis
    data = "The first prediction is " + p1
    data1 = " and the second prediction is " + p2
    utterthis = new SpeechSynthesisUtterance(data + data1)
    synth.speak(utterthis)
}

function predict() {
    img = document.getElementById("pic")
    classifier.classify(img, gotResult)

}
function gotResult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        p1 = result[0].label
        p2 = result[1].label
        speak()
document.getElementById("resultEmotion1").innerHTML=p1
document.getElementById("resultEmotion2").innerHTML=p2
if (p1=="heart") {
    document.getElementById("resultEmoji1").innerHTML="🫶"
}
if (p2=="heart") {
    document.getElementById("resultEmoji2").innerHTML="🫶"
}
if (p1=="thumbs up") {
    document.getElementById("resultEmoji1").innerHTML="👍"
}
if (p2=="thumbs up") {
    document.getElementById("resultEmoji2").innerHTML="👍"
}
if (p1=="thumbs down") {
    document.getElementById("resultEmoji1").innerHTML="👎"
}
if (p2=="thumbs down") {
    document.getElementById("resultEmoji2").innerHTML="👎"
}
if (p1=="peace") {
    document.getElementById("resultEmoji1").innerHTML="✌️"
}
if (p2=="peace") {
    document.getElementById("resultEmoji2").innerHTML="✌️"
}
    }
}
