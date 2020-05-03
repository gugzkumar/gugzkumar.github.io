
// Hex code for colors
const smokeyblack = "#080708"
const registrationBlack = "#110000";
const darkCandyAppleRed = "#A40106";
const bulgarianRose = "#500001";
const darkSienna = "#2F1113";
const maroon = "#7B0000";
const white = "#FDFFFC";

const yellow = "#FFD000";
const yellowCompliment = "#726012";
const lightYellow = "#ffe364";
// const yellow ="#EDAE49"

const blue = "#3772FF";
// 256EFF

const darkPurple = "#41337A";
const purple ="#8A1C7C";

const green = "#7CB518";
const greenCompliment = "#5C8001";

// const yellowOrange = "#FF9F1C";
const orange="#FB6107"
const roseMadder = "#E71D36";
// const blueGreen = "#2EC4B6";
// const blueGreenCompliment = "#80e4d9"
const darkBlue = "#011627";


export default {
    primary: darkCandyAppleRed, // colors most widely used across all screens and components.
    secondary: yellow, // colors used second most widely used across all screens and components.
    accent: maroon, // colors used for the floating action button and interactive elements.
    background: white, // colors for text and icons.
    foreground: darkPurple, // colors used for element backgrounds.
    // Pages
    navbar: darkBlue,
    primaryAbout: yellow,
    secondaryAbout: yellowCompliment,
    // primarySkills: blueGreen,
    // secondarySkills: blueGreenCompliment,
    primaryExperience: green,
    secondaryExperience: greenCompliment,

    primarySkills: roseMadder,
    secondarySkills: darkCandyAppleRed,
    primaryBlogs: white,

    // useable colors
    registrationBlack: registrationBlack,
    darkCandyAppleRed: darkCandyAppleRed,
    bulgarianRose: bulgarianRose,
    darkSienna: darkSienna,
    maroon: maroon,
    yellow: yellow,
    lightYellow: lightYellow,
    blue: blue,
    orange: orange,
    // fonts
    fonts: {
        Orbitron: "Orbitron",
        Nunito: "Nunito",
        Itim: "Itim"
    },
    // Break Points
    breakPoints: {
        tablet: 1024,
        mobile: 720
    },
    spacing: {
        leftPadding: '5%'
    }
}
