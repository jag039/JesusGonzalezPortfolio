document.addEventListener("DOMContentLoaded", () => {
  const iconsContainer = document.getElementById('icons');
  const icons = iconsContainer.querySelectorAll('div');

  iconsContainer.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    icons.forEach(icon => {
      const rect = icon.getBoundingClientRect();
      const iconX = rect.left + rect.width / 2;
      const iconY = rect.top + rect.height / 2;

      const deltaX = mouseX - iconX;
      const deltaY = mouseY - iconY;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = 150;
      const scale = Math.max(1 - distance / maxDistance, 0.5);

      icon.style.transform = `scale(${scale}) translate(${deltaX / 8}px, ${deltaY / 8}px)`;
    });
  });

  iconsContainer.addEventListener('mouseleave', () => {
    icons.forEach(icon => {
      icon.style.transform = 'scale(1) translate(0, 0)';
    });
  });
});