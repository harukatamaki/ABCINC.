window.addEventListener('load', function () {
  const marquee = document.querySelector('.works-wrap__body__block');
  const items = Array.from(marquee.children);
  const speedSeconds = 20;                                
  const direction = 'left';                               

  items.forEach(item => marquee.appendChild(item.cloneNode(true)));

  let marqueeWidth = marquee.scrollWidth / 2;
  let pos = direction === 'left' ? 0 : -marqueeWidth;
 const pixelsPerFrame = marqueeWidth / (speedSeconds * 60);

  function animate() {
  pos += direction === 'left' ? -pixelsPerFrame : pixelsPerFrame;

  if (pos <= -marqueeWidth) pos += marqueeWidth;
  if (pos >= 0) pos -= marqueeWidth;

  marquee.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(animate);
  }

  animate();
});