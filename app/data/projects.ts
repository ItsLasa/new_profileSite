// data/projects.ts
export interface Project {
    id: number;
    title: string;
    image: string;
    link: string;
    details:string;
  }
  
  const projects: Project[] = [
    { id: 1, title: "Project One", image: "/todo1.jpg",link:"www.google.com", details:"Details About Project 1" },
    { id: 2, title: "Project Two", image: "/todo2.png" ,link:"",details:"Details About Project 1" },
    { id: 3, title: "Project Three", image: "/app3.png",link:""  ,details:"Details About Project 1"},
    { id: 4, title: "Project Four", image: "/app4.jpg" ,link:"" ,details:"Details About Project 1"},
   
  ];
  
  export default projects;
  