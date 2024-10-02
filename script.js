

gsap.from("header",{
duration:2,
y:-100,

}


)


const elements = [
  ".features",
  ".testimonials",
  "#testimonial-1",
  "#testimonial-2",
  "#testimonial-3",
  ".contact",
  "#element1",

  "#element4",


  "footer",
];


elements.forEach(el => {
  gsap.from(el, {
  y: 50,
  duration: 0.5,
  scrollTrigger: { 
  trigger: el,
  toggleActions: "play none none reset"

  } 
  
  }); 
  
  });
  
  
  

