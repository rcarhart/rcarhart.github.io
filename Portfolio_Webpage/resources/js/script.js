document.addEventListener('DOMContentLoaded', function() {
  // ... h3 animation code ...

  // Animate dynamicSubtitle element
  const dynamicSubtitle = document.getElementById('dynamicSubtitle');
  dynamicSubtitle.style.transition = 'opacity 1s';
  let texts = ["Data Visualization", "Data Engineering", "Analytics Engineering"];
  let index = 0;

  const changeText = () => {
      dynamicSubtitle.classList.add('fade-out');
      dynamicSubtitle.addEventListener('transitionend', function() {
          dynamicSubtitle.textContent = texts[index++ % texts.length];
          dynamicSubtitle.classList.remove('fade-out');
          dynamicSubtitle.classList.add('fade-in');
      }, { once: true });
  };

  setTimeout(changeText, 500);
  setInterval(changeText, 1000+1500); // 2000 for fade in and out duration
});
