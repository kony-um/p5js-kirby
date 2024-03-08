function setup() {
    createCanvas(400, 400);
    background(255,174,206);
    // background(255);
    angleMode(DEGREES);
  }
  
  function draw() {
    let center_num = 200
  
    // 体
    stroke(0)
    strokeWeight(6);
    fill(244,165,170);
    ellipse(center_num, center_num, center_num, center_num);
  
    // 目
    strokeWeight(1)
    fill(0); // 黒目の土台を作る
    ellipse(175, 170, 21, 48);
    ellipse(225, 170, 21, 48);
    
    fill(0,118,190); // 青を入れる
    ellipse(175, 170, 18, 44);
    ellipse(225, 170, 18, 44);
  
    fill(0); // 青の上側を黒で隠す
    ellipse(175, 168, 17, 24);
    ellipse(225, 168, 17, 24);
    
    
    fill(255, 255, 255) // 白目
    ellipse(174.5, 158, 15, 20);
    ellipse(224.5, 158, 15, 20);
  
    // ほっぺ
    noStroke()
    fill(236,104,151);
    let cheeks_x_diff = 50
    let cheeks_x_len = 30
    let cheeks_y_len = 20
    ellipse(center_num - cheeks_x_diff, center_num, cheeks_x_len, cheeks_y_len);
    ellipse(center_num + cheeks_x_diff, center_num, cheeks_x_len, cheeks_y_len);
    
    // 口
    fill(252, 157, 184);
    stroke(0)
    strokeWeight(3)  
    arc(200, 205, 30, 20, 20, 160);
  }
  