document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mousemove', (event) => {
    const title = document.querySelector('#Open > h1');
    const info = document.querySelector('#Open > p');
    const screenWidth = window.innerWidth;
    const mouseX = event.clientX;
    const rotation = 0.35 * (((mouseX / screenWidth) * 180) - 90); // From -90 to 90 degrees

    title.style.transform = `rotateY(${rotation}deg)`;
    info.style.transform = `rotateY(${rotation}deg)`;
  });

  const arrow = document.getElementById("down-arrow");
  arrow.addEventListener('click', ()=>{
    document.querySelector('#About').scrollIntoView({ behavior: 'smooth' });
  });
});