



const elements = [
  ".features",
  ".testimonials",
  "#testimonial-1",
  "#testimonial-2",
  "#testimonial-3",



  "footer",
];


elements.forEach(el => {
  gsap.from(el, {
  y: 50,
  duration: 0.5,
  ease: "power1.inOut",
  scrollTrigger: { 
  trigger: el,
  toggleActions: "play none none reset"

  } 
  
  }); 
  
  });
  
  
  

