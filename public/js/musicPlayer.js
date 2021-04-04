// Como essa desgraça funciona?
// Fico feliz que tenha perguntado :D

// Primeiro pegamos do HTML todos os elementos que vamos precisar fazer alterações:
var radio_container = document.getElementById('radio_container')
var radio_song_thumbnail = document.getElementById('radio_track-thumbnail')
var radio_song_title = document.getElementById('radio_song-title')
var radio_artist_name = document.getElementById('radio_artist-name')
var radio_player = document.getElementById('radio_player')
var music_duration = document.getElementById('radio_player')

// Setamos o volume do player de áudio:
// (Não vou estourar o ouvido de ninguém)
radio_player.volume = 0.05

// Definimos uma variável da música que está atualmente tocando (0 = posição 0 no array data)
let currentPlaying = 0

// Definimos os dados das músicas com um array de objetos:
// Cada objeto contém o título da música, o artista e os caminhos da thumbnail e do arquivo de áudio
const data = [
  {
    title: "Soda City Funk",
    artist: "람다람",
    thumbnail: '../../public/images/musics_thumbnails/sodaCityFunk.png',
    song_file: '../../public/music/radio_musics/sodaCityFunk.mp3'
  },
  {
    title: "Thank You!",
    artist: "Home Made Kazoku",
    thumbnail: '../../public/images/musics_thumbnails/thankYou.png',
    song_file: '../../public/music/radio_musics/thankYou.mp3'
  },
  {
    title: "Great Days",
    artist: "Karen Aoki",
    thumbnail: '../../public/images/musics_thumbnails/greatDays.png',
    song_file: '../../public/music/radio_musics/greatDays.mp3'
  },
  {
    title: "Friday Night",
    artist: "Kensuke Inage",
    thumbnail: '../../public/images/musics_thumbnails/yakuza0bSide.png',
    song_file: '../../public/music/radio_musics/fridayNight.mp3'
  },
  {
    title: "24 Hour Cinderella",
    artist: "Goro Majima",
    thumbnail: '../../public/images/musics_thumbnails/yakuza0bSide.png',
    song_file: '../../public/music/radio_musics/twentyFourHourCinderella.mp3'
  }
]

// Definimos a thumbnail, título, nome do artista e src da música 
// para a posição no array da música atualmente tocando
// Pegando os dados do objeto
radio_song_thumbnail.src = data[currentPlaying].thumbnail
radio_song_title.innerHTML = data[currentPlaying].title
radio_artist_name.innerHTML = data[currentPlaying].artist
radio_player.src = data[currentPlaying].song_file

// Essa função serve para exibir o player
function showPlayer() {
  radio_container.classList.remove('disabled')
}

// Essa função serve para fechar o player
// Tanto essa como a de cima, mexem com a classe disabled de CSS
function closePlayer() {
  radio_container.classList.add('disabled')
}

// Essa função faz com que o player selecione a música anterior
// Ele define a música atualmente tocando por ela mesma - 1 (para voltar 1 no array)
// Se a música selecionada for menor que 0, ele vai setar a última música do array
// com data.lenght - 1 (pois o length retorna o tamanho do array total (1 a n))
// Então ele define os dados da música e já dá play nela
function previousSong() {
  currentPlaying = currentPlaying - 1

  if(currentPlaying < 0) {
    currentPlaying = data.length -1
  }

  radio_song_thumbnail.src = data[currentPlaying].thumbnail
  radio_song_title.innerHTML = data[currentPlaying].title
  radio_artist_name.innerHTML = data[currentPlaying].artist
  radio_player.src = data[currentPlaying].song_file

  radio_player.play()
}

// Essa função faz com que o player selecione a próxima música
// Ele define a música atualmente tocando por ela mesma + 1 (para avançar 1 no array)
// Se a música selecionada for maior que o tamanho do array - 1, ele vai setar a primeira música do array
// com o valor 0 em currentPlaying
// Então ele define os dados da música e já dá play nela
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

// Essa é simplesmente uma instrução para tocar a próxima música assim que a atual terminar
radio_player.onended = () => {
  nextSong()
}
