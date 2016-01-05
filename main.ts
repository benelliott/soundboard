/// <reference path="Sound.ts"/>

let playSound = (path: string) => {
    let sound = new Audio(path);
    sound.play();
};

(()=>{
    let soundNames = [
        'Woof'
    ];

    let sounds = soundNames.map((name) => new Sound(name));

    document.getElementById('soundboard').innerHTML = sounds.map(sound => sound.generateSoundButtonHtml()).join('');;

    let scriptEl = document.createElement('script');

    scriptEl.innerHTML = sounds.map(sound => sound.generateSoundButtonJs()).join('');

    document.body.appendChild(scriptEl);
})();