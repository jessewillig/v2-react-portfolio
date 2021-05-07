import budgetTracker from "../images/portfolio/budget.png";
import fitnessTracker from "../images/portfolio/fitnesstracker.png";
import fitnessTracker2 from "../images/portfolio/fitnesstracker2.png";
import dankReviews from "../images/portfolio/dank-page1.jpg";
import dankReviews2 from "../images/portfolio/dank-page2.jpg";
import noteTaker from "../images/portfolio/notetaker.png";
import cureForBoredom from "../images/portfolio/cure-page1.png";
import cureForBoredom2 from "../images/portfolio/cure-page2.png";
import weatherApp from "../images/portfolio/weatherapp.png";

function ProjectCard (title, about, imageUrl, siteUrl, repoUrl) {
    this.title = title;
    this.about = about;
    this.imageUrl = imageUrl;
    this.siteUrl = siteUrl;
    this.repoUrl = repoUrl;
};