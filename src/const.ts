export interface ProjectProps {
  title: string,
  imgSrc: string,
  description: string,
  technologies: string[];
  repository: string;
  link: string;
}

export const Projects = [
  {
    title: "Song Recommendations",
    imgSrc: "/Top-recommendations.png",
    description: "Find music based on spotify liked songs. This app will fetch recommendations for each of a user's liked songs on spotify and rank suggestions on how many times they were recommended. Maybe the songs recommended most often are the best suggestions?",
    technologies:["React", "Next.js", "Tailwind", "Spotify API"],
    repository: "https://github.com/jeppeao/top-recommendations",
    link: "https://top-recommendations.vercel.app"
  },
  {
    title: "Visualize Sorting",
    imgSrc: "/Visualize-Sorting.png",
    description: "Visualizes how arrays of numbers are sorted by various algorithms. Allows for running different algorithms in parallel.",
    technologies:["Angular", "Material UI"],
    repository: "https://github.com/jeppeao/visualSorting",
    link: "https://visual-sorting-pi.vercel.app"
  },
  {
    title: "Pong",
    imgSrc: "/Pong.png",
    description: "A version of the classic game Pong. Flips between horizontal and landscape mode to adjust to viewport dimensions.",
    technologies:["React"],
    repository: "https://github.com/jeppeao/pong-react",
    link: "https://pong-orpin.vercel.app"
    
  },
  {
    title: "Tetris",
    imgSrc: "/Tetris.png",
    description: "A version of the classic game tetris.",
    technologies:["Angular"],
    repository: "https://github.com/jeppeao/tetris",
    link: "https://tetris-orpin.vercel.app"
  },
];