// Get necessary elements from html
//let modal = document.getElementsByClassName("modal")[0];
let modal = document.getElementById("myModal");
console.log("modal:")
console.log(modal)
let startButton = document.getElementById("startBtn");
// let span = document.getElementsByClassName("close")[0];
let span = document.getElementById("theSpan");
console.log("span:")
console.log(span)
let volSlider = document.getElementById("volumeSlider");
let vol = new Tone.Volume(-25).toDestination();

// For some reason the Tone.Reverb object only has toMaster() and not toDestination()
// Reverb time initiated to 100 seconds
let reverb = new Tone.Reverb(100).connect(vol);

reverb.generate();

// ADSR Envelope used for all synthesizers
let synthEnvelope = {
    attack: 2, // seconds
    decay: 0, // seconds
    sustain: 0.1, // volume
    release: 5
}

// Set the time delay between when the user's mouse leaves a square
// and the triggerRelease message is sent
let releaseDelay = "+1.5"

let blueSquare = new Tone.Synth({
    waveform: "sine",
    frequency: 200, 
    volume: 0.25,
    envelope: synthEnvelope
}).connect(reverb);

let greenSquare = new Tone.Synth({
    frequency: 250, 
    waveform: "sine",
    volume: 0.05, 
    envelope: synthEnvelope
}).connect(reverb);

let redSquare = new Tone.Synth({
    frequency: 300, 
    waveform: "sine",
    volume: 0.05,
    envelope: synthEnvelope
}).connect(reverb);

let yellowSquare = new Tone.Synth({
    frequency: 337, 
    waveform: "sine",
    volume: 0.025,
    envelope: synthEnvelope
}).connect(reverb);

function playBlueSquare() {
    blueSquare.triggerAttack("G2");
    console.log("blue start");
}

function playGreenSquare() {
    greenSquare.triggerAttack("D3");
    console.log("green start");
}

function playRedSquare() {
    redSquare.triggerAttack("B3");
    console.log("red start");
}

function playYellowSquare() {
    yellowSquare.triggerAttack("F4");
    console.log("yellow start");
}

function stopBlueSquare() {
    blueSquare.triggerRelease(releaseDelay);
    console.log("blue stop");
}

function stopGreenSquare() {
    greenSquare.triggerRelease(releaseDelay);
    console.log("green stop");
}

function stopRedSquare() {
    redSquare.triggerRelease(releaseDelay);
    console.log("red stop");
}

function stopYellowSquare() {
    setTimeout
    yellowSquare.triggerRelease(releaseDelay);
    console.log("yellow stop");
}

function setVolume() {
    
    /************************************************************
    The html slider gives us values 0-200, which we map
    to be between -100 and 0 dB because that's what the
    Tone.js Volume object expects.
    For an explanation of how decibels work check out this page:
    https://ehomerecordingstudio.com/decibels/
    *************************************************************/ 
  
    // log2(0) is undefined and will throw an error since there's no power of 2 that equals zero.
    if (volSlider.value != 0) {
      vol.volume.value = -1 * (100 - 13 * Math.log2(volSlider.value));
    }
}

function closeModal() {
    console.log("closing modal");
    modal.style.display="none";
}

window.onload = () => {
    Tone.start();
    Tone.Transport.start();
}
