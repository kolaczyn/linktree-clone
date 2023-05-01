import { defineAppConfig } from "./src/appConfig";

export const appConfig = defineAppConfig({
  username: "kolaczyn",
  about: "Frontent Dev",
  background: {
    type: "bg/gradient",
    top: "#DAD299",
    bottom: "#B0DAB9",
  },
  links: [
    {
      type: "link/github",
      url: "https://github.com/kolaczyn",
    },
    {
      type: "link/twitter",
      url: "https://twitter.com/kolaczyn",
    },
    {
      type: "link/mal",
      url: "https://myanimelist.net/profile/kanyastrange",
    },
    {
      type: "link/custom",
      label: "My Website",
      url: "https://kolaczyn.com",
    },
  ],
});
