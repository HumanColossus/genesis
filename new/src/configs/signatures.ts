import Unsigned from "../../public/signatures/UNSIGNED.svg";
import RhodosSignature from "../../public/signatures/RhodosSignature.svg";
import WillSignature from "../../public/signatures/WillSignature.svg";
import ChristianPicture from "../../public/profile-pictures/Christian.jpg";
import RhodosPicture from "../../public/profile-pictures/RhodosPFP.png";
import MiguelPicture from "../../public/profile-pictures/Miguel.jpg";
import AviPicture from "../../public/profile-pictures/Avi.jpg";
import JuanDavidPicture from "../../public/profile-pictures/JuanDavid.jpg";
import WillPicture from "../../public/profile-pictures/PFP.png";
import KevalinPicture from "../../public/profile-pictures/Kevalin.jpg";
import ByeongjunPicture from "../../public/profile-pictures/Byeongjun.jpg";
import LucasPicture from "../../public/profile-pictures/Lucas.jpg";
import KirillPicture from "../../public/profile-pictures/Kirill.jpg";
import SagePicture from "../../public/profile-pictures/Sage.jpg";
import MaxPicture from "../../public/profile-pictures/Max.jpg";
import ParkerPicture from "../../public/profile-pictures/parker.jpg";
import SuryaPicture from "../../public/profile-pictures/Surya.jpg";
import AriPicture from "../../public/profile-pictures/Ari.jpg";
import AryanPicture from "../../public/profile-pictures/Aryan.jpg";
import VirajPicture from "../../public/profile-pictures/Viraj.jpg";
import StevenPicture from "../../public/profile-pictures/Steven.jpg";
import RahulPicture from "../../public/profile-pictures/Rahul.jpg";
import BenPicture from "../../public/profile-pictures/Ben.jpg";
import AmirPicture from "../../public/profile-pictures/Amir.jpg";
import OwenPicture from "../../public/profile-pictures/Owen.jpg";
import EricPicture from "../../public/profile-pictures/Eric.jpg";
import BereketPicture from "../../public/profile-pictures/Bereket.jpg";
import HongPicture from "../../public/profile-pictures/Hong.jpg";
import SamayPicture from "../../public/profile-pictures/Samay.jpg";
import OmoPicture from "../../public/profile-pictures/Omo.jpg";
import AnPicture from "../../public/profile-pictures/An.jpg";
import EmmaPicture from "../../public/profile-pictures/Emma.jpg";
import NathanPicture from "../../public/profile-pictures/Nathan.jpg";
import NatashaPicture from "../../public/profile-pictures/Natasha.jpg";
import DonahuePicture from "../../public/profile-pictures/Donahue.jpg";
import { StaticImageData } from "next/image";

type Signatures = {
  image: StaticImageData;
  name: string;
  subject: string;
  age: string;
  location: string;
  signature: any;
  gold: boolean;
};

function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export const signatures: Array<Signatures> = [
  {
    image: RhodosPicture,
    name: "Rhodos",
    subject: "Founding Colossus",
    age: "??",
    location: "Nowhere 🇦🇶",
    signature: RhodosSignature,
    gold: true,
  },
  {
    image: MiguelPicture,
    name: "Miguel Piedrafita",
    subject: "Web3 & Crypto",
    age: "20",
    location: "Nowhere 🇦🇶",
    signature: Unsigned,
    gold: false,
  },
  {
    image: AviPicture,
    name: "Avi Schiffman",
    subject: "Internet Activism",
    age: "19",
    location: "Nowhere 🇦🇶",
    signature: Unsigned,
    gold: false,
  },
  {
    image: JuanDavidPicture,
    name: "Juan David Campelargo",
    subject: "Learning & Flight",
    age: "??",
    location: "Chicago 🇺🇸",
    signature: Unsigned,
    gold: false,
  },
  {
    image: WillPicture,
    name: "Will DePue",
    subject: "Community Analytics",
    age: "19",
    location: "Los Angeles 🇺🇸",
    signature: WillSignature,
    gold: false,
  },
  {
    image: KevalinPicture,
    name: "Kevalin Ketcham",
    subject: "Crypto",
    age: "??",
    location: "San Francisco 🇺🇸",
    signature: Unsigned,
    gold: false,
  },
  {
    image: ByeongjunPicture,
    name: "Byeongjun Moon",
    subject: "DAOs & Governance",
    age: "??",
    location: "Westwood 🇺🇸",
    signature: Unsigned,
    gold: false,
  },
  {
    image: LucasPicture,
    name: "Lucas Chu",
    subject: "DAO Finance",
    age: "??",
    location: "New York 🇺🇸",
    signature: Unsigned,
    gold: false,
  },
  {
    image: KirillPicture,
    name: "Kirill Avery",
    subject: "Dec. Identity",
    age: "??",
    location: "San Francisco 🇺🇸",
    signature: Unsigned,
    gold: false,
  },
  {
    image: SagePicture,
    name: "Sage Khanuja",
    subject: "Health",
    age: "??",
    location: "Seattle 🇺🇸",
    signature: Unsigned,
    gold: false,
  },
  { image: NatashaPicture, name: "Natasha Asmi", subject: "Decentralized Science", age: "??", location: "Ann Arbor 🇺🇸", signature: Unsigned, gold: false },

  {
    image: MaxPicture,
    name: "Max Keenan",
    subject: "Productivity",
    age: "??",
    location: "Seattle 🇺🇸",
    signature: Unsigned,
    gold: false,
  },
  {
    image: ParkerPicture,
    name: "Parker Henderson",
    subject: "Unset",
    age: "??",
    location: "Nowhere 🇦🇶",
    signature: Unsigned,
    gold: false,
  },
  {
    image: SuryaPicture,
    name: "Surya Dantuluri",
    subject: "On-Chain Chaos",
    age: "??",
    location: "San Francisco 🇺🇸",
    signature: Unsigned,
    gold: false,
  },
  { image: EmmaPicture, name: "Emma Salinas", subject: "Something New", age: "??", location: "San Francisco 🇺🇸", signature: Unsigned, gold: false },
  {
    image: AriPicture,
    name: "Ari Dutilh",
    subject: "Community",
    age: "17",
    location: "Connecticut 🇺🇸",
    signature: Unsigned,
    gold: false,
  },
  {
    image: AryanPicture,
    name: "Aryan Sharma",
    subject: "Web3 Data",
    age: "??",
    location: "Nowhere 🇦🇶",
    signature: Unsigned,
    gold: false,
  },
  {
    image: VirajPicture,
    name: "Viraj Chhajed",
    subject: "On-Chain Bot Detection",
    age: "??",
    location: "Westwood 🇺🇸",
    signature: Unsigned,
    gold: false,
  },
  {
    image: StevenPicture,
    name: "Steven Lu",
    subject: "Next-gen Accelerators",
    age: "??",
    location: "Seattle 🇺🇸",
    signature: Unsigned,
    gold: false,
  },
  {
    image: RahulPicture,
    name: "Rahul Nandakumar",
    subject: "DAOs & Community",
    age: "??",
    location: "New Jersey 🇺🇸",
    signature: Unsigned,
    gold: false,
  },
  {
    image: BenPicture,
    name: "Benjamin Lim",
    subject: "Unset",
    age: "??",
    location: "Nowhere 🇦🇶",
    signature: Unsigned,
    gold: false,
  },
  {
    image: ChristianPicture,
    name: "Christian Glassiognon",
    subject: "Unset",
    age: "??",
    location: "Nowhere 🇦🇶",
    signature: Unsigned,
    gold: false,
  },
  { image: AmirPicture, name: "Amir Bolous", subject: "Crypto", age: "??", location: "Atlanta 🇺🇸", signature: Unsigned, gold: false },
  { image: OwenPicture, name: "Owen Roe", subject: "Esports", age: "19", location: "Nowhere 🇦🇶", signature: Unsigned, gold: false },
  { image: EricPicture, name: "Eric Button", subject: "Fintech", age: "??", location: "New York 🇺🇸", signature: Unsigned, gold: false },
  { image: BereketPicture, name: "Bereket Semagn", subject: "Development", age: "13", location: "Toronto 🇨🇦", signature: Unsigned, gold: false },
  { image: SamayPicture, name: "Samay Shamdasani", subject: "Unlocking Potential", age: "??", location: "Ann Arbor 🇺🇸", signature: Unsigned, gold: false },
  { image: NathanPicture, name: "Nathan Newman", subject: "Unlocking Potential", age: "??", location: "Ann Arbor 🇺🇸", signature: Unsigned, gold: false },
  { image: HongPicture, name: "Daniel Hong", subject: "Blockchain", age: "??", location: "Nowhere 🇦🇶", signature: Unsigned, gold: false },
  { image: OmoPicture, name: "Omoruyi Atekha", subject: "Coordination", age: "??", location: "San Francisco 🇺🇸", signature: Unsigned, gold: false },
  { image: DonahuePicture, name: "Nick Donahue", subject: "Housing", age: "??", location: "Nowhere 🇦🇶", signature: Unsigned, gold: false },
  { image: AnPicture, name: "An Vu", subject: "Education & Communities", age: "??", location: "Nowhere 🇦🇶", signature: Unsigned, gold: false },
];
