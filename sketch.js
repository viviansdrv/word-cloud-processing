let tabela;
let sorteio = [];
let fonte;

function preload() {
  tabela = loadTable("tabela_limpa.csv", "csv");
  fonte = loadFont("Roboto-Medium.ttf");
}

function setup() {
  createCanvas(800, 800);

  for (let i = 0; i < 100; i++) {
    sorteio.push(random(50, 750));
  }
}

function draw() {
  background(0);
  
    for (let i=0; i<800; i+=80){
      stroke('gray')
      strokeWeight(1)
      line(10, i, 800, i)
    }
  
  for (let i = 0; i < 100; i++) {
    
    if(mouseX > sorteio[i] -10 && mouseX < sorteio[i] + 10 &&
       mouseY > map(tabela.getString(i, 1), 50, 259, 800, 0) - 10 &&
       mouseY < map(tabela.getString(i, 1), 50, 259, 800, 0) + 10) {
      
      fill(255, 255, 255, 200);
      text(
      tabela.getString(i, 1),
      sorteio[i],
      map(tabela.getString(i, 1), 50, 259, 800, 0) + 20 )
    }
    else {
      fill(100, tabela.getString(i, 1), 190, 150);
    }
    
    diametro_circulo =sqrt(tabela.getString(i, 1)/ PI)*2
                                                

    circle(
      sorteio[i],
      map(tabela.getString(i, 1), 50, 259, 800, 0),
      map(diametro_circulo, 8, 20, 0, 100)
    );

    textSize(map(tabela.getString(i, 1), 80, 300, 5, 20))
    fill(255);
    textAlign(CENTER);
    textFont(fonte);
    text(
      tabela.getString(i, 0),
      sorteio[i],
      map(tabela.getString(i, 1), 50, 259, 800, 0)
    );
  }
}
/* function keyPressed() {
    if (key == "d" || key == "D") {
    saveCanvas('minhaVisualizacao', 'jpg');
}} */


