//canvas
function draw() {
  var canvas = document.getElementById('canvas_sp1');
  if ( ! canvas || ! canvas.getContext ) { return false; }
  var ctx = canvas.getContext('2d');
  /* 円 #1 */
  ctx.beginPath();
  ctx.fillStyle = 'rgb(192, 80, 77)'; // 赤
  ctx.arc(70, 45, 35, 0, Math.PI*2, false);
  ctx.fill();
  /* 円 #2 */
  ctx.beginPath();
  ctx.fillStyle = 'rgb(155, 187, 89)'; // 緑
  ctx.arc(45, 95, 35, 0, Math.PI*2, false);
  ctx.fill();
  /* 円 #3 */
  ctx.beginPath();
  ctx.fillStyle = 'rgb(128, 100, 162)'; // 紫
  ctx.arc(95, 95, 35, 0, Math.PI*2, false);
  ctx.fill();
}