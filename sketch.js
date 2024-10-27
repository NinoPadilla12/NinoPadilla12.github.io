<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nino Padilla</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Sofadi+One&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    
    <!-- Enlace a la librería p5.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
    
    <style>
      body {
        font-family: 'Sofadi One', cursive;
        background-color: #e3f2fd; /* Color de fondo claro */
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }

      .main {
        text-align: center;
      }

      .botonera {
        display: flex;
        flex-direction: column;
        gap: 20px; /* Espaciado entre botones */
      }

      .boton {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .boton a {
        display: inline-block;
        padding: 20px 40px; /* Botones más grandes */
        background-color: #bbdefb; /* Color de fondo claro */
        color: #0d47a1; /* Color del texto */
        text-decoration: none;
        border-radius: 10px; /* Bordes redondeados más marcados */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        font-size: 20px; /* Tamaño de fuente más grande */
        transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
      }

      .boton a:hover {
        background-color: #90caf9; /* Color de fondo más oscuro */
        transform: scale(1.1) rotate(3deg); /* Escala y rotación al pasar el cursor */
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
      }

      header h1 {
        margin-bottom: 30px; /* Espaciado debajo del título */
        font-size: 2.5em; /* Tamaño de fuente del título */
        color: #0d47a1; /* Color del título */
      }
    </style>
</head>
<body>
    <div class="main">
      <div class="container">
        <header>
          <h1>Nino Padilla - P5.js</h1>
        </header>
        <div class="botonera">
          <div class="boton">
            <a href="https://ninopadilla12.github.io/hola_mundo/">hola_mundo</a>
          </div>
          <div class="boton">
            <a href="https://ninopadilla12.github.io/Condicionales/">Condicionales</a>
          </div>
          <div class="boton">
            <a href="https://ninopadilla12.github.io/computer_vision/">Computer Vision</a>
          </div>
          <div class="boton">
            <a href="https://ninopadilla12.github.io/programaci-n_orientada_a_objetos/">Programación Orientada a Objetos</a>
          </div>
          <div class="boton">
            <a href="https://ninopadilla12.github.io/For_loop/">For Loop</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Enlace a tu script de p5.js -->
    <script src="sketch.js"></script>
</body>
</html>
