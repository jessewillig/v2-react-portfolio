import budgetTrackerPic from "../images/portfolio/budget.png";
import fitnessTrackerPic1 from "../images/portfolio/fitnesstracker.png";
import fitnessTrackerPic2 from "../images/portfolio/fitnesstracker2.png";
import dankReviewsPic1 from "../images/portfolio/dank-page1.jpg";
import dankReviewsPic2 from "../images/portfolio/dank-page2.jpg";
import noteTakerPic from "../images/portfolio/notetaker.png";
import cureForBoredomPic1 from "../images/portfolio/cure-page1.png";
import cureForBoredomPic2 from "../images/portfolio/cure-page2.png";
import weatherAppPic from "../images/portfolio/weatherapp.png";

function ProjectCard (title, about, imageUrl, siteUrl, repoUrl) {
    this.title = title;
    this.about = about;
    this.imageUrl = imageUrl;
    this.imageUrl = imageUrl;
    this.siteUrl = siteUrl;
    this.repoUrl = repoUrl;
};

const budgetTrackerCard = new ProjectCard(
    "Budget Tracker",
    "An application designed to track your budget online and offline. Add and subtract from your total to create an accurate number and track your spending habits! For this application I used Node.js, Express, Compression, Mongoose, Morgan and Lite-Server.",
    budgetTrackerPic,
    "https://glacial-cliffs-36068.herokuapp.com/",
    "https://github.com/jessewillig/Budget-Tracker"
);

const fitnessTrackerCard = new ProjectCard(
    "Fitness Tracker",
    "With this fitness tracker the user can create custom workout plans and track them! This application utilizes Node JS, Express, and Mongoose DB. This app has full Create, Read and Update functionality for all entered info. For this application I used JQery, Node.js and Mongoose.",
    fitnessTrackerPic1,
    fitnessTrackerPic2,
    "https://limitless-meadow-66832.herokuapp.com/",
    "https://github.com/jessewillig/fitness-tracker"
);

const dankReviewsCard = new ProjectCard(
    "Dank Reviews",
    "Dank Reviews was designed to provide the user the opportunity to look at memes and review them! The user has the opportunity to view memes and their reviews and leave reviews on memes! For this project we used Bootstrap, Google Fonts, Heroku, Node.js, MySQL, NPM Packages - reddit.images, sequelize, bcrypt, dotenv, MySQL2, express handlebars & session.",
    dankReviewsPic1,
    dankReviewsPic2,
    "https://bootcamp-project2-uw.herokuapp.com",
    "https://github.com/jessewillig/Dank-Reviews"
);

const noteTakerCard = new ProjectCard(
    "Note Taker",
    "The reason for developing this app is to easily add, edit and even delete unwanted notes. Keep your TO-DOs organized and ditch the sticky note and pen because, who has a pen when you need one? For this project I used Node.js, NPM packages express and UUID.",
    noteTakerPic,
    "https://jw-note-taker.herokuapp.com/",
    "https://github.com/jessewillig/NoteTaker"
);

const cureForBoredomCard = new ProjectCard(
    "Cure For Boredom",
    "This application allows the user to be distracted from the current global pandemic with personalized entertainment. The user can choose to escape by clicking for jokes, Kanye West quotes, Google images, or the NASA image of the day. It was build using HTML, CSS, Bulma, Javascript, Server-side APIs.",
    cureForBoredomPic1,
    cureForBoredomPic2,
    "https://jessewillig.github.io/CureForBoredom/",
    "https://github.com/jessewillig/CureForBoredom"
);

const weatherAppCard = new ProjectCard(
    "Weather Dashboard",
    "This weather Dashboard is designed to give you current, up-to-date weather whenever you need it for whichever city of your choosing! It will show you the city name, date, temperature, wind speed and humidity. It was build using HTML, CSS, Bootstrap and JQuery.",
    weatherAppPic,
    "https://jessewillig.github.io/WeatherDashboard/",
    "https://github.com/jessewillig/WeatherDashboard"
);