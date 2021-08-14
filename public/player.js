const SoundCloudAudio = require('soundcloud-audio');
const player = new SoundCloudAudio('6aSX01kZxpetA85mf5R9Ezqs3ozjO2zc');

window.play = function () {
    player.resolve("https://soundcloud.com/songsstation/kaam-25-divine", function (track) {
        console.log(track);
        player.play();
    });
}

window.pause = function () {
    player.pause();
}

window.next = function(){
    player.next();
}

window.setVolume = function (level) {
    level = level / 100;
    player.setVolume(level);
}