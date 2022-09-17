import RhodosSignature from "../../public/signatures/RhodosSignature.svg";
import WillSignature from "../../public/signatures/WillSignature.svg";
import KevalinSignature from "../../public/signatures/KevalinSignature.png";
import MaxSignature from "../../public/signatures/MaxSignature.png";
import OwenSignature from "../../public/signatures/OwenSignature.png";
import JuanDavidSignature from "../../public/signatures/JuanDavidSignature.png";

import ChristianPicture from "../../public/profile-pictures/glassy.jpg";
import RhodosPicture from "../../public/profile-pictures/RhodosPFP.png";
import MiguelPicture from "../../public/profile-pictures/Miguel.jpg";
import AviPicture from "../../public/profile-pictures/Avi.jpg";
import JuanDavidPicture from "../../public/profile-pictures/JuanDavid.jpg";
import WillPicture from "../../public/profile-pictures/PFP.png";
import KevalinPicture from "../../public/profile-pictures/Kevalin.jpg";
import ByeongjunPicture from "../../public/profile-pictures/Byeongjun.jpeg";
import LucasPicture from "../../public/profile-pictures/Lucas.jpg";
import KirillPicture from "../../public/profile-pictures/Kirill.jpg";
import SagePicture from "../../public/profile-pictures/Sage.jpg";
import MaxPicture from "../../public/profile-pictures/Max.jpg";
import ParkerPicture from "../../public/profile-pictures/parker.jpg";
import SuryaPicture from "../../public/profile-pictures/Surya.jpg";
import AriPicture from "../../public/profile-pictures/Ari.jpg";
import AryanPicture from "../../public/profile-pictures/Aryan.jpeg";
import VirajPicture from "../../public/profile-pictures/Viraj.jpeg";
import StevenPicture from "../../public/profile-pictures/Steven.jpg";
import RahulPicture from "../../public/profile-pictures/Rahul.jpg";
import BenPicture from "../../public/profile-pictures/Ben.jpeg";
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
import TrumanPicture from "../../public/profile-pictures/Truman.jpeg";
import JackPicture from "../../public/profile-pictures/Jack.jpg";
import AlexaPicture from "../../public/profile-pictures/Alexa.jpg";
import JustinaPicture from "../../public/profile-pictures/Justina.jpg";
import KaitoPicture from "../../public/profile-pictures/Kaito.jpg";
import RahulCPicture from "../../public/profile-pictures/RahulC.jpg";
import AmiPicture from "../../public/profile-pictures/Ami.jpg";
import SauravPicture from "../../public/profile-pictures/Saurav.jpg";
import JimmyPicture from "../../public/profile-pictures/Jimmy.jpg";
import dcbuilder from "../../public/profile-pictures/dcbuilder.jpg";
import Ishaan from "../../public/profile-pictures/Ishaan.jpg";
import Vedant from "../../public/profile-pictures/Vedant.jpg";
import Merkle from "../../public/profile-pictures/Merkle.jpg";
import Etasha from "../../public/profile-pictures/Etasha.jpg";
import KevinZhu from "../../public/profile-pictures/KevinZhu.jpg";
import Priya from "../../public/profile-pictures/Priya.jpg";
import Sigil from "../../public/profile-pictures/Sigil.jpg";
import GabrielR from "../../public/profile-pictures/GabrielR.jpg";
import Jae from "../../public/profile-pictures/Jae.jpg";
import JZ from "../../public/profile-pictures/JZ.jpg";
import Carol from "../../public/profile-pictures/Carol.jpg";

import { StaticImageData } from "next/image";

export type Signatures = {
  image: StaticImageData;
  name: string;
  subject: string;
  age: string;
  location: string;
  signature?: any;
  gold: boolean;
  link?: string;
};

export const signatures: Array<Signatures> = [
  {
    image: RhodosPicture,
    name: "Rhodos",
    subject: "Founding Colossus",
    age: "??",
    location: "????? 🏴",
    signature: RhodosSignature,
    gold: true,
  },
  {
    image: MiguelPicture,
    name: "Miguel Piedrafita",
    subject: "Web3 & Crypto",
    age: "20",
    location: "Nowhere 🇦🇶",
    gold: false,
  },
  {
    image: AviPicture,
    name: "Avi Schiffman",
    subject: "Internet Activism",
    age: "19",
    location: "Seattle 🇺🇸",
    gold: false,
  },
  {
    image: JuanDavidPicture,
    name: "Juan David Campelargo",
    subject: "Learning & Flight",
    age: "19",
    location: "Venezuela 🇺🇸",
    signature: JuanDavidSignature,
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
    age: "17",
    location: "San Francisco 🇺🇸",
    signature: KevalinSignature,
    gold: false,
  },
  {
    image: Etasha,
    name: "Etasha Donthi",
    subject: "Tech for Good",
    age: "17",
    location: "New Jersey 🇺🇸",
    gold: false,
  },
  {
    image: ByeongjunPicture,
    name: "Byeongjun Moon",
    subject: "DAOs & Governance",
    age: "18",
    location: "Westwood 🇺🇸",
    gold: false,
  },
  {
    image: LucasPicture,
    name: "Lucas Chu",
    subject: "DAO Finance",
    age: "20",
    location: "New York 🇺🇸",
    gold: false,
  },
  {
    image: KirillPicture,
    name: "Kirill Avery",
    subject: "Dec. Identity",
    age: "??",
    location: "San Francisco 🇺🇸",
    gold: false,
  },
  {
    image: SagePicture,
    name: "Sage Khanuja",
    subject: "Health",
    age: "??",
    location: "Seattle 🇺🇸",

    gold: false,
  },
  {
    image: NatashaPicture,
    name: "Natasha Asmi",
    subject: "Decentralized Science",
    age: "19",
    location: "Ann Arbor 🇺🇸",
    gold: false,
  },
  {
    image: MaxPicture,
    name: "Max Keenan",
    subject: "Productivity",
    age: "??",
    location: "Seattle 🇺🇸",
    signature: MaxSignature,
    gold: false,
  },
  {
    image: ParkerPicture,
    name: "Parker Henderson",
    subject: "Design",
    age: "??",
    location: "Nowhere 🇦🇶",
    gold: false,
  },
  {
    image: SuryaPicture,
    name: "Surya Dantuluri",
    subject: "On-Chain Chaos",
    age: "??",
    location: "San Francisco 🇺🇸",

    gold: false,
  },
  {
    image: EmmaPicture,
    name: "Emma Salinas",
    subject: "Something New",
    age: "??",
    location: "San Francisco 🇺🇸",
    gold: false,
  },
  {
    image: AriPicture,
    name: "Ari Dutilh",
    subject: "Community",
    age: "17",
    location: "Connecticut 🇺🇸",
    gold: false,
  },
  {
    image: AryanPicture,
    name: "Aryan Sharma",
    subject: "Web3 Data",
    age: "17",
    location: "Nowhere 🇦🇶",

    gold: false,
  },
  {
    image: AlexaPicture,
    name: "Alexa Kayman",
    subject: "Teen Investing",
    age: "16",
    location: "New York City 🇺🇸",
    gold: false,
  },
  {
    image: VirajPicture,
    name: "Viraj Chhajed",
    subject: "On-Chain Bot Detection",
    age: "18",
    location: "Westwood 🇺🇸",
    gold: false,
  },
  {
    image: StevenPicture,
    name: "Steven Lu",
    subject: "Next-gen Accelerators",
    age: "20",
    location: "Seattle 🇺🇸",
    gold: false,
  },
  {
    image: RahulPicture,
    name: "Rahul Nandakumar",
    subject: "DAOs & Community",
    age: "??",
    location: "New Jersey 🇺🇸",
    gold: false,
  },
  {
    image: BenPicture,
    name: "Benjamin Lim",
    subject: "Unset",
    age: "??",
    location: "Nowhere 🇦🇶",
    gold: false,
  },
  {
    image: ChristianPicture,
    name: "Christian Glassiognon",
    subject: "Development",
    age: "??",
    location: "San Jose 🇺🇸",
    gold: false,
  },
  {
    image: JustinaPicture,
    name: "Justina Chua",
    subject: "Token-Gated Commerce",
    age: "??",
    location: "Nowhere 🇦🇶",
    gold: false,
  },
  {
    image: BereketPicture,
    name: "Bereket Semagn",
    subject: "Development",
    age: "13",
    location: "Toronto 🇨🇦",
    gold: false,
  },
  {
    image: OmoPicture,
    name: "Omoruyi Atekha",
    subject: "Coordination",
    age: "??",
    location: "San Francisco 🇺🇸",
    gold: false,
  },
  {
    image: AmirPicture,
    name: "Amir Bolous",
    subject: "Crypto",
    age: "??",
    location: "Atlanta 🇺🇸",
    gold: false,
  },
  {
    image: OwenPicture,
    name: "Owen Roe",
    subject: "Esports",
    age: "19",
    location: "Nowhere 🇦🇶",
    signature: OwenSignature,
    gold: false,
  },
  {
    image: EricPicture,
    name: "Eric Button",
    subject: "Fintech",
    age: "??",
    location: "New York 🇺🇸",
    gold: false,
  },
  {
    image: Carol,
    name: "Carol Magalhaes",
    subject: "Bio / Life Extension",
    age: "23",
    location: "California / NYC 🇺🇸",
    gold: false,
  },
  {
    image: SamayPicture,
    name: "Samay Shamdasani",
    subject: "Unlocking Potential",
    age: "??",
    location: "Ann Arbor 🇺🇸",
    gold: false,
  },
  {
    image: NathanPicture,
    name: "Nathan Newman",
    subject: "Deep Tech",
    age: "19",
    location: "Ann Arbor 🇺🇸",
    gold: false,
  },
  {
    image: HongPicture,
    name: "Daniel Hong",
    subject: "Blockchain",
    age: "21",
    location: "Nowhere 🇦🇶",
    gold: false,
  },
  {
    image: RahulCPicture,
    name: "Rahul Chhabra",
    subject: "Social Fintech",
    age: "24",
    location: "India 🇮🇳",
    gold: false,
  },
  {
    image: DonahuePicture,
    name: "Nick Donahue",
    subject: "Housing",
    age: "??",
    location: "Nowhere 🇦🇶",
    gold: false,
  },
  {
    image: TrumanPicture,
    name: "Truman Sacks",
    subject: "Resell Economy",
    age: "??",
    location: "Los Angeles 🇺🇸",
    gold: false,
  },
  {
    image: Priya,
    name: "Priya Ganguly",
    subject: "Smart Contracts, iOS, zk",
    age: "23",
    location: "California / NYC 🇺🇸",
    gold: false,
  },
  {
    image: JackPicture,
    name: "Jack O'Regan Kenney",
    subject: "Stealth / Accelerators",
    age: "19",
    location: "Dublin 🇮🇪",
    gold: false,
  },
  {
    image: AmiPicture,
    name: "Ami Yoshimura",
    subject: "Builder Communities",
    age: "??",
    location: "New York City 🇺🇸",
    gold: false,
  },
  {
    image: KaitoPicture,
    name: "Kaito Cunningham",
    subject: "DAO Finance",
    age: "??",
    location: "New York City 🇺🇸",
    gold: false,
  },
  {
    image: AnPicture,
    name: "An Vu",
    subject: "Education & Communities",
    age: "??",
    location: "Nowhere 🇦🇶",
    gold: false,
  },
  {
    image: SauravPicture,
    name: "Saurav Kumar",
    subject: "AI Research",
    age: "18",
    location: "San Francisco 🇺🇸",
    gold: false,
  },
  {
    image: JimmyPicture,
    name: "Jimmy Hsu",
    subject: "Creator Banking",
    age: "26",
    location: "Los Angeles 🇺🇸",
    gold: false,
  },
  {
    image: dcbuilder,
    name: "dcbuilder",
    subject: "Ethereum",
    age: "21",
    location: "Quadratic Lands 🇺🇸",
    gold: false,
  },
  {
    image: Ishaan,
    name: "Ishaan Hiranandani",
    subject: "Blockchain Research",
    age: "22",
    location: "New York 🇺🇸",
    gold: false,
  },
  {
    image: Vedant,
    name: "Vedant Karia",
    subject: "Crypto Gaming",
    age: "20",
    location: "India 🇮🇳",
    gold: false,
  },
  {
    image: Merkle,
    name: "Merkle",
    subject: "Crypto Development",
    age: "20",
    location: "San Francisco 🇺🇸",
    gold: false,
  },

  {
    image: KevinZhu,
    name: "Kevin Zhu",
    subject: "Developer Tools",
    age: "23",
    location: "Los Angeles 🇺🇸",
    gold: false,
  },

  {
    image: Sigil,
    name: "Sigil Wen",
    subject: "PRMs",
    age: "19",
    location: "San Francisco 🇺🇸",
    gold: false,
  },
  {
    image: GabrielR,
    name: "Gabriel Romualdo",
    subject: "Software, ML Research",
    age: "17",
    location: "California 🇺🇸",
    gold: false,
  },
  {
    image: JZ,
    name: "Justin Zheng",
    subject: "Digital Economy",
    age: "21",
    location: "San Francisco 🇺🇸",
    gold: false,
  },

  {
    image: Jae,
    name: "Jae Gwan Park",
    subject: "AGI, Climate, Deep Tech",
    age: "20",
    location: "Toronto 🇨🇦",
    gold: false,
  },
];

// jimmy andrew dcbuilder ishaan veekay merkle etasha kevin priya sigil gabriel jz munam carol jae
// jimmy dcbuilder ishaan veekay merkle etasha kevin priya sigil gabriel jz munam carol jae
