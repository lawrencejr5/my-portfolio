interface WebArrTypes {
  interests: string[];
  skills: {
    frontEnd: string[];
    backEnd: string[];
    tools: string[];
  };
}

export const webArrs: WebArrTypes = {
  interests: [
    "Web_development",
    "Blockchain",
    "Machine_Learning",
    "Astro_Physics",
    "Human_Psychology",
  ],
  skills: {
    frontEnd: ["Reactjs", "Typescript", "SCSS", "NextJs", "Jquery"],
    backEnd: ["Nodejs", "Expressjs", "MongoDb", "PHP", "MySql"],
    tools: ["Git", "VsCode", "Canva", "Postman", "Cloudinary"],
  },
};
