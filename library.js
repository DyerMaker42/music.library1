const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  printPlaylists: function () {
    for (let item in this.playlists) {
      //console.log(library.playlists[item].id);
      console.log(`${this.playlists[item].id}: ${this.playlists[item].name} - ${this.playlists[item].tracks.length} tracks `);
    }
  },
  printTracks: function () {
    for (let item in library.tracks) {
      const track = library.tracks[item];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },
  printPlaylist: function (playlistId) {
    console.log(`${this.playlists[playlistId].id}: ${this.playlists[playlistId].name} - ${this.playlists[playlistId].tracks.length} tracks `);
    for (let item in this.tracks) {
      const track = this.tracks[item];
      //console.log(library.tracks[item].id)
      for (let song of this.playlists[playlistId].tracks) {
        //console.log(song);
        if (song === this.tracks[item].id) {
          console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
        }
      }
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    //console.log(this.playlists[playlistId].tracks, "before");
    if (this.tracks[trackId]) {
      this.playlists[playlistId].tracks.push(trackId);
    }
    //console.log(this.playlists[playlistId].tracks, "after");
  },
  generateUid = function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function () {
  for (let item in library.playlists) {
    //console.log(library.playlists[item].id);
    console.log(`${library.playlists[item].id}: ${library.playlists[item].name} - ${library.playlists[item].tracks.length} tracks `);
  }
};

//library.printPlaylists();


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function () {
  for (let item in this.tracks) {
    const track = this.tracks[item];
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  }
};

//library.printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function (playlistId) {
  console.log(`${this.playlists[playlistId].id}: ${this.playlists[playlistId].name} - ${this.playlists[playlistId].tracks.length} tracks `);
  for (let item in this.tracks) {
    const track = this.tracks[item];
    //console.log(library.tracks[item].id)
    for (let song of this.playlists[playlistId].tracks) {
      //console.log(song);
      if (song === this.tracks[item].id) {
        console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
      }
    }
  }
};

//library.printPlaylist("p01");
// adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {
  //console.log(this.playlists[playlistId].tracks, "before");
  if (this.tracks[trackId]) {
    this.playlists[playlistId].tracks.push(trackId);
  }
  //console.log(this.playlists[playlistId].tracks, "after");
};

//library.addTrackToPlaylist("t03", "p01");

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function (name, artist, album) {
  const id = generateUid();
  //console.log(library.tracks, "before")
  library.tracks[id] = {
    id: id,
    name: [name],
    artist: [artist],
    album: [album]
  };
  //console.log(library.tracks, "after")
};

//addTrack("King Kunta", "Kendrick Lamar", "To Pimp A Butterfly")

// adds a playlist to the library
const addPlaylist = function (name) {
  const id = generateUid();
  console.log(library.playlists, "before");
  library.playlists[id] = {
    id: id,
    name: name
  };
  console.log(library.playlists, "after");
};

//addPlaylist("Route 66")

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {

};