type Color = string;

type GitHubLink = {
  type: "link/github";
  url: `https://github.com/${string}`;
};

type MalLink = {
  type: "link/mal";
  url: `https://myanimelist.net/profile/${string}`;
};

type TwitterLink = {
  type: "link/twitter";
  url: `https://twitter.com/${string}`;
};

type CustomLink = {
  type: "link/custom";
  url: string;
  label: string;
};

type AppLink = GitHubLink | MalLink | TwitterLink | CustomLink;

type Background = BgGradient | BgSolid;

type BgGradient = {
  type: "bg/gradient";
  top: Color;
  bottom: Color;
};

type BgSolid = {
  type: "bg/solid";
  color: Color;
};

export type AppConfig = {
  username: string;
  about?: string;
  background: Background;
  links: AppLink[];
};

export const defineAppConfig = (config: AppConfig) => config;
