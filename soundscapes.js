//let reverb = new Tone.Reverb(2000).toDestination();

let blueSquare = new Tone.Synth({
    frequency: 100, 
    waveform: "sine",
    volume: 0.5}).toDestination();
    //connect(reverb);

let greenSquare = new Tone.Synth({
    frequency: 300, 
    waveform: "sine",
    volume: 0.1}).toDestination();
    //connect(reverb);

let redSquare = new Tone.Synth({
    frequency: 400, 
    waveform: "sine",
    volume: 0.1}).toDestination();
    //connect(reverb);

let yellowSquare = new Tone.Synth({
    frequency: 700, 
    waveform: "sine",
    volume: 0.05}).toDestination();
    //connect(reverb);

function playBlueSquare() {
    //blueSquare.start();
    blueSquare.triggerAttackRelease("G2", "4n");
    console.log("blue start");
}

function playGreenSquare() {
    //greenSquare.start();
    greenSquare.triggerAttackRelease("D3", "4n");
    console.log("green start");
}

function playRedSquare() {
    //redSquare.start();
    redSquare.triggerAttackRelease("B3", "4n");
    console.log("red start");
}

function playYellowSquare() {
    //yellowSquare.start();
    yellowSquare.triggerAttackRelease("F4", "4n");
    console.log("yellow start");
}

function stopBlueSquare() {
    //blueSquare.triggerRelease();
    //blueSquare.stop();
    console.log("blue stop");
}

function stopGreenSquare() {
    //greenSquare.stop();
    //greenSquare.triggerRelease();
    console.log("green stop");
}

function stopRedSquare() {
    //redSquare.stop();
    //redSquare.triggerRelease();
    console.log("red stop");
}

function stopYellowSquare() {
    //yellowSquare.stop();
    //yellowSquare.triggerRelease();
    console.log("yellow stop");
}

Tone.start();

Tone.Transport.start();