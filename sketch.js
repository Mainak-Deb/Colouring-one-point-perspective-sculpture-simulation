let i=0,j=0,c,bw,d=-2000;
function preload() {
  
  img=loadImage('face-of-a-sculpture-of-saraswati-kumartuli-quarter-kolkata-calcutta-DH511H.jpg');
 
}
function setup() {
  createCanvas(1525, 700, WEBGL);
  textSize(100);
  for (i = 0; i <= img.height-15; i=i+10) {
    for (j = 0; j <= img.width-15; j=j+10) {
     
      c=img.get(i,j);
     print(c[0],c[1],c[2])
    }
  }
  slider1 = createSlider(0, 3650, 2700);
  slider1.position(5, 30);
  slider1.style('width', '160px');

  greeting = createElement('h3', 'Rotate');
  greeting.position(180,10);
  

  
  slider2 = createSlider(600, 2050,2000);
  slider2.position(300, 30);
  slider2.style('width', '100px');
  
  greeting2 = createElement('h3', 'Zoom');
  greeting2.position(410,10);



}

function draw() {
  background(0);

  let a1 = slider1.value()*3.14/1800;
  let d = slider2.value()*(-1);

  translate(0,0,d);
  rotateY(a1);
  directionalLight(255,255,255, 0, 0, -1);

  for (i = 0; i <= img.width-10; i=i+10) {
    for (j = 0; j <= img.height-10; j=j+10) {
      push();
      c=img.get(i,j);
      bw=int(((0.299*c[0])+(0.587*c[1])+(0.114*c[2]))/3);
      noStroke();
      fill(c[0],c[1],c[2]);
      ambientLight(c[0],c[1],c[2]);
      ambientMaterial(c[0],c[1],c[2]);
      translate((i-(img.height/2))*((255-bw)/205)*2,(j-(img.width/2))*((255-bw)/205)*2,2*(bw*12+(d/2)));
      sphere((255-bw)/255*8);
      pop();
    }
  }
  
}
