// import wesImg from "../assets/wes2.jpg";
// import markImg from "../assets/markdown2.jpg";
// import asteroidImg from "../assets/asteroids2.jpg";
// import colorGameImg from "../assets/color2.jpg";

interface IDetail {
  title: string;
  imgSrc: any;
  desc: string;
  demo: string;
  github: string;
}

export const wesDetail: IDetail = {
  title: "Wes Anderson Palette",
  // imgSrc:
  //   "https://gateway.pinata.cloud/ipfs/QmNMwJrdhApeBdDhpiUtk1jnxAa9ns1Cmj6HW5zhPo9MSZ?_gl=1*k5rx8a*_ga*ZGIwNjQ0YmEtNzk0Yi00NzAwLWE0ODQtZTU0OGU4MjkzM2Vm*_ga_5RMPXG14TE*MTY3ODg3MjkwMy4xLjEuMTY3ODg3MzMyMi40OS4wLjA.",
  imgSrc:
    "https://res.cloudinary.com/dhmmmen4e/image/upload/v1706147898/portfolio/QmNMwJrdhApeBdDhpiUtk1jnxAa9ns1Cmj6HW5zhPo9MSZ_vm5sdi.jpg",
  desc: "A single page app built with React and React Router. It displays 8 palettes used by Wes Anderson in his 8 different movies. Hex/rgb values of those colours can be copied by simply clicking the one you need.",
  demo: "https://cancui.work/wes-anderson-palette/",
  github: "https://github.com/casey0808/wes-anderson-palette",
};

export const markdownDetail = {
  title: "Markdown Previewer",
  // imgSrc: markImg,
  // imgSrc:
  // "https://gateway.pinata.cloud/ipfs/QmSVNfLBYwGv7toS5JaXfbp4Lm4JSCnC6kciCqwEuEK2wt?_gl=1*f69ac2*_ga*ZGIwNjQ0YmEtNzk0Yi00NzAwLWE0ODQtZTU0OGU4MjkzM2Vm*_ga_5RMPXG14TE*MTY3ODg3MjkwMy4xLjEuMTY3ODg3MzMyMi40OS4wLjA.",
  imgSrc:
    "https://res.cloudinary.com/dhmmmen4e/image/upload/v1706147898/portfolio/QmSVNfLBYwGv7toS5JaXfbp4Lm4JSCnC6kciCqwEuEK2wt_ybyzsu.jpg",
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
  // imgSrc:
  // "https://gateway.pinata.cloud/ipfs/QmaehK4D41kYr65dCUehvfQRCmVgmMy5A5pmmqyEXa71HQ",
  imgSrc:
    "https://res.cloudinary.com/dhmmmen4e/image/upload/v1706147898/portfolio/QmaehK4D41kYr65dCUehvfQRCmVgmMy5A5pmmqyEXa71HQ_qz0sra.jpg",
  desc: "This is an asteroid mining simulation, using react, typescript and scss for the frontend, connecting to an express, node, websocket backend server (the backend server is provided by Slingshot at asteroids-backend).",
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
  // imgSrc: colorGameImg,
  // imgSrc:
  // "https://gateway.pinata.cloud/ipfs/QmTrjGCMUW5YaiBo4R7a3gwtz3aShGpBpPgmS3j9y89q8v?_gl=1*bwy7qy*_ga*ZGIwNjQ0YmEtNzk0Yi00NzAwLWE0ODQtZTU0OGU4MjkzM2Vm*_ga_5RMPXG14TE*MTY3ODg3MjkwMy4xLjEuMTY3ODg3MzMxMS42MC4wLjA.",
  imgSrc:
    "https://res.cloudinary.com/dhmmmen4e/image/upload/v1706147899/portfolio/QmTrjGCMUW5YaiBo4R7a3gwtz3aShGpBpPgmS3j9y89q8v_zhut6q.jpg",
  desc: "A page that displays 6 or 3 squares in different colours and a RGB value. Player plays by clicking each square. Wrong ones will disappear until the player finds the right one corresponding to the value, built with React.",
  demo: "https://cancui.work/color-game-react/",
  github: "https://github.com/casey0808/color-game-react",
};
