var radio_container = document.getElementById('radio_container')
var radio_song_thumbnail = document.getElementById('radio_track-thumbnail')
var radio_song_title = document.getElementById('radio_song-title')
var radio_artist_name = document.getElementById('radio_artist-name')
var radio_player = document.getElementById('radio_player')
var music_duration = document.getElementById('radio_player')

// Não vou estourar o ouvido de ninguém:
radio_player.volume = 0.05

let currentPlaying = 0

const data = [
  {
    title: "Plastic Love",
    artist: "Mariya Takeuchi",
    thumbnail: '../../public/images/musics_thumbnails/plasticLoveThumb.jpg',
    song_file: '../../public/music/radio_musics/plasticLove.mp3'
  },
  {
    title: "Cruel Angel Thesis",
    artist: "Yoko Takahashi",
    thumbnail: '../../public/images/musics_thumbnails/cruelAngelThesisThumb.png',
    song_file: '../../public/music/radio_musics/cruelAngelThesis.mp3'
  },
  {
    title: "Macintosh Plus 420",
    artist: "Vektroid",
    thumbnail: '../../public/images/musics_thumbnails/floralShoppe.jpg',
    song_file: '../../public/music/radio_musics/macintoshPlus420.mp3'
  },
  {
    title: "Baka Mitai",
    artist: "Kazuma Kyriu",
    thumbnail: '../../public/images/musics_thumbnails/bakaMitai.png',
    song_file: '../../public/music/radio_musics/bakaMitai.mp3'
  },
  {
    title: "Il Vento d'Oro",
    artist: "Yugo kanno",
    thumbnail: '../../public/images/musics_thumbnails/ilVentoDoro.png',
    song_file: '../../public/music/radio_musics/ilVentoDoro.mp3'
  }
]

radio_song_thumbnail.src = data[currentPlaying].thumbnail
radio_song_title.innerHTML = data[currentPlaying].title
radio_artist_name.innerHTML = data[currentPlaying].artist
radio_player.src = data[currentPlaying].song_file

function showPlayer() {
  radio_container.classList.remove('disabled')
}

function closePlayer() {
  radio_container.classList.add('disabled')
}

function previousSong() {
  currentPlaying = currentPlaying - 1

  if(currentPlaying < 0) {
    currentPlaying = 0
  }

  radio_song_thumbnail.src = data[currentPlaying].thumbnail
  radio_song_title.innerHTML = data[currentPlaying].title
  radio_artist_name.innerHTML = data[currentPlaying].artist
  radio_player.src = data[currentPlaying].song_file

  radio_player.play()
}

function nextSong() {
  currentPlaying = currentPlaying + 1

  if(currentPlaying > data.length - 1) {
    currentPlaying = 0
  }

  radio_song_thumbnail.src = data[currentPlaying].thumbnail
  radio_song_title.innerHTML = data[currentPlaying].title
  radio_artist_name.innerHTML = data[currentPlaying].artist
  radio_player.src = data[currentPlaying].song_file
  
  radio_player.play()
}

radio_player.onended = () => {
  nextSong()
}
