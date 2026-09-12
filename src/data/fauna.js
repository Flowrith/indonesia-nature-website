import komododragon from "../assets/komodo-dragon.png";
import sumatrantiger from "../assets/sumatran-tiger.png";
import jalakbali from "../assets/jalak-bali.png"

const fauna = [
  {
    
    id: 1,
    bgClass: "komodo-bg",
    title: "KOMODO DRAGON",
    image: komododragon,
    subtitle : "(PULAU KOMODO, NTT)",
    link: "/komodo-dragon",
    button: "GET EDUCATION!"

  },
  {

    id: 2,
    bgClass: "tiger-bg",
    title: "SUMATRAN TIGER",
    image: sumatrantiger,
    subtitle : "(PULAU SUMATERA)",
    link: "/sumatran-tiger",
    button: "GET EDUCATION!"

  },
  {
  id: 3,
  bgClass: "jalak-bg",
  title: "Jalak Bali",
  image: jalakbali,
  subtitle : "(PULAU BALI)" ,
  link : "/jalak-bali",
  button : "GET EDUCATION!"
  }
];

export default fauna

