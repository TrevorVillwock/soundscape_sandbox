// Declare variables here so they have the right scope
let startButton;
let volSlider;
let vol;
let span;
let reverb;
let blueSquare;
let greenSquare;
let redSquare;
let yellowSquare;

// Attack Decay Sustain Release (ADSR) Envelope used for all synthesizers
let synthEnvelope = {
    attack: 0.5, // seconds it takes for the sound to fade in
    decay: 0, // seconds it takes for the sound to fade down from 
              // full volume (1.0) to the sustain level. If the decay is
              // 0, the volume goes directly from 0 to the sustain level.
    sustain: 0.4, // volume
    release: 5 // seconds it takes for the sound to fade out once the mouse leaves
               // the square
};

document.addEventListener("DOMContentLoaded", () => {
    // Get necessary elements from html once page is loaded
    startButton = document.getElementById("startBtn");
    span = document.getElementById("theSpan");
    console.log("span:");
    console.log(span);
    volSlider = document.getElementById("volumeSlider");
    vol = new Tone.Volume(-25).toDestination();
    vol.volume.value = -1 * (100 - 13 * Math.log2(volSlider.value)) - 40;
    
    // For some reason the Tone.Reverb object only has toMaster() and not toDestination()
    // Reverb time initiated to 100 seconds
    let reverb = new Tone.Reverb(100).connect(vol);
    reverb.generate();

    /* You might notice here that the volumes of the pitches are different. Why is this?
    The human ear is naturally more sensitive to higher sounds, so they are percieved as slightly
    louder than low sounds even if the measured amplitude (height) of the waves was the same.
    Be careful not to confuse amplitude and frequency however. The amplitude of a wave is what we perceive 
    as volume and is the measurement of a soundwave from crest to trough. On an x-y graph of a soundwave, this
    is the vertical axis or y-axis. The frequency is the rate at which the wave oscillates and is measured in Hertz (Hz). 
    One Hertz is one complete cycle of the wave per second, 2 is twice per second, etc.
    
    More explanation:
    https://www.quora.com/Why-are-higher-frequency-sounds-louder-than-lower-frequency-sounds
    */
    square1 = new Tone.Synth({
        oscillator: {
            type: "sine",
            volume: -10,
        },
        envelope: synthEnvelope
    }).connect(reverb);
    
    square2 = new Tone.Synth({
        oscillator: {
            type: "sine",
            volume: -15,
        },
        envelope: synthEnvelope
    }).connect(reverb);
    
    square3 = new Tone.Synth({
        oscillator: {
            type: "sine",
            volume: -15,
        },
        envelope: synthEnvelope
    }).connect(reverb);
    
    square4 = new Tone.Synth({
        oscillator: {
            type: "sine",
            volume: -20,
        },
        envelope: synthEnvelope
    }).connect(reverb);

    square5 = new Tone.Synth({
        oscillator: {
            type: "sine",
            volume: -20,
        },
        envelope: synthEnvelope
    }).connect(reverb);
    
    square6 = new Tone.Synth({ 
        oscillator: {
            type: "sine",
            volume: -20,
        }, 
        envelope: synthEnvelope
    }).connect(reverb);
    
    square7 = new Tone.Synth({
        oscillator: {
            type: "sine",
            volume: -20,
        },
        envelope: synthEnvelope
    }).connect(reverb);
    
    square8 = new Tone.Synth({
        oscillator: {
            type: "sine",
            volume: -20,
        },
        envelope: synthEnvelope
    }).connect(reverb);

    Tone.start();
    Tone.Transport.start();
});

// Set the time delay between when the user's mouse leaves a square
// and the triggerRelease message is sent
let releaseDelay = "+1.5"

function playSquare1() {
    console.log("playing square 1");
    square1.triggerAttack(200);
}

function playSquare2() {
    square2.triggerAttack(300);
}

function playSquare3() {
    square3.triggerAttack(400);
}

function playSquare4() {
    square4.triggerAttack(500);
}

function playSquare5() {
    //square5.triggerAttack(square5.frequency.value);
    square5.triggerAttack(600);
    console.log(`square5.frequency.value: ${square5.frequency.value}`);
}

function playSquare6() {
    square6.triggerAttack(700);
    console.log(`square6.frequency.value: ${square6.frequency.value}`);
}

function playSquare7() {
    square7.triggerAttack(800);
    console.log(`square7.frequency.value: ${square7.frequency.value}`);
}

function playSquare8() {
    square8.triggerAttack(900);
}

function stopSquare1() {
    square1.triggerRelease(releaseDelay);
}

function stopSquare2() {
    square2.triggerRelease(releaseDelay);
}

function stopSquare3() {
    square3.triggerRelease(releaseDelay);
}

function stopSquare4() {
    square4.triggerRelease(releaseDelay);
}

function stopSquare5() {
    square5.triggerRelease(releaseDelay);
}

function stopSquare6() {
    square6.triggerRelease(releaseDelay);
}

function stopSquare7() {
    square7.triggerRelease(releaseDelay);
}

function stopSquare8() {
    square8.triggerRelease(releaseDelay);
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
      vol.volume.value = -1 * (100 - 13 * Math.log2(volSlider.value)) - 40;
      console.log(vol.volume.value);
    }
}

function closeModal() {
    let modal = document.getElementById("popup");
    console.log("modal:")
    console.log(modal)
    console.log("closing modal");
    modal.style.display="none";
}
