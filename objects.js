var playlist = {
  EdSheeran:  'Castle on the hill'
}

function updatePlaylist(playlist, artistName, songTitle){
  //playlist[ShawnMendes] = 'In My Blood';
  playlist[artistName] = songTitle;
  return playlist
}

updatePlaylist(playlist, ShawnMendes, 'In My Blood' );
