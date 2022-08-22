const channelList = [
  {
    rating: 5,
    title: "YouTube",
    description: "",
    url: "https://www.youtube.com",
    info: "",
    logo: "./youtube-1.png",
    costo: "gratis",
    tipo: ["gratis"],
    isFavorite: false
  },
  {
    rating: 5,
    title: "Netflix",
    description: "Watch Netflix on your TV.",
    url: "https://www.netflix.com/",
    info: "https://www.youtube.com/c/TopCinema/search?query=netflix",
    logo: "./netflix.png",
    costo: "subscripcion",
    tipo: ["subscripcion"],
    isFavorite: false
  },
  {
    rating: 5,
    title: "Prime Video",
    description: "",
    url: "https://www.primevideo.com/",
    info: "https://www.youtube.com/c/TopCinema/search?query=prime%20video",
    logo: "./prime-video.png",
    costo: "subscripcion",
    tipo: ["subscripcion"],
    isFavorite: false
  },
  {
    rating: 5,
    title: "HBOMax",
    description: "",
    url: "https://play.hbomax.com/page/urn:hbo:page:home",
    info: "https://www.youtube.com/c/TopCinema/search?query=hbo%20max",
    logo: "./hbo-max.png",
    costo: "subscripcion",
    tipo: ["subscripcion"],
    isFavorite: false
  },
  {
    rating: 5,
    title: "Disney+",
    description: "",
    url: "https://www.disneyplus.com/home",
    info: "https://www.youtube.com/c/TopCinema/search?query=disney",
    logo: "./disney-plus.png",
    costo: "subscripcion",
    tipo: ["subscripcion"],
    isFavorite: false
  },
  {
    rating: 5,
    title: "Star+",
    description: "",
    url: "https://www.starplus.com/es-419/home",
    info: "https://www.youtube.com/c/TopCinema/search?query=Star",
    logo: "./star-plus.png",
    costo: "subscripcion",
    tipo: ["subscripcion"],
    isFavorite: false
  },
  {
    rating: 5,
    title: "Paramount+",
    description: "",
    url: "https://www.paramountplus.com/",
    info: "https://www.youtube.com/c/TopCinema/search?query=paramount%20plus",
    logo: "./paramount-plus.png",
    costo: "subscripcion",
    tipo: ["subscripcion"],
    isFavorite: false
  },
  {
    rating: 5,
    title: "AppleTv+",
    description: "",
    url: "https://tv.apple.com/",
    info: "https://www.youtube.com/c/TopCinema/search?query=paramount%20plus",
    logo: "./apple-tv.png",
    costo: "subscripcion",
    tipo: ["subscripcion"],
    isFavorite: false
  },
  {
    rating: 3,
    title: "Spotify",
    description: "",
    url: "https://open.spotify.com/collection/albums",
    info: "",
    logo: "./spotify.png",
    costo: "gratis o subscripcion",
    tipo: ["subscripcion", "musica"],
    isFavorite: false
  },
  {
    rating: 5,
    title: "Crunchiroll",
    description: "",
    url: "https://www.crunchyroll.com/es/videos/anime",
    info: "https://www.youtube.com/c/CrunchyrollenEspa%C3%B1ol/videos",
    logo: "./crunchyroll.png",
    costo: "gratis o subscripcion",
    tipo: ["subscripcion", "animacion"],
    isFavorite: false
  },
  {
    rating: 4,
    title: "Mi TE-LE-FE",
    description: "",
    url: "https://mitelefe.com/vivo/",
    info: "",
    logo: "./mi-telefe.png",
    costo: "gratis",
    tipo: ["in-spanish", "argentino", "tv-en-vivo"],
    isFavorite: false
  },
  {
    rating: 4,
    title: "Canal 9 BsAs",
    description: "",
    url: "https://www.elnueve.com.ar/en-vivo",
    info: "",
    logo: "./elnueve-bsas-ar.png",
    costo: "gratis",
    tipo: ["in-spanish", "argentino", "tv-en-vivo"],
    isFavorite: false
  },
  {
    rating: 4,
    title: "America TV",
    description: "",
    url: "https://televisionlibre.net/canal/america-tv-en-vivo/",
    info: "",
    logo: "./america-tv.png",
    costo: "gratis",
    tipo: ["in-spanish", "argentino", "tv-en-vivo"],
    isFavorite: false
  },
  {
    rating: 5,
    title: "Twitch",
    description: "",
    url: "https://www.twitch.tv/directory/following/live",
    info: "",
    logo: "./Twitch.png",
    costo: "gratis",
    tipo: ["gratis"],
    isFavorite: false
  },
  {
    rating: 4,
    title: "Cont.ar",
    description: "",
    url: "https://www.cont.ar/",
    info: "",
    logo: "./cont.ar.png",
    costo: "gratis",
    tipo: ["gratis", "in-spanish", "argentino"],
    isFavorite: false
  },
  {
    rating: 4,
    title: "Cont.ar VIVO",
    description: "",
    url: "https://www.cont.ar/live",
    info: "",
    logo: "./cont.ar.png",
    costo: "gratis",
    tipo: ["in-spanish", "argentino", "tv-en-vivo"],
    isFavorite: false
  },
  {
    rating: 4,
    title: "CineAR Play",
    description: "",
    url: "https://play.cine.ar/inicio",
    info: "",
    logo: "./cinear-play-1.png",
    costo: "gratis",
    tipo: ["gratis", "in-spanish", "argentino"],
    isFavorite: false
  },
  {
    rating: 5,
    title: "Pluto TV",
    description: "",
    url: "https://pluto.tv/on-demand",
    info: "https://www.youtube.com/c/PlutoTVLatam",
    logo: "./pluto-tv.png",
    costo: "gratis",
    tipo: ["gratis", "in-spanish"],
    isFavorite: false
  },
  {
    rating: 5,
    title: "Vix",
    description: "",
    url: "https://www.vix.com/es-es/ondemand",
    info: "",
    logo: "./vix-tv.jpg",
    costo: "gratis",
    tipo: ["gratis", "in-spanish", "mexico"],
    isFavorite: false
  },
  {
    rating: 5,
    title: "Playz",
    description: "",
    url: "https://www.rtve.es/playz/",
    info: "",
    logo: "./playz.png",
    costo: "gratis",
    tipo: ["gratis", "in-spanish", "españa"],
    isFavorite: false
  },
  {
    rating: 5,
    title: "Canela TV",
    description: "",
    url: "https://www.canela.tv/",
    info: "",
    logo: "./canela-tv.png",
    costo: "gratis",
    tipo: ["gratis", "in-spanish"],
    isFavorite: false
  },
  {
    rating: 5,
    title: "Cuevana (3)",
    description: "",
    url: "https://ww1.cuevana3.me/",
    info: "",
    logo: "./cuevana-3.png",
    costo: "gratis",
    tipo: ["gratis"],
    isFavorite: false
  },
  {
    rating: 5,
    title: "pelisplus (estrenos)",
    description: "",
    url: "https://pelisplus.io/peliculas/estreno/",
    info: "",
    logo: "./pelisplus-1.png",
    costo: "gratis",
    tipo: ["gratis"],
    isFavorite: false
  },
  {
    rating: 5,
    title: "GNULA - Series",
    description: "",
    url: "https://gnula.se/",
    info: "",
    logo: "./gnula-serie.png",
    costo: "gratis",
    tipo: ["gratis"],
    isFavorite: false
  },
  {
    rating: 5,
    title: "GNULA - Peliculas",
    description: "",
    url: "https://gnula.nu/",
    info: "",
    logo: "./gnula-pelis.jpg",
    costo: "gratis",
    tipo: ["gratis"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "Anime Blix",
    description: "",
    url: "https://animeblix.com/animes",
    info: "",
    logo: "./animeblix-2.png",
    costo: "gratis",
    tipo: ["animacion"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "Anime FLV",
    description: "",
    url: "https://www3.animeflv.net/browse",
    info: "",
    logo: "./anime-flv-1.png",
    costo: "gratis",
    tipo: ["animacion"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "Anime Onegai",
    description: "",
    url: "https://www.animeonegai.com/es/page/home",
    info: "",
    logo: "./anime-onegai.png",
    costo: "gratis",
    tipo: ["animacion"],
    isFavorite: false
  }, 
  {
    rating: 0,
    title: "LA. Cartoons",
    description: "",
    url: "https://www.lacartoons.com/",
    info: "",
    logo: "./kids-tv.jpg",
    costo: "gratis",
    tipo: ["animacion"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "Kids Peliculas",
    description: "",
    url: "https://www.gnula2.co/categoria/animacion/",
    info: "",
    logo: "./kids-tv-peliculas.jpg",
    costo: "gratis",
    tipo: ["animacion"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "Disney Channel",
    description: "",
    url: "https://televisionlibre.net/canal/disney-channel-en-vivo/",
    info: "",
    logo: "./Disney-channel.png",
    costo: "gratis",
    tipo: ["animacion", "tv-en-vivo"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "Cartoon Network (vivo)",
    description: "",
    url: "https://televisionlibre.net/canal/cartoon-network-en-vivo/",
    info: "",
    logo: "./cartoon-network.png",
    costo: "gratis",
    tipo: ["animacion", "tv-en-vivo"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "Boomerang (vivo)",
    description: "",
    url: "https://televisionlibre.net/canal/boomerang-en-vivo/",
    info: "",
    logo: "./boomerang.png",
    costo: "gratis",
    tipo: ["animacion", "tv-en-vivo"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "nikelodeon (vivo)",
    description: "",
    url: "https://televisionlibre.net/canal/nick-en-vivo/",
    info: "",
    logo: "./nikelodeon.png",
    costo: "gratis",
    tipo: ["animacion", "tv-en-vivo"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "televisionlibre",
    description: "",
    url: "https://televisionlibre.net/es/",
    info: "",
    logo: "./tv-libre.png",
    costo: "gratis",
    tipo: ["gratis"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "photocall.tv",
    description: "",
    url: "https://photocall.tv",
    info: "",
    logo: "./tv-ipod-icon.jpg",
    costo: "gratis",
    tipo: ["gratis"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "TV ARG HD",
    description: "",
    url: "https://www.tvarghd.com/",
    info: "",
    logo: "./argentina-tv-hd.png",
    costo: "gratis",
    tipo: ["in-spanish", "argentino", "youtube"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "YouTube Music",
    description: "",
    url: "https://music.youtube.com/",
    info: "",
    logo: "./youtube-music.png",
    costo: "gratis o subscripcion",
    tipo: ["subscripcion", "musica"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "Radios MDP",
    description: "",
    url: "https://radioarg.net/buenos-aires/mar-del-plata",
    info: "",
    logo: "./RadiosArg.Net.png",
    costo: "gratis",
    tipo: ["argentino", "musica"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "Radios Argentina",
    description: "",
    url: "https://radioarg.com/",
    info: "",
    logo: "./radios-argentina.png",
    costo: "gratis",
    tipo: ["argentino", "musica"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "Conciertos Clasicos",
    description: "",
    url: "https://www.youtube.com/watch?v=RhO5OSLZjl8&list=PLGiHySZ9dpHhqQbOtN9eAL4MxRonA6KHa",
    info: "",
    logo: "./conciertos-clasicos.png",
    costo: "gratis",
    tipo: ["musica", "youtube"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "Recitales",
    description: "",
    url: "https://www.youtube.com/watch?v=KhCNz8pw3tg&list=PL54835teYYB6TXx0j37rArlHeS2Nzi9Fw&index=6",
    info: "",
    logo: "./rock.jpg",
    costo: "gratis",
    tipo: ["musica"],
    isFavorite: false
  },
  {
    rating: 1,
    title: "Depor TV",
    description: "",
    url: "https://www.youtube.com/c/canaldeportv/featured",
    info: "",
    logo: "./deportv.jpg",
    costo: "gratis",
    tipo: ["in-spanish", "argentino", "deporte", "youtube"],
    isFavorite: false
  },
  {
    rating: 1,
    title: "Red Bull TV",
    description: "",
    url: "https://www.redbull.com/ar-es/discover",
    info: "",
    logo: "./redbull-tv.png",
    costo: "gratis",
    tipo: ["gratis", "deporte"],
    isFavorite: false
  },
  {
    rating: 1,
    title: "FMS TV",
    description: "",
    url: "https://www.youtube.com/user/Urbanroosters",
    info: "",
    logo: "./FMS-24hs.jpg",
    costo: "gratis",
    tipo: ["in-spanish", "gratis", "deporte", "youtube"],
    isFavorite: false
  },
  {
    rating: 1,
    title: "Plex Tv (en ingles)",
    description: "",
    url: "https://watch.plex.tv/movies-and-shows",
    info: "",
    logo: "./Plex.webp",
    costo: "gratis",
    tipo: ["gratis","in-english"],
    isFavorite: false
  },
  {
    rating: 1,
    title: "Ororo.TV",
    description: "",
    url: "https://ororo.tv/es/shows/",
    info: "",
    logo: "./ororo-tv.jpg",
    costo: "gratis",
    tipo: ["gratis"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "Qubit Tv",
    description: "",
    url: "https://www.qubit.tv/inicio/",
    info: "",
    logo: "./Qubit-tv.png",
    costo: "subscripcion",
    tipo: ["subscripcion"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "DirecTV GO",
    description: "",
    url: "https://www.directvgo.com/home/watch",
    info: "",
    logo: "./directv-go.png",
    costo: "subscripcion",
    tipo: ["subscripcion", "in-spanish", "argentino"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "Teatrix",
    description: "",
    url: "https://teatrix.com/",
    info: "teatro como en el teatro",
    logo: "./teatrix.png",
    costo: "subscripcion",
    tipo: ["subscripcion", "in-spanish", "argentino"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "Udemy",
    description: "",
    url: "https://www.udemy.com/",
    info: "Ahorra y aprende a lo grande",
    logo: "./Udemy.webp",
    costo: "subscripcion",
    tipo: ["subscripcion"],
    isFavorite: false
  },
 
  {
    rating: 5,
    title: "TV Publica",
    description: "",
    url: "https://www.youtube.com/user/TVPublicaArgentina",
    info: "",
    logo: "./TV-Publica.png",
    costo: "gratis",
    tipo: ["in-spanish", "argentino", "youtube"],
    isFavorite: false
  },
  {
    rating: 5,
    title: "Canal Encuentro",
    description: "",
    url: "https://www.youtube.com/user/encuentro",
    info: "",
    logo: "./canal-encuentro.png",
    costo: "gratis",
    tipo: ["in-spanish", "argentino", "youtube"],
    isFavorite: false
  },
  {
    rating: 5,
    title: "Paka Paka",
    description: "",
    url: "https://www.youtube.com/user/CanalPakapaka",
    info: "",
    logo: "./paka-paka.jpeg",
    costo: "gratis",
    tipo: ["in-spanish", "argentino", "animacion"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "DW - Documental",
    description: "",
    url: "https://www.youtube.com/c/DWDocumental/videos",
    info: "",
    logo: "./dw-documentales.jpg",
    costo: "gratis",
    tipo: ["in-spanish", "youtube"],
    isFavorite: false
  },
  {
    rating: 3,
    title: "Cronica TV",
    description: "",
    url: "https://www.youtube.com/watch?v=InSydaLSSlw&ab_channel=Cr%C3%B3nicaTV",
    info: "",
    logo: "./cronica-tv.png",
    costo: "gratis",
    tipo: ["in-spanish", "argentino", "youtube", "tv-en-vivo"],
    isFavorite: false
  },
  {
    rating: 2,
    title: "TN en vivo",
    description: "",
    url: "https://www.youtube.com/watch?v=wHn1_QVoXGM&ab_channel=TodoNoticias",
    info: "",
    logo: "./TN-vivo.png",
    costo: "gratis",
    tipo: ["in-spanish", "argentino", "tv-en-vivo"],
    isFavorite: false
  },
  {
    rating: 2,
    title: "C5N",
    description: "",
    url: "https://www.youtube.com/c/c5n",
    info: "",
    logo: "./c5n.png",
    costo: "gratis",
    tipo: ["in-spanish", "argentino", "youtube", "tv-en-vivo"],
    isFavorite: false
  },
  {
    rating: 2,
    title: "La Nacion+",
    description: "",
    url: "https://www.youtube.com/watch?v=HYxWurJ3ejE&ab_channel=LANACION",
    info: "",
    logo: "./la-nacion.png",
    costo: "gratis",
    tipo: ["in-spanish", "argentino", "youtube", "tv-en-vivo"],
    isFavorite: false
  },
  {
    rating: 2,
    title: "Canal 26",
    description: "",
    url: "https://www.youtube.com/c/canal26",
    info: "",
    logo: "./canal-26.jpg",
    costo: "gratis",
    tipo: ["in-spanish", "argentino", "youtube", "tv-en-vivo"],
    isFavorite: false
  },

  {
    rating: 2,
    title: "TYC Sport",
    description: "",
    url: "https://futbollibre.net/en-vivo/tyc-sports/",
    info: "",
    logo: "./TyC_Sports.webp",
    costo: "gratis",
    tipo: ["in-spanish", "deporte", "tv-en-vivo"],
    isFavorite: false
  },
  {
    rating: 2,
    title: "ESPN 2",
    description: "",
    url: "https://futbollibre.net/en-vivo/espn-2/",
    info: "",
    logo: "./espn.png",
    costo: "gratis",
    tipo: ["in-spanish", "deporte", "tv-en-vivo"],
    isFavorite: false
  },
  {
    rating: 2,
    title: "Fox Sports",
    description: "",
    url: "https://futbollibre.net/en-vivo/fox-sports-1/?gratis",
    info: "",
    logo: "./fox-sports.png",
    costo: "gratis",
    tipo: ["in-spanish", "deporte", "tv-en-vivo"],
    isFavorite: false
  },
  {
    rating: 2,
    title: "DirecTV Sports",
    description: "",
    url: "https://futbollibre.net/en-vivo/directv-sports/",
    info: "",
    logo: "./directv-sport.png",
    costo: "gratis",
    tipo: ["in-spanish", "deporte", "tv-en-vivo"],
    isFavorite: false
  },
  {
    rating: 2,
    title: "AXN (vivo)",
    description: "",
    url: "https://televisionlibre.net/canal/axn-en-vivo/",
    info: "",
    logo: "./axn-tv.png",
    costo: "gratis",
    tipo: ["in-spanish", "gratis", "tv-en-vivo"],
    isFavorite: false
  },
  {
    rating: 2,
    title: "Warner TV",
    description: "",
    url: "https://televisionlibre.net/canal/warner-channel-en-vivo/",
    info: "",
    logo: "./warner-channel.png",
    costo: "gratis",
    tipo: ["in-spanish", "gratis", "tv-en-vivo"],
    isFavorite: false
  },
  {
    rating: 2,
    title: "Universal TV",
    description: "",
    url: "https://televisionlibre.net/canal/universal-channel-en-vivo/",
    info: "",
    logo: "./universal-tv.png",
    costo: "gratis",
    tipo: ["in-spanish", "gratis", "tv-en-vivo"],
    isFavorite: false
  },
  {
    rating: 2,
    title: "Sony Channel",
    description: "",
    url: "https://televisionlibre.net/canal/sony-channel-en-vivo/",
    info: "",
    logo: "./sony-channel.webp",
    costo: "gratis",
    tipo: ["in-spanish", "gratis", "tv-en-vivo"],
    isFavorite: false
  },
  // {
  //   rating: 0,
  //   title: "canal 8 MDP",
  //   description: "",
  //   url: "https://mardelplata.telefe.com/vivo",
  //   info: "https://mardelplata.mitelefe.com/horarios",
  //   logo: "./canal8-mdq.png",
  //   costo: "gratis",
  //   tipo: ["in-spanish", "argentino"],
  //   isFavorite: false
  // },
  // {
  //   rating: 0,
  //   title: "Canal 10 MDP",
  //   description: "",
  //   url: "https://zencast.tv/player/canal10/",
  //   info: "https://www.canal10mardelplata.tv/DiasyHorarios/",
  //   logo: "./canal-10-mdq-2.jpg",
  //   costo: "gratis",
  //   tipo: ["in-spanish", "argentino"],
  //   isFavorite: false
  // },
  {
    rating: 0,
    title: "Whatsapp",
    description: "",
    // url: "whatsapp://send?text=YoYoYo",
    url: "https://web.whatsapp.com/",
    info: "",
    logo: "./whatsApp.png",
    costo: "gratis",
    tipo: ["app"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "Instagram",
    description: "",
    // url: "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end",
    url: "https://instagram.com/",
    info: "",
    logo: "./instagram.webp",
    costo: "gratis",
    tipo: ["app"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "Tik-Tok",
    description: "",
    // url: "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end",
    url: "https://www.tiktok.com/",
    info: "",
    logo: "./tik-tok.png",
    costo: "gratis",
    tipo: ["app"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "Facebook",
    description: "",
    // url: "intent://facebook.com/#Intent;scheme=https;package=com.facebook.android;end",
    url: "https://facebook.com/",
    info: "",
    logo: "./facebook.webp",
    costo: "gratis",
    tipo: ["app"],
    isFavorite: false
  },
  {
    rating: 0,
    title: "Twitter",
    description: "",
    // url: "intent://twitter.com/#Intent;scheme=https;package=com.twitter.android;end",
    url: "https://twitter.com/",
    info: "",
    logo: "./twitter.jpg",
    costo: "gratis",
    tipo: ["app"],
    isFavorite: false
  },
];
export default channelList;
