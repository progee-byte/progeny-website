const canvas = document.getElementById('stars');
const ctx    = canvas.getContext('2d');

let stars = [];
let W, H;

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

function initStars(count = 220) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x:       Math.random() * W,
      y:       Math.random() * H,
      r:       Math.random() * 1.4 + 0.2,
      alpha:   Math.random(),
      speed:   Math.random() * 0.003 + 0.001,
      twinkle: Math.random() * Math.PI * 2,
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, W, H);
  for (const s of stars) {
    s.twinkle += s.speed;
    const alpha = (Math.sin(s.twinkle) * 0.4 + 0.6) * s.alpha;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(214, 232, 255, ${alpha})`;
    ctx.fill();
  }
  requestAnimationFrame(draw);
}

window.addEventListener('resize', () => { resize(); initStars(); });
resize();
initStars();
draw();
