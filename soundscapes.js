let reverb = new Tone.Reverb(100).toMaster();

reverb.generate();

let blueSquare = new Tone.Synth({
    waveform: "sine",
    frequency: 200, 
    volume: 0.5,
    envelope: {
        attack: 2,
        decay: 0,
        sustain: 0.1,
        release: 2
    }
}).connect(reverb);
    //toDestination();
    //;

let greenSquare = new Tone.Synth({
    frequency: 250, 
    waveform: "sine",
    volume: 0.1, 
    envelope: {
        attack: 2,
        decay: 0,
        sustain: 0.1,
        release: 2
    }
}).connect(reverb);
    //toDestination();
    //connect(reverb);

let redSquare = new Tone.Synth({
    frequency: 300, 
    waveform: "sine",
    volume: 0.1,
    envelope: {
        attack: 2,
        decay: 0,
        sustain: 0.1,
        release: 2
    }
}).connect(reverb);
    //toDestination();
    //connect(reverb);

let yellowSquare = new Tone.Synth({
    frequency: 337, 
    waveform: "sine",
    volume: 0.05,
    envelope: {
        attack: 2,
        decay: 0,
        sustain: 0.1,
        release: 2
    }
}).connect(reverb);
    //toDestination();
    //connect(reverb);

function playBlueSquare() {
    //blueSquare.start();
    //blueSquare.triggerAttackRelease("G2", "4n");
    blueSquare.triggerAttack("G2");
    console.log("blue start");
}

function playGreenSquare() {
    //greenSquare.start();
    greenSquare.triggerAttack("D3");
    console.log("green start");
}

function playRedSquare() {
    //redSquare.start();
    redSquare.triggerAttack("B3");
    console.log("red start");
}

function playYellowSquare() {
    //yellowSquare.start();
    yellowSquare.triggerAttack("F4");
    console.log("yellow start");
}

function stopBlueSquare() {
    blueSquare.triggerRelease();
    //blueSquare.stop();
    console.log("blue stop");
}

function stopGreenSquare() {
    //greenSquare.stop();
    greenSquare.triggerRelease();
    console.log("green stop");
}

function stopRedSquare() {
    //redSquare.stop();
    redSquare.triggerRelease();
    console.log("red stop");
}

function stopYellowSquare() {
    //yellowSquare.stop();
    yellowSquare.triggerRelease();
    console.log("yellow stop");
}

window.onload = () => {
    Tone.start();
    Tone.Transport.start();
}
