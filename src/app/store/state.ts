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
        cardId:4,
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
                { title: {key:'Framework'    , value:'Angular 2.0'}, img: 'Angular'}
            ],
            description:`This is a <a href='https://tygro101.github.io//minesweeper-angular/'>Minesweeper</a> game, writing with angular 2.0 framework,
            you can find the open source by clicking <a href='https://github.com/Tygro101/minesweeper-angular'>here</a>`,
            video: "https://www.youtube.com/embed/GsRv5kUafoU",
            projectTitle: "Minesweeper"
        },
        {
            highlights:[
                { title: {key:'Proejct Type'   , value:'Chat'}, img: 'Settings'},
                { title: {key:'Framework'    , value:'Angular js'}, img: 'Angular'},
                { title: {key:'Server'    , value:'Node js'}, img: 'Node'},
                { title: {key:'Communication'    , value:'Socket.io'}, img: 'Socket.io'},
                { title: {key:'oAuth'   , value:'Facebook'}, img: 'Socket.io'},
            ],
            description:`This is a Chat site, writing with angular js framework,
            you can find the open source by clicking <a href='https://github.com/Tygro101/Chet'>here</a>`,
            video: "https://www.youtube.com/embed/eGdkUPC3GHM",
            projectTitle: "Chat"
        }
        ]
    },
    { 
        cardId:4,
        content:[
            {
                highlightsIcon:"assets/img/project-highlights/minesweeper.png",
                highlights:[
                    { title: {key:'Proejct Type'   , value:'Gaming'}, img: 'Settings'},
                    { title: {key:'Framework'    , value:'Unity'}, img: 'Angular'},
                    { title: {key:'Script'    , value:'C#'}, img: 'Angular'},
                    { title: {key:'Published'    , value:'Google Play'}, img: 'Angular'},
                ],
                description:`<a href='https://play.google.com/store/apps/details?id=com.Tayeb.CircleDunk&hl=en'>Circle Dunk</a> is my latest mobile game released, 
                from day one, when i got a pc (Age 17) i know that i will make games in the future, Unity 3D is a great framework to start and develop with, very easy to adapt and very and fast learning curve`,
                video: "https://www.youtube.com/embed/N1u9I6UEclo",
                projectTitle: "Circle Dunk"
            },
            {
                highlightsIcon:"assets/img/project-highlights/minesweeper.png",
                highlights:[
                    { title: {key:'Proejct Type'   , value:'Gaming'}, img: 'Settings'},
                    { title: {key:'Framework'    , value:'Unity'}, img: 'Angular'},
                    { title: {key:'Script'    , value:'C#'}, img: 'Angular'},
                    { title: {key:'Published On'    , value:'Google Play'}, img: 'Angular'},
                    { title: {key:'Gaming services'    , value:'Google paly services'}, img: 'Angular'},
                    { title: {key:'Ads provider'    , value:'Admob'}, img: 'Angular'}
                ],
                description:`<a href='https://play.google.com/store/apps/details?id=com.Ran.CirclBird&hl=en'>Circle Bird</a> is my first released gaming application made with Unity 3D, 
                Connecting to google play services give me the ability to add highscore board, and achievements which helps to create compatitive atmosphere`,
                video: "https://www.youtube.com/embed/ArN72oQP_Ak",
                projectTitle: "Circle Bird"
            },
            {
                highlightsIcon:"assets/img/project-highlights/minesweeper.png",
                highlights:[
                    { title: {key:'Proejct Type'   , value:'Gaming'}, img: 'Settings'},
                    { title: {key:'Framework'    , value:'Unity'}, img: 'Angular'},
                    { title: {key:'Script'    , value:'C#'}, img: 'Angular'},
                    { title: {key:'Published On'    , value:'Google Play'}, img: 'Angular'},
                    { title: {key:'Gaming services'    , value:'Google paly services'}, img: 'Angular'},
                    { title: {key:'Ads provider'    , value:'Admob'}, img: 'Angular'}
                ],
                description:`This is my first 3D game on Unity 3D <a href='https://www.indiegogo.com/projects/mazerun-game-android/x/16527556#/'>MazeRun</a>, this is unfinished game that was published as a crowdfunding project on 
                indiegogo, Which had a huge falure (: with no contributions, but still great game with great graphics`,
                video: "https://www.youtube.com/embed/IAhM4t0EuwM",
                projectTitle: "Maze Run"
            }
        ]
    },
    { 
        cardId:4,
    },
    { 
        cardId:5,
    }
]