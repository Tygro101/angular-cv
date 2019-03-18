import { Card } from "src/app/models/card-model";
import { CardContent } from 'src/app/components/detailed-card-view/store/state'


export const CARDS: Array<Card> = [
    {
        cardId:1,
        cardTitle: "Personal Info",
        cardImage: "https://i.pinimg.com/564x/4b/b2/99/4bb29980c0872588bee4008974dc5578.jpg",
        cardBackgrowndPrimary:  "#607d8b",
        cardBackgrowndPrimaryLight: "#8eacbb",
        cardBackgrowndPrimaryDark: "#34515e",
    },
    {
        cardId:2,
        cardTitle: "Angular.io",
        cardImage: "https://i.pinimg.com/originals/1a/63/2d/1a632d2b39f3275752f2c4b3c73477a3.png",
        cardBackgrowndPrimary:  "#e53935", 
        cardBackgrowndPrimaryLight: "#ff6f60",
        cardBackgrowndPrimaryDark: "#ab000d"
    },
    {
        cardId:3,
        cardTitle: "Android",
        cardImage: "https://i.pinimg.com/originals/74/64/22/74642234d90c3ec9d8020f5d02a4a701.png",
        cardBackgrowndPrimary:  "#43a047", 
        cardBackgrowndPrimaryLight: "#00701a",
        cardBackgrowndPrimaryDark: "#ff6f60"
    },
    {
        cardId:3,
        cardTitle: "Unity",
        cardImage: "https://i.pinimg.com/originals/82/d9/85/82d985080cb3295931db2efcd35d37fc.png",
        cardBackgrowndPrimary:  "#757575",
        cardBackgrowndPrimaryLight: "#a4a4a4",
        cardBackgrowndPrimaryDark: "#494949"
    },
    {
        cardId:4,
        cardTitle: "Node.js",
        cardImage: "https://i.pinimg.com/originals/81/21/1c/81211c6b6119814f72fb2189a9abd42b.png",
        cardBackgrowndPrimary:  "#7cb342",
        cardBackgrowndPrimaryLight: "#aee571",
        cardBackgrowndPrimaryDark: "#4b830d"
    },
    {
        cardId:5,
        cardTitle: "Academic degree",
        cardImage: "https://i.pinimg.com/originals/ed/84/0e/ed840e7d19dd4450f1ff990f878ef5a0.png",
        cardBackgrowndPrimary:  "#6d4c41", 
        cardBackgrowndPrimaryLight: "#9c786c",
        cardBackgrowndPrimaryDark: "#40241a"
    }
]



export const CARD_FACES:Array<CardContent> = [
    { 
        cardId:1,
        content:{
            highlights:[
                { title: {key:'Name'    , value:'Ran Tayeb'}, image: 'Name icon'},    
                { title: {key:'Email'   , value:'tayebran@gmail.com'}, image: 'age icon'},
                { title: {key:'Status'  , value:'Married'}, image: 'age icon'},
                { title: {key:'Mobile'   , value:'0523053392'}, image: 'age icon'}  
            ],
            description:"Hi, this is a short description of my my my mydsf djsdf ksdf afhsdlk fssd fkldf klsdhfk sddfk sdf kds"
        }
    },
    { 
        cardId:2,
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