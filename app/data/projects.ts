// data/projects.ts
export interface Project {
    id: number;
    title: string;
    image: string;
  }
  
  const projects: Project[] = [
    { id: 1, title: "Project One", image: "/todo1.jpg" },
    { id: 2, title: "Project Two", image: "/todo2.png"  },
    { id: 3, title: "Project Three", image: "/public/todo1.jpg"  },
    { id: 4, title: "Project Four", image: "/public/todo1.jpg"  },
    { id: 5, title: "Project Five", image: "/public/todo1.jpg"  },
    { id: 6, title: "Project Six", image: "/public/todo1.jpg" },
    { id: 7, title: "Project Seven", image:"/public/todo1.jpg"  },
    { id: 8, title: "Project Eight", image: "/public/todo1.jpg"  },
  ];
  
  export default projects;
  