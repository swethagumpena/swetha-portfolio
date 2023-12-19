type skill = {
  name: string;
  image: string;
  category: string;
};
type project = {
  name: string;
  image: string;
  description: string;
  techstack: string;
  category: string;
  links: {
    visit: string;
    code: string;
    video: string;
  };
};

export type { skill, project };
