import { Card } from "src/app/models/card-model";
import { CardContent } from 'src/app/components/detailed-card-view/store/state'


export const CARDS: Array<Card> = [
    {
        cardId:1,
        cardTitle: "Personal Info",
        cardImage: "assets/img/profile.jpg",
        cardBackgrowndPrimary:  "#607d8b",
        cardBackgrowndPrimaryLight: "#8eacbb",
        cardBackgrowndPrimaryDark: "#34515e",
    },
    {
        cardId:2,
        cardTitle: "Angular.io",
        cardImage: "assets/img/angular.png",
        cardBackgrowndPrimary:  "#e53935", 
        cardBackgrowndPrimaryLight: "#ff6f60",
        cardBackgrowndPrimaryDark: "#ab000d"
    },
    {
        cardId:3,
        cardTitle: "Android",
        cardImage: "assets/img/android.png",
        cardBackgrowndPrimary:  "#43a047", 
        cardBackgrowndPrimaryLight: "#00701a",
        cardBackgrowndPrimaryDark: "#ff6f60"
    },
    {
        cardId:3,
        cardTitle: "Unity",
        cardImage: "assets/img/unity_3d.png",
        cardBackgrowndPrimary:  "#757575",
        cardBackgrowndPrimaryLight: "#a4a4a4",
        cardBackgrowndPrimaryDark: "#494949"
    },
    {
        cardId:4,
        cardTitle: "Node.js",
        cardImage: "assets/img/nodejs.png",
        cardBackgrowndPrimary:  "#7cb342",
        cardBackgrowndPrimaryLight: "#aee571",
        cardBackgrowndPrimaryDark: "#4b830d"
    },
    {
        cardId:5,
        cardTitle: "Academic degree",
        cardImage: "assets/img/university.png",
        cardBackgrowndPrimary:  "#6d4c41", 
        cardBackgrowndPrimaryLight: "#9c786c",
        cardBackgrowndPrimaryDark: "#40241a"
    }
]



export const CARD_FACES:Array<CardContent> = [
    { 
        cardId:1,
        content:[{
            highlights:[
                { title: {key:'Name'    , value:'Ran Tayeb'}, img: 'Name'},    
                { title: {key:'Email'   , value:'tayebran@gmail.com'}, img: 'Email'},
                { title: {key:'Status'  , value:'Married'}, img: 'Status'},
                { title: {key:'Mobile'   , value:'0523053392'}, img: 'Phone'}  
            ],
            
            description:`Hi to you all
                         Im Ran Working as a Full-Stack developer at dbMotion / Allscripts Welcome to my portfolio, hope you like it.`,
            //video:"https://www.youtube.com/embed/IAhM4t0EuwM"
        }]
    },
    { 
        cardId:2,
        content:[{
            highlightsIcon:"assets/img/project-highlights/minesweeper.png",
            highlights:[
                { title: {key:'Proejct Type'   , value:'Gaming'}, img: 'Settings'},
                { title: {key:'Framwork'    , value:'Angular 2.0'}, img: 'Angular'}
            ],
            description:`This is a <a href='https://tygro101.github.io//minesweeper-angular/'>Minesweeper</a> game, writting with angular 2.0 framwork,
            you can find the open soruce by clicking <a href='https://github.com/Tygro101/minesweeper-angular'>here</a>`,
            video: "https://www.youtube.com/embed/GsRv5kUafoU",
            projectTitle: "Minesweeper"
        }]
    },
    { 
        cardId:3,
    },
    { 
        cardId:4,
    },
    { 
        cardId:5,
    }
]