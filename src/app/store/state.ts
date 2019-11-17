import { Card } from "src/app/models/card-model";
import { CardContent } from 'src/app/components/detailed-card-view/store/state'


export const CARDS: Array<Card> = [
    {
        cardId: 1,
        cardTitle: "Personal Info",
        cardImage: "assets/img/profile.jpg",
        cardBackgrowndPrimary: "#607d8b",
        cardBackgrowndPrimaryLight: "#8eacbb",
        cardBackgrowndPrimaryDark: "#34515e",
    },
    {
        cardId: 7,
        cardTitle: "Job Profile",
        cardImage: "assets/img/job.png",
        cardBackgrowndPrimary: "#3f51b5",
        cardBackgrowndPrimaryLight: "#757de8",
        cardBackgrowndPrimaryDark: "#002984",
    },
    {
        cardId: 2,
        cardTitle: "Angular.io",
        cardImage: "assets/img/angular.png",
        cardBackgrowndPrimary: "#e53935",
        cardBackgrowndPrimaryLight: "#ff6f60",
        cardBackgrowndPrimaryDark: "#ab000d"
    },
    {
        cardId: 3,
        cardTitle: "Android",
        cardImage: "assets/img/android.png",
        cardBackgrowndPrimary: "#43a047",
        cardBackgrowndPrimaryLight: "#00701a",
        cardBackgrowndPrimaryDark: "#ff6f60"
    },
    {
        cardId: 4,
        cardTitle: "Unity",
        cardImage: "assets/img/unity_3d.png",
        cardBackgrowndPrimary: "#757575",
        cardBackgrowndPrimaryLight: "#a4a4a4",
        cardBackgrowndPrimaryDark: "#494949"
    },
    {
        cardId: 5,
        cardTitle: "Node.js",
        cardImage: "assets/img/nodejs.png",
        cardBackgrowndPrimary: "#7cb342",
        cardBackgrowndPrimaryLight: "#aee571",
        cardBackgrowndPrimaryDark: "#4b830d"
    },
    {
        cardId: 6,
        cardTitle: "Academic degree",
        cardImage: "assets/img/university.png",
        cardBackgrowndPrimary: "#6d4c41",
        cardBackgrowndPrimaryLight: "#9c786c",
        cardBackgrowndPrimaryDark: "#40241a"
    }
]



export const CARD_FACES: Array<CardContent> = [
    {
        cardId: 1,
        content: [{
            highlights: [
                { title: { key: 'Name', value: 'Ran Tayeb' }, img: 'Name' },
                { title: { key: 'Email', value: 'tayebran@gmail.com' }, img: 'Email' },
                { title: { key: 'Status', value: 'Married' }, img: 'Status' },
                { title: { key: 'Mobile', value: '0523053392' }, img: 'Phone' }
            ],

            description: `Hi to you all
                         Im Ran Working as a Full-Stack developer at dbMotion / Allscripts Welcome to my portfolio, hope you like it,
                         for more infirmation this is the <a href='https://github.com/Tygro101/angular-cv'>source code</a>`,
            //
        }]
    },
    {
        cardId: 2,
        content: [{
            highlightsIcon: "assets/img/project-highlights/minesweeper.png",
            highlights: [
                { title: { key: 'Project Type', value: 'Gaming' }, img: 'Settings' },
                { title: { key: 'Framework', value: 'Angular ^2.0' }, img: 'Angular' },
                { title: { key: 'unit Tests', value: 'Angular ^2.0' }, img: 'Angular' }
            ],
            description: `This is the classic <a href='https://tygro101.github.io//minesweeper-angular/'>Minesweeper</a> game, with the authentic feeling, created with angular 2.0 framework,
            you can find the open source <a href='https://github.com/Tygro101/minesweeper-angular'>here</a>, the control are with the mouse, SHIFT + Mouse Click for flag marking`,
            video: "https://www.youtube.com/embed/GsRv5kUafoU",
            projectTitle: "Minesweeper"
        },
        {
            highlights: [
                { title: { key: 'Project', value: 'Chat' }, img: 'Settings' },
                { title: { key: 'Framework', value: 'Angular js' }, img: 'Angular' },
                { title: { key: 'Server', value: 'Node js' }, img: 'Node' },
                { title: { key: 'Communication', value: 'Socket.io' }, img: 'Socket.io' },
                { title: { key: 'oAuth', value: 'Facebook' }, img: 'Socket.io' },
            ],
            description: `This is a Chat site, writing with angular js framework,
            you can find the open source <a href='https://github.com/Tygro101/Chet'>here</a>, this project have alot inside, like oAuth with facebook and mongoDB, node js and socket.io and the obvise angular js`,
            video: "https://www.youtube.com/embed/eGdkUPC3GHM",
            projectTitle: "Chat"
        }
        ]
    },
    {
        cardId: 3,
        content: [
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'Application', value: 'Loaction based Reminder' }, img: 'Settings' },
                    { title: { key: 'Framework', value: 'Android' }, img: 'Angular' },
                    { title: { key: 'Script', value: 'Java' }, img: 'Angular' },
                    { title: { key: 'Map', value: 'Google Maps' }, img: 'Angular' },
                    { title: { key: 'Published on', value: 'Google Play' }, img: 'Angular' },
                ],
                description: `<a href='https://play.google.com/store/apps/details?id=com.dev.ran.dowme'>Drops</a> is android native application, the idea of the application is
                to give the user other another dimension of reminder based on location, the user can set location on google maps and set reminder on this location, when reaching this 
                location the reminder will pop`,
                //video: "https://lh3.googleusercontent.com/6B01HEhBGS1mxdBCraUObw6_vOA8MVQXx6hYVVxVuivoXzYOTNI6Dr4wz5i9kW6-PF0j=w1154-h650-rw",
                projectTitle: "Drops"
            }]
    },
    {
        cardId: 4,
        content: [ 
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'Project Type', value: 'Gaming' }, img: 'Settings' },
                    { title: { key: 'Framework', value: 'Unity' }, img: 'Angular' },
                    { title: { key: 'Script', value: 'C#' }, img: 'Angular' },
                    { title: { key: 'Published', value: 'Google Play' }, img: 'Angular' },
                ],
                description: `<a href='https://play.google.com/store/apps/details?id=com.raycha.shakeit&hl=en'>SpaceIt</a> is my latest mobile game released on android platform, 
                Using Unity 3D (it's a great framework to start and develop with, very easy to adapt and very and fast learning curve),
                the goal of the game is to shake the device as fast as you can for 5 second to charge the Spaceship, at the end of the 5 seconds the ship will launched and continue to flay until the fuel runs up,
                the game have google play table for records to see how it the fastest child in the block`,
                video: "https://www.youtube.com/embed/fOej1apChlw",
                projectTitle: "Circle Dunk"
            },
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'Project Type', value: 'Gaming' }, img: 'Settings' },
                    { title: { key: 'Framework', value: 'Unity' }, img: 'Angular' },
                    { title: { key: 'Script', value: 'C#' }, img: 'Angular' },
                    { title: { key: 'Published', value: 'Google Play' }, img: 'Angular' },
                ],
                description: `<a href='https://play.google.com/store/apps/details?id=com.Tayeb.CircleDunk&hl=en'>Circle Dunk</a>mobile game released on android platform
                Using Unity 3D (it's a great framework to start and develop with, very easy to adapt and very and fast learning curve),
                the goal of this game is to continue the ball movment and keep getting inside the circles, but there is a gravitation that pulling the ball to the center, every click on the screen
                 will give the ball power to go up and keep circling for the wanted radius`,
                video: "https://www.youtube.com/embed/N1u9I6UEclo",
                projectTitle: "Circle Dunk"
            },
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'Project Type', value: 'Gaming' }, img: 'Settings' },
                    { title: { key: 'Framework', value: 'Unity' }, img: 'Angular' },
                    { title: { key: 'Script', value: 'C#' }, img: 'Angular' },
                    { title: { key: 'Published On', value: 'Google Play' }, img: 'Angular' },
                    { title: { key: 'Gaming services', value: 'Google play services' }, img: 'Angular' },
                    { title: { key: 'Ads provider', value: 'Admob' }, img: 'Angular' }
                ],
                description: `<a href='https://play.google.com/store/apps/details?id=com.Ran.CirclBird&hl=en'>Circle Bird</a> is my first released gaming application made with Unity 3D, 
                Connecting to google play services give me the ability to add highscore board, and achievements which helps to create competitive atmosphere, the goal of the game is to go throw every ring in our way`,
                video: "https://www.youtube.com/embed/ArN72oQP_Ak",
                projectTitle: "Circle Bird"
            },
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'Project Type', value: 'Gaming' }, img: 'Settings' },
                    { title: { key: 'Framework', value: 'Unity' }, img: 'Angular' },
                    { title: { key: 'Script', value: 'C#' }, img: 'Angular' }
                ],
                description: `This is my first 3D game on Unity 3D MazeRun, this is unfinished game that was published as a crowdfunding project on 
                indiegogo, Which had a huge failure (: with no contributions, but still great game with great graphics, the game idea is like a maze, full description can be
                found inside indigogo page <a href='https://www.indiegogo.com/projects/mazerun-game-android/x/16527556#/'>MazeRun</a>`,
                video: "https://www.youtube.com/embed/IAhM4t0EuwM",
                projectTitle: "Maze Run"
            },
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'Project Type', value: 'Gaming' }, img: 'Settings' },
                    { title: { key: 'Framework', value: 'LibGDX' }, img: 'Angular' },
                    { title: { key: 'Script', value: 'Java' }, img: 'Angular' }
                ],
                description: `This is the <a href='https://www.indiegogo.com/projects/mazerun-game-android/x/16527556#/'>Classic Super Mario Game</a> 
                created while i learning game design, after getting the basics i tried to `,
                video: "https://www.youtube.com/embed/ihtjt3gllxg",
                projectTitle: "Super Mario"
            }
        ]
    },
    {
        cardId: 5,
        content: [
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'Project Type', value: 'Gaming server' }, img: 'Settings' },
                    { title: { key: 'Framework', value: 'Node js' }, img: 'Angular' },
                    { title: { key: 'Script', value: 'javascript' }, img: 'Angular' },
                    { title: { key: 'Communication', value: 'socket.io' }, img: 'Angular' }
                ],
                description: `This is a start of a poker server, should be a mobile clinet with socket connection to server, this is the <a href='https://github.com/Tygro101/GitTest'>Source</a>`,
                projectTitle: "Poker"
            }
        ]
    }, {
        cardId: 6,
        content: [
            {
                highlights: [
                ],
                //description: `Ben Gurion University - Electrical and Computer Engineering Majoring in computer science and communication engineering.`,
                projectTitle: "Ben Gurion University - Electrical and Computer Engineering Majoring in computer science and communication engineering."
            }
        ]
    },
    {
        cardId: 7,
        content: [
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'Start Date', value: '6.2018' }, img: 'Settings' },
                    { title: { key: 'Job Title', value: 'Full Stack Engineer' }, img: 'Settings' },
                    { title: { key: 'Client Side', value: 'Angular' }, img: 'Angular' },
                    { title: { key: 'Server Side', value: 'ASP.net' }, img: 'Settings' },
                    { title: { key: 'Unit Testing', value: 'Jest' }, img: 'Settings' },
                    { title: { key: 'E2E Testing', value: 'TestCafe' }, img: 'Settings' },

                ],
                projectTitle: "Currently : Full Stack @ dbMotion (Allscripts)",
                description: `In this period we started to create and managed scalable angular application from scratch using NGRX for client state manage, and most of angular abilities`,
            },
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'End Date', value: '6.2018' }, img: 'Settings' },
                    { title: { key: 'Start Date', value: '5.2015' }, img: 'Settings' },
                    { title: { key: 'Job Title', value: 'Software Developer Engineer' }, img: 'Settings' },
                    { title: { key: 'Server Side', value: 'C#' }, img: 'Settings' },
                    { title: { key: 'E2E Testing', value: 'Robot Framework, Python, C#' }, img: 'Settings' },

                ],
                projectTitle: "Software Developer Engineer @ dbMotion (Allscripts)",
                description: `Most of the work was by adding new features to or server, in this`,
            },
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'End Date', value: '5.2015' }, img: 'Settings' },
                    { title: { key: 'Start Date', value: '10.2014' }, img: 'Settings' },
                    { title: { key: 'Job Title', value: 'QA Automation Engineer' }, img: 'Settings' },
                    { title: { key: 'E2E Testing', value: 'Robot Framework, Python, C#' }, img: 'Settings' },

                ],
                projectTitle: "Software Developer Engineer @ dbMotion (Allscripts)",
                description: `In this period i created vary immersive e2e test that covers most of our development, including legacy features and new ones`,
            }
        ]
    }
]