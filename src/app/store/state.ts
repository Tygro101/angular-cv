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
                { title: {key:'Status'  , value:'Married'}, img: 'age icon'},
                { title: {key:'Mobile'   , value:'0523053392'}, img: 'age icon'}  
            ],
            description:"Hi to you all, and this is a short discription that i should fill up",
            video:"https://www.youtube.com/embed/IAhM4t0EuwM"
        }]
    },
    { 
        cardId:2,
        content:[{
            highlights:[
                { title: {key:'Name'    , value:'Ran Tayeb'}, img: 'Name'},    
                { title: {key:'Email'   , value:'tayebran@gmail.com'}, img: 'Email'},
                { title: {key:'Status'  , value:'Married'}, img: 'age icon'},
                { title: {key:'Mobile'   , value:'0523053392'}, img: 'age icon'}  
            ],
            description:"This <a href='https://tygro101.github.io//minesweeper-angular/'>Project</a is Minesweeper game made with angular 2",
            video:"https://www.youtube.com/embed/IAhM4t0EuwM"
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