// toggle between day/night mode
const btn = document.querySelector(".darkmode-toggle");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});



// toggle project cards sliding on/off screen
const projectSlide = () => {
  const selectedProject = document.querySelector('.click1');
  const project = document.querySelector('.first');
  
  selectedProject.addEventListener('click', ()=> {
    project.classList.toggle('card-active');
    project2.classList.remove('card-active');
    project3.classList.remove('card-active');
  });

  const selectedProject2 = document.querySelector('.click2');
  const project2 = document.querySelector('.second');
  
  selectedProject2.addEventListener('click', ()=> {
    project2.classList.toggle('card-active');
    project.classList.remove('card-active');
    project3.classList.remove('card-active');
  });

  const selectedProject3 = document.querySelector('.click3');
  const project3 = document.querySelector('.third');
  
  selectedProject3.addEventListener('click', ()=> {
    project3.classList.toggle('card-active');
    project.classList.remove('card-active');
    project2.classList.remove('card-active');
  });
}

projectSlide();