var app = document.getElementById('app');

var typewriter = new typewriter(app, { 
    loop: true
});
//Comentario
typewriter.typeString('Desarrolladora Fronted Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imagina lo puedes hacer!')
    .pauseFor(2500)
    // numeros de caracteres que se borrarán
    .deleteChars(6)
    .typeString('<strong>Programar!</strong>')
    .pauseFor(2500)
    .start(); 