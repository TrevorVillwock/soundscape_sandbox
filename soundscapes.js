// For some reason the Tone.Reverb object only has toMaster() and not toDestination()
// Reverb time initiated to 100 seconds
let reverb = new Tone.Reverb(100).toMaster();

reverb.generate();

// Envelope used for all synthesizers
let synthEnvelope = {
    attack: 2,
    decay: 0,
    sustain: 0.1,
    release: 5
}

// Set the time delay between when the user's mouse leaves a square
// and the triggerRelease message is sent
let releaseDelay = "+1.5"

let blueSquare = new Tone.Synth({
    waveform: "sine",
    frequency: 200, 
    volume: 0.5,
    envelope: synthEnvelope
}).connect(reverb);

let greenSquare = new Tone.Synth({
    frequency: 250, 
    waveform: "sine",
    volume: 0.1, 
    envelope: synthEnvelope
}).connect(reverb);

let redSquare = new Tone.Synth({
    frequency: 300, 
    waveform: "sine",
    volume: 0.1,
    envelope: synthEnvelope
}).connect(reverb);

let yellowSquare = new Tone.Synth({
    frequency: 337, 
    waveform: "sine",
    volume: 0.05,
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
    //yellowSquare.stop();
    setTimeout
    yellowSquare.triggerRelease(releaseDelay);
    console.log("yellow stop");
}

window.onload = () => {
    Tone.start();
    Tone.Transport.start();
}
