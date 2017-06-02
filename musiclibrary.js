function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
  this.addPlaylist = function(newPlaylist) {
    this.playlists.push(newPlaylist);
  }
};

function Playlist(name) {
  this.name = name;
  this.tracks = [];
  this.addTrack = function(newTrack) {
    this.tracks.push(newTrack);
  };
  this.totalDuration = function() {
    return this.tracks.reduce(function(acc, val) {
      return acc + val.length;
    }, 0);
  };
  this.overallRating = function() {
    return this.tracks.reduce(function(acc, val) {
      return (acc + val.rating) / [val.tracks].length;
    }, 0);
  };
}

function Track(title, rating, length){
  this.title = title;
  this.rating = rating;
  this.length = length;
};
