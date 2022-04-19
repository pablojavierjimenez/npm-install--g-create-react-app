const channelList = [
  {
    title: "Netflix",
    description: "Watch Netflix on your TV.",
    url: "https://www.netflix.com/",
    info: "https://www.youtube.com/c/TopCinema/search?query=netflix",
    logo: "./netflix.png",
    costo: "subscripcion"
  },
  {
    title: "Prime Video",
    description: "",
    url: "https://www.primevideo.com/",
    info: "https://www.youtube.com/c/TopCinema/search?query=prime%20video",
    logo: "./prime-video.png",
    costo: "subscripcion"
  },
  {
    title: "HBOMax",
    description: "",
    url: "https://play.hbomax.com/page/urn:hbo:page:home",
    info: "https://www.youtube.com/c/TopCinema/search?query=hbo%20max",
    logo: "./hbo-max.png",
    costo: "subscripcion"
  },
  {
    title: "Disney+",
    description: "",
    url: "https://www.disneyplus.com/home",
    info: "https://www.youtube.com/c/TopCinema/search?query=disney",
    logo: "./disney-plus.png",
    costo: "subscripcion"
  },
  {
    title: "Star+",
    description: "",
    url: "https://www.starplus.com/es-419/home",
    info: "https://www.youtube.com/c/TopCinema/search?query=Star",
    logo: "./star-plus.png",
    costo: "subscripcion"
  },
  {
    title: "Paramount+",
    description: "",
    url: "https://www.paramountplus.com/",
    info: "https://www.youtube.com/c/TopCinema/search?query=paramount%20plus",
    logo: "./paramount-plus.png",
    costo: "subscripcion"
  },
  {
    title: "DirecTV GO",
    description: "",
    url: "https://www.directvgo.com/home/watch",
    info: "",
    logo: "./directv-go.png",
    costo: "subscripcion"
  },
  {
    title: "YouTube",
    description: "",
    url: "https://www.youtube.com",
    info: "",
    logo: "./youtube-1.png",
    costo: "gratis"
  },
  {
    title: "Pluto TV",
    description: "",
    url: "https://pluto.tv/on-demand",
    info: "https://www.youtube.com/c/PlutoTVLatam",
    logo: "./pluto-tv.png",
    costo: "gratis"
  },
  {
    title: "Vix",
    description: "",
    url: "https://www.vix.com/es-es/ondemand",
    info: "",
    logo: "./vix-tv.jpg",
    costo: "gratis"
  },
  {
    title: "pelisplus (estrenos)",
    description: "",
    url: "https://pelisplus.io/peliculas/estreno/",
    info: "",
    logo: "./pelisplus-1.png",
    costo: "gratis"
  },
  {
    title: "CineAR Play",
    description: "",
    url: "https://play.cine.ar/inicio",
    info: "",
    logo: "./cinear-play.png",
    costo: "gratis"
  },
  {
    title: "canal 8 mar del plata",
    description: "",
    url: "https://mardelplata.telefe.com/vivo",
    info: "https://mardelplata.mitelefe.com/horarios",
    logo: "./canal8-mdq.png",
    costo: "gratis"
  },
  {
    title: "Canal 10 Mar del Plata",
    description: "",
    url: "https://zencast.tv/player/canal10/",
    info: "https://www.canal10mardelplata.tv/DiasyHorarios/",
    logo: "./canal-10-mdq-2.jpg",
    costo: "gratis"
  },
  {
    title: "Crunchiroll",
    description: "",
    url: "https://www.crunchyroll.com/es/videos/anime",
    info: "https://www.youtube.com/c/CrunchyrollenEspa%C3%B1ol/videos",
    logo: "./crunchyroll.png",
    costo: "gratis o subscripcion"
  },
  {
    title: "Anime Blix",
    description: "",
    url: "https://animeblix.com/animes",
    info: "",
    logo: "./animeblix-2.png",
    costo: "gratis"
  },
  {
    title: "Anime FLV",
    description: "",
    url: "https://www3.animeflv.net/browse",
    info: "",
    logo: "./anime-flv-1.png",
    costo: "gratis"
  }, 
  {
    title: "Anime Onegai",
    description: "",
    url: "https://www.animeonegai.com/es/page/home",
    info: "",
    logo: "./anime-onegai.png",
    costo: "gratis"
  }, 
  {
    title: "LA. Cartoons",
    description: "",
    url: "https://www.lacartoons.com/",
    info: "",
    logo: "./danimados.jpg",
    costo: "gratis"
  },
  {
    title: "televisionlibre",
    description: "",
    url: "https://televisionlibre.net/es/",
    info: "",
    logo: "./tv-libre.png",
    costo: "gratis"
  },
  {
    title: "photocall.tv",
    description: "",
    url: "https://photocall.tv",
    info: "",
    logo: "./tv-ipod-icon.jpg",
    costo: "gratis"
  },
  {
    title: "Spotify",
    description: "",
    url: "https://open.spotify.com/collection/albums",
    info: "",
    logo: "./spotify.png",
    costo: "gratis o subscripcion"
  },
  {
    title: "Radios Mar del Plata",
    description: "",
    url: "https://radioarg.net/buenos-aires/mar-del-plata",
    info: "",
    logo: "./RadiosArg.Net.png",
    costo: "gratis"
  },
  {
    title: "Radios Argentinas",
    description: "",
    url: "https://radioarg.com/",
    info: "",
    logo: "./radios-argentina.png",
    costo: "gratis"
  },
  {
    title: "Conciertos Clasicos",
    description: "",
    url: "https://www.youtube.com/watch?v=RhO5OSLZjl8&list=PLGiHySZ9dpHhqQbOtN9eAL4MxRonA6KHa",
    info: "",
    logo: "./conciertos-clasicos.png",
    costo: "gratis"
  },
  {
    title: "Recitales",
    description: "",
    url: "https://www.youtube.com/watch?v=KhCNz8pw3tg&list=PL54835teYYB6TXx0j37rArlHeS2Nzi9Fw&index=6",
    info: "",
    logo: "./rock.jpg",
    costo: "gratis"
  },
  {
    title: "insta test",
    description: "",
    url: "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end",
    info: "",
    logo: "./canal8-mdq-0.png",
    costo: "gratis"
  }
];
export default channelList;
