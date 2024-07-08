// data/certificates.ts
export interface Certificate{
    id: number;
    image: string;
    link: string;
    details:string;
    
  }
  
  const certificates: Certificate[] = [
    { id: 1, image: "/todo1.jpg",link:"www.google.com", details:"Details About Project 1" },
    { id: 2, image: "/todo2.png" ,link:"",details:"Details About Project 1" },
    { id: 3, image: "/app3.png",link:""  ,details:"Details About Project 1"},
    { id: 4, image: "/app4.jpg" ,link:"" ,details:"Details About Project 1"},
   
  ];
  
  export default certificates;