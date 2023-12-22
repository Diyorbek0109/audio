const musics = [
  {
    nomi: "Billie Eilish - Bellyache",
    manzil: function () {
      return ` music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `images/${this.nomi}.jpg`;
    },
  },
  {
    nomi: "Charlie Puth - Light Switch",
    manzil: function () {
      return `music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `images/${this.nomi}.jpg`;
    },
  },
  {
    nomi: "Coldplay X Selena Gomez - Let Somebody Go",
    manzil: function () {
      return `music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `images/${this.nomi}.jpg`;
    },
  },
  {
    nomi: "Pharrell Williams - Happy",
    manzil: function () {
      return ` music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return ` images/${this.nomi}.jpg`;
    },
  },
  {
    nomi: "Taylor Swift ft. Kendrick Lamar - Bad Blood",
    manzil: function () {
      return `music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `images/${this.nomi}.jpg`;
    },
  },
];
let music_index = 0;
let main_fon = document.getElementById("main_fon");
let music_img = document.getElementById("music_img");
let marquee = document.getElementById("marquee");
let audio = document.getElementById("audio");
let volumem = document.getElementById("volumem");
let play_going = document.getElementById("play_going");
let play = document.getElementById("play");
let qaytish = document.getElementById("qaytish");
let isPlaying = false;

music_info();
function volume_func() {
  audio.volume = volumem.value / 100;
}

function play_going_func() {
  audio.currentTime = (audio.duration * play_going.value) / 100;
  // play_going.value = audio.duration;
}

function music_info() {
  play_going.value = 0;
  main_fon.src = musics[music_index].rasm();
  music_img.src = musics[music_index].rasm();
  marquee.innerHTML = musics[music_index].nomi;
  audio.src = musics[music_index].manzil();
}
function audio_going() {
  play_going.value = Math.round((audio.currentTime * 100) / audio.duration);
  if (audio.currentTime == audio.duration) {
    clearInterval(myIntrval);
    play.innerHTML = "pause_circle";
    next();
  }
}
function play_func() {
  myIntrval = setInterval(audio_going, 100);
  isPlaying = !isPlaying;
  if (isPlaying) {
    play.innerHTML = "pause_circle";
    audio.play();
    console.log("play");
  } else {
    play.innerHTML = "play_circle";
    audio.pause();
    console.log("pause");
  }
  if (audio.value - 100 == 0) {
    next();
  }
}
function next() {
  if (music_index < musics.length - 1) {
    music_index += 1;
  } else {
    music_index = 0;
  }
  isPlaying = false;
  // audio.src = musics[music_index].manzil();
  music_info();
  play_func();
}
function prev() {
  if (music_index == 0) {
    music_index += musics.length - 1;
  } else {
    music_index -= 1;
  }
  // audio.src = musics[music_index].manzil();
  isPlaying = false;
  music_info();
  play_func();
}
