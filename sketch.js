let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // 畫布大小隨視窗變化
  background('#faedcd'); // 設定背景顏色

  // 產生 40 個圓
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width), // 隨機 X 座標
      y: random(height), // 隨機 Y 座標
      size: random(30, 100), // 隨機大小
      color: color(random(255), random(255), random(255)) // 隨機鮮豔顏色
    });
  }
}

function draw() {
  background('#faedcd'); // 每次重繪背景

  // 繪製所有圓
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    let newSize = map(mouseX, 0, width, 10, 120); // 根據滑鼠 X 座標改變大小
    ellipse(circle.x, circle.y, newSize, newSize);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 畫布隨視窗大小變化
  background('#faedcd'); // 重設背景顏色
}
