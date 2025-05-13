interface ProjectType {
  title: string;
  img: string;
  subtitle: string;
  stack: string[];
  links: {
    live: string;
    code: string;
  };
}

export const projects: ProjectType[] = [
  {
    title: "9jablogue",
    img: "9jablogue.png",
    subtitle: "A Nigerian blogging website.",
    stack: ["ReactJs", "Node.js", "Express", "Mongodb"],
    links: {
      live: "https://naija-blogue.web.app",
      code: "https://github.com/lawrencejr5/9jablogue",
    },
  },
  {
    title: "Yanhub",
    img: "yanhub.png",
    subtitle: "A task management web app for Yan Kontent Factory.",
    stack: ["ReactJs", "Node.js", "Express", "Mongodb"],
    links: {
      live: "https://yan-hub.web.app",
      code: "https://github.com/lawrencejr5/yanhub",
    },
  },
  {
    title: "YFincs",
    img: "yfincs.png",
    subtitle: "A defi staking website.",
    stack: ["Php", "MySql", "Jquery"],
    links: {
      live: "https://yfincs.com",
      code: "https://github.com/lawrencejr5/youholder",
    },
  },
  {
    title: "Aniobi",
    img: "aniobi.png",
    subtitle: "An anonymous messaging social media web application.",
    stack: ["Reactjs", "Typescript", "Scss", "Node.js"],
    links: {
      live: "https://test-aniobi.web.app",
      code: "https://github.com/lawrencejr5/aniobi",
    },
  },
  {
    title: "Kanterbal",
    img: "kanterbal.png",
    subtitle: "Decentralized trade by bater web application.",
    stack: ["Nextjs", "Typescript", "Scss"],
    links: {
      live: "https://kanterbal.web.app",
      code: "https://github.com/lawrencejr5/kanterbal",
    },
  },
];
