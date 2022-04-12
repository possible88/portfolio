import pinitfast from "../images/pinitfast.png";
import ishoot from "../images/ishoot.png";
import jobber from "../images/jobber.png";
import iq from "../images/iq.png";
import who from "../images/who.png";
import portfolio from "../images/portfolio.png";

const projectData = [{
    id: 0,
    delay: 800,
    link: "https://pinitfast.com",
    code: "#",
    image: pinitfast,
    write_up: "Pinitfast is a web application use for sharing links, text, images and documents between mutiple " +
    "devices such as phones and computer or between two computers, i built and deploy this web-app to assist " +
    "people who might need to foward a link/text, images or documents on their phone to their computer without sending through email or other social media apps.\n " +
    "The application was built with html css and javascript and the backend was built with php while the database is mysql. \n" +
    "I found this web app interesting as it also has a lot of fantastic features such as sharing content to other pinitfast users. \n " +
    "I have also recreate the project with React Js and PHP with mysql .",
    technologies: [
        "HTML", "CSS", "JS", "PHP", "MySQL"
    ]
},
{
    id: 1,
    delay: 1000,
    link: "https://ishootstudio.com",
    code: "#",
    image: ishoot,
    write_up: "IshootStudio is a photo gallery/blog built for the purpose of showcasing " +
    "new photgraphy and art content \n " +
    "This project was built with html css and javascript and also includes an admin panel " +
    "which was built with php and mysql for the purpose of changing the image content displaying " +
    "on the website from time to time. ",
    technologies: [
        "HTML", "CSS", "JS", "PHP", "MySQL"
    ]
},
{
    id: 2,
    delay: 1200,
    link: "https://jobertrade.com",
    code: "#",
    image: jobber,
    write_up: "Jobertrade is a classified website solely for posting of classiffied  " +
    "ads with support for various categories of items. \n " +
    "This project was built with php html css javascript and mysql.",
    technologies: [
        "HTML", "CSS", "JS", "PHP", "MySQL"
    ]
},
{
    id: 3,
    delay: 1400,
    link: "https://samiqtest.netlify.app/",
    code: "#",
    image: iq,
    write_up: "This javasctipt project is an actual IQ test application that display random IQ question, " +
    " It then scores the user at the end of every test according to the world acceptable global IQ ranking. \n " +
    "This project was built with html css and javascript" ,
    technologies: [
        "HTML", "CSS", "JS"
    ]
},
{
    id: 4,
    delay: 1600,
    link: "https://whogame.netlify.app/",
    code: "#",
    image: who,
    write_up: "Who-game is a game of guess with inputing various characteristics of the person you assume " +
    "is behind the screen, this project was built with html css and javascript " ,
    technologies: [
        "HTML", "CSS", "JS"
    ]
}
// ,
// {
//     id: 5,
//     delay: 1800,
//     link: "https://oladipo-dev.netlify.app/",
//     code: "https://github.com/fbt0wizard/portfolio",
//     image: portfolio,
//     write_up: "This project is my portfolio designed with React and various libraries such as react spring and many more, " +
//     "i try as much to express my understanding of animated react components " ,
//     technologies: [
//         "HTML", "SASS", "React JS"
//     ]
// }
]



export default projectData;
