let particles = []; // Array para almacenar las partículas
let microParticles = []; // Array para almacenar las micropartículas

function setup() {
  let canvas = createCanvas(1920, 1080);
  canvas.position(0, 0); // Coloca el canvas en la esquina superior izquierda
  canvas.style("z-index", "-1"); // Envía el canvas al fondo

  // Crear las partículas con posiciones aleatorias
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(random(width), random(height), random(15, 30)));
  }
}

function draw() {
  background(30, 30, 40, 25); // Fondo oscuro y translúcido para efectos de estela

  // Actualizar y dibujar micropartículas
  for (let i = microParticles.length - 1; i >= 0; i--) {
    let mp = microParticles[i];
    mp.update();
    mp.display();

    // Eliminar micropartículas que se desvanecen
    if (mp.size < 1) {
      microParticles.splice(i, 1);
    }
  }

  // Dibujar y actualizar las partículas principales
  for (let p of particles) {
    p.update();
    p.display();
  }
}

// Clase de partícula
class Particle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = random(0.5, 2);
    this.angle = random(TWO_PI);
    this.color = color(random(255), random(255), random(255)); // Color aleatorio
  }

  update() {
    // Movimiento de la partícula
    this.x += this.speed * cos(this.angle);
    this.y += this.speed * sin(this.angle);

    // Cambiar tamaño y color cuando el mouse se mueve
    if (dist(mouseX, mouseY, this.x, this.y) < 100) {
      // Si el mouse está cerca
      this.size = map(dist(mouseX, mouseY, this.x, this.y), 0, 100, 50, 15); // Tamaño más grande
      this.color = color(random(255), random(255), random(255)); // Color aleatorio
      this.generateMicroParticles(); // Generar micropartículas
    } else {
      this.size = map(
        dist(mouseX, mouseY, this.x, this.y),
        0,
        width / 2,
        30,
        15
      ); // Tamaño normal
    }

    // Rebote en los bordes
    if (this.x < 0 || this.x > width) this.angle = PI - this.angle;
    if (this.y < 0 || this.y > height) this.angle = -this.angle;
  }

  generateMicroParticles() {
    for (let i = 0; i < 5; i++) {
      // Generar micropartículas
      microParticles.push(new MicroParticle(this.x, this.y));
    }
  }

  display() {
    noStroke();
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], 150); // Color translúcido
    ellipse(this.x, this.y, this.size);
  }
}

// Clase de micropartícula
class MicroParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(5, 10);
    this.speed = random(1, 3);
    this.angle = random(TWO_PI);
    this.color = color(random(255), random(255), random(255)); // Color aleatorio
  }

  update() {
    // Movimiento de la micropartícula
    this.x += this.speed * cos(this.angle);
    this.y += this.speed * sin(this.angle);

    // Disminuir el tamaño para simular desvanecimiento
    this.size -= 0.1;
  }

  display() {
    noStroke();
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], 150); // Color translúcido
    ellipse(this.x, this.y, this.size);
  }
}

// Redimensionar el canvas si se cambia el tamaño de la ventana
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
