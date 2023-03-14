import wesImg from "../assets/wes2.png";
import markImg from "../assets/markdown2.png";
// import pomoImg from "../assets/images/pomo_clock.png";
import asteroidImg from "../assets/asteroids2.png";
// import countriesImg from '../assets/images/countries.jpg';
import colorGameImg from "../assets/color2.png";

interface IDetail {
  title: string;
  imgSrc: any;
  desc: string;
  demo: string;
  github: string;
}

export const wesDetail: IDetail = {
  title: "Wes Anderson Palette",
  imgSrc: wesImg,
  desc: "A single page app built with React and React Router. It displays 8 palettes used by Wes Anderson in his 8 different movies. Hex/rgb values of those colours can be copied by simply clicking the one you need.",
  demo: "https://cancui.work/wes-anderson-palette/",
  github: "https://github.com/casey0808/wes-anderson-palette",
};

export const markdownDetail = {
  title: "Markdown Previewer",
  imgSrc: markImg,
  desc: "A React app that can parse markdown in the editor and display it in the previewer synchronously.",
  demo: "https://cancui.work/markdown-previewer/",
  github: "https://github.com/casey0808/markdown-previewer",
};

// export const pomoDetail = {
//   title: "Pomodoro Clock",
//   imgSrc: pomoImg,
//   desc: "A pomodoro clock created with React and React Hooks. You can change session length, pause and reset session.",
//   demo: "https://cancui.work/pomodoro-clock/",
//   github: "https://github.com/casey0808/pomodoro-clock",
// };

export const asteroidDetail = {
  title: "Asteroid Mining Simulation",
  imgSrc: asteroidImg,
  desc: "This is an asteroid mining simulation, using react, ts and scss for the frontend, connecting to an express, node, websocket backend server (the backend server is provided by Slingshot at asteroids-backend).",
  demo: "https://cancui.work/asteroids-ts/",
  github: "https://github.com/casey0808/asteroids-ts",
};

// export const countriesDetail = {
//   title: 'Countries',
//   imgSrc: countriesImg,
//   desc: 'A list of all the countries in the world. Click on a country to see more detailed information on a separate page. Built with React, TS, Material UI.',
//   demo: 'https://cancui.work/countries/',
//   github: 'https://github.com/casey0808/countries'
// }

export const colorGameDetail = {
  title: "Color Game",
  imgSrc: colorGameImg,
  desc: "A page that displays 6 or 3 squares in different colours and a RGB value. Player plays by clicking each square. Wrong ones will disappear until the player finds the right one corresponding to the value, built with React.",
  demo: "https://cancui.work/color-game-react/",
  github: "https://github.com/casey0808/color-game-react",
};
