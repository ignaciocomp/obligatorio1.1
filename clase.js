function ocultarSecciones() {
    let secciones = document.querySelectorAll(".seccion");
    for (let i = 0; i < secciones.length; i++) {
        const seccion = secciones[i];
        seccion.style.display = "none";
    }
}

let botones = document.querySelectorAll(".btn");
for (let i = 0; i < botones.length; i++) {
    const boton = botones[i];
    boton.addEventListener("click", mostrarSeccion);
}

function mostrarSeccion() {
    let idBoton = this.getAttribute("id");//"btnSeccionVender"
    let idSeccion = idBoton.charAt(3).toLowerCase() + idBoton.substring(4) //"seccionVender" 
    cambiarSeccion(idSeccion);

}

function cambiarSeccion(nuevaSeccion) {
    ocultarSecciones();
    document.querySelector("#" + nuevaSeccion).style.display = "block";
}

cambiarSeccion("seccionRegistroCensistas");

//mostrarBotones("inicio");

function mostrarBotones(tipo) {
    let botones = document.querySelectorAll(".btn");
    for (let i = 0; i < botones.length; i++) {
        const boton = botones[i];
        boton.style.display = "none";
    }

    let botonesMostrar = document.querySelectorAll("." + tipo);
    for (let i = 0; i < botonesMostrar.length; i++) {
        const botonMostrar = botonesMostrar[i];
        botonMostrar.style.display = "block";
    }
}

//-----------------------------------------------------------

//111111111111111111111111111111111111111111111111111111111
//CLASES 1
//CLASE CENSISTA CREADA
class Censista {
    constructor(nombre, usuario, contraseña) {
        this.nombre = nombre.toLowerCase();
        this.usuario = usuario.toLowerCase();
        this.contraseña = contraseña;
    }

    validarCredenciales(usuario, contraseña) {
        return (
            this.usuario === usuario.toLowerCase() && this.contraseña === contraseña);
    }
}
//ARRAYS 1
const usuariosCreados = [];

//FUNCIONES 1
//ACA CREE UNA FUNCION DONDE RECORRE TODAS LAS POS DEL ARRAY Y SI === usuario del campo de texto te tira falso sino true
function verificarNombreUsuarioUnico(usuario) {
    for (let i = 0; i < usuariosCreados.length; i++) {
        if (usuariosCreados[i].usuario === usuario) {
            return false;
        }
    }
    return true;
}
//aca cree una funcion y declare 3 variables may min num y las puse en false, desp un for q recorre todo el lenght de la contrasenia, y puse char === la pos del a contrasenia
//usando el ascii puse q si char === a z A Z y 0 9 devuelva true en min may num uno por uno y alfinal si todo esta true lo returnea
function verificarContraseñaValida(contraseña) {
    let tieneMinusc = false;
    let tieneMayusc = false;
    let tieneNumero = false;
    for (let i = 0; i < contraseña.length; i++) {
        let char = contraseña[i];
        if (char >= 'a' && char <= 'z') {
            tieneMinusc = true;
        } else if (char >= 'A' && char <= 'Z') {
            tieneMayusc = true;
        } else if (char >= '0' && char <= '9') {
            tieneNumero = true;
        }
    }
    //SI TODO ES TRUE LO RETURNEA
    return tieneMinusc && tieneMayusc && tieneNumero && contraseña.length >= 5;
}
// funcion para registrar al censista con 3 parametros,
//si la funcion de verificarusuario es false ! entonces te da mensaje de error
//lo mismo con verificar Contrasenia
//desp cera un nuevoCensista usando la clase y lo pushea al array usuariosCreados
function registrarCensista(nombre, usuario, contraseña) {
    if (!verificarNombreUsuarioUnico(usuario)) {
        alert("El nombre de usuario ya está en uso. Por favor, elige otro.");
        return;
    }
    if (!verificarContraseñaValida(contraseña)) {
        alert("La contraseña no cumple con los requisitos mínimos.");
        return;
    }
    let nuevoCensista = new Censista(nombre, usuario, contraseña);
    censistas.push(nuevoCensista)
    usuariosCreados.push(nuevoCensista);
    alert("Censista registrado con éxito.");
    document.querySelector("#txtNombre1").value = '';
    document.querySelector("#txtUsuario1").value = '';
    document.querySelector("#txtContraseña1").value = '';
}

function tomarValores1() {
    let nombre = document.querySelector("#txtNombre1").value;
    let usuario = document.querySelector("#txtUsuario1").value;
    let contraseña = document.querySelector("#txtContraseña1").value;

    //aca se verifica que los campos no esten vacios y si los estan, te tira un alert para q los llenes
    if (nombre.trim() === '') {
        alert("El campo de nombre es obligatorio.");
        return;
    }

    if (usuario.trim() === '') {
        alert("El campo de usuario es obligatorio.");
        return;
    }

    if (contraseña.trim() === '') {
        alert("El campo de contraseña es obligatorio.");
        return;
    }


    if (contraseña.length < 5) {
        alert("La contraseña debe tener al menos 5 caracteres.");
        return;
    }

    let tieneMinusc = false;
    let tieneMayusc = false;
    let tieneNumero = false;

    for (let i = 0; i < contraseña.length; i++) {
        const char = contraseña[i];

        if (char >= 'a' && char <= 'z') {
            tieneMinusc = true;
        } else if (char >= 'A' && char <= 'Z') {
            tieneMayusc = true;
        } else if (char >= '0' && char <= '9') {
            tieneNumero = true;
        }
    }

    if (!tieneMinusc) {
        alert("La contraseña debe contener al menos una letra minúscula.");
        return;
    }

    if (!tieneMayusc) {
        alert("La contraseña debe contener al menos una letra mayúscula.");
        return;
    }

    if (!tieneNumero) {
        alert("La contraseña debe contener al menos un número.");
        return;
    }

    registrarCensista(nombre, usuario, contraseña);
}

//BOTONES 1
//Este boton toma los valores del campo de texto y ejecuta la funcion registrarCensista que tiene ejecuta otras funciones tambien
//tambien chequea de que la contrasenia tenga los requerimientos obligatorios
document.querySelector("#btnRegistrar").addEventListener("click", tomarValores1);
//1111111111111111111111111111111111111111111111111111111111111






let usuarioActivo = ""
//2222222222222222222222222222222222222222222222222222222222222222
// CREO UN ARARY DE CENSISTAS CON 3 USUARIOS PRE CARGADOS
let censistas = [
];
//AL HACER CLICK TOMA VALORES DE CAMPO
document.querySelector('#btnIngresar').addEventListener('click', function () {
    let usuario = document.querySelector('#txtUsuario2').value;
    let contraseña = document.querySelector('#txtContraseña2').value;
    // ACA DECLARA censitaValido como NULL y PASA POR LA FUNCION DE VALIDARCREDENCIALES, SI LAS CREDENCIALES QUE PUSISTE ESTAN EN EL ARRAY DE CENSISTAS, SE AGREGA A la variable CensistaVALIDO
    let censistaValido = null;
    for (let i = 0; i < censistas.length; i++) {
        let censista = censistas[i];
        if (censista.validarCredenciales(usuario, contraseña)) {
            censistaValido = censista;
            break;
        }
    }
    //SI CENSISTA ES VALIDO TE MANDA A LA PAGINA INGRESAR DATOS SINO TE DICE DA ERROR
    if (censistaValido) {
        // Credenciales correctas
        usuarioActivo = usuario;
        document.querySelector("#txtUsuarioCensistaActivo").innerHTML = ""
        document.querySelector("#txtUsuarioCensistaActivo").innerHTML = "Usuario Activo: " + usuarioActivo
        cambiarSeccion("seccionIngresarDatos")

    } else {
        // Credenciales incorrectas
        alert('Credenciales incorrectas. Por favor, verifícalas.');
    }

});
//2222222222222222222222222222222222222222222222222222222222222222
document.querySelector("#txtSalir").addEventListener("click", salir)
function salir() {
    window.location.href = 'clase.html';
}


//3333333333333333333333333333333333333333333333333333333333333333
console.log("escribiendo: personas muestra el array de objetos de la clase personas, escribiendo cedulasCensadas muestra array de cedulas, DESP BORRA ESTO")
//CREE CLASE PARA CADA PERSONA QUE SE QUIERA CENSAR
class Persona {
    constructor(nombre, apellido, edad, cedula, departamento, ocupacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.cedula = cedula;
        this.departamento = departamento;
        this.ocupacion = ocupacion;
        this.censado = true;
        this.censista = usuarioActivo;
    }
}
//Declaro variables de los Selec para mas adelante
let departamentoSelect = document.querySelector("#txtDepartamento3");
let cedulaInput = document.querySelector("#txtCedula3");
let ocupacionSelect = document.querySelector("#txtOcupacion3");
//Declaro arrays global de cedulas y el de la clase personas
let cedulasCensadas = ["1234"];
let personas = [];

//un pequeño array con los departamentos jaja
function cargarDepartamentos() {
    let departamentos = [
        "Artigas",
        "Canelones",
        "Cerro Largo",
        "Colonia",
        "Durazno",
        "Flores",
        "Florida",
        "Lavalleja",
        "Maldonado",
        "Montevideo",
        "Paysandú",
        "Río Negro",
        "Rivera",
        "Rocha",
        "Salto",
        "San José",
        "Soriano",
        "Tacuarembó",
        "Treinta y Tres"
    ];
    //recorre el array de departamentos y los carga dinamicamente en el option del HTML
    //asi podes evitar tener que escribir manualmente cada opción en el HTML y te deja modificar/agregar los departamentos en el array, sin tener que tocar el HTML
    for (let i = 0; i < departamentos.length; i++) {
        let departamento = departamentos[i];
        let option = document.createElement("option");
        option.value = departamento;
        option.textContent = departamento; // text content seria como InnerHTML pero en este escenario seria mas adecuado, sino tendriamos q escribir todo el HTML en el js
        departamentoSelect.appendChild(option); //se inserta el elemento option como una nueva opción dentro del menú desplegable, y se repite hasta terminar el bucle
    }
}

function validarCedula(cedula) {
    return true; // Lógica de validación de cédula
}

function esCedulaDuplicada(cedula) {
    return cedulasCensadas.includes(cedula);//si la cedula ingresada inculdes CEDULA entonces es que la cedula ya existe
}
// a continuacion, hice el mejor verificador de todos los tiempos
//verifica si algun campo quedo vacio, si ninguna cedula ya fue ingresada y si alguna cedula no es valida 
function validarFormulario() {
    let nombre = document.querySelector("#txtNombre3").value.trim();// ELIMINA ESPACIOS EN BLANCO AL PRINCIPIO Y FINAL
    let apellido = document.querySelector("#txtApellido3").value.trim();// ELIMINA ESPACIOS EN BLANCO AL PRINCIPIO Y FINAL
    let edad = document.querySelector("#txtEdad3").value;
    let cedula = cedulaInput.value.replace(/[^0-9]/g, "");//remueve puntos guiones espacios letras TODO lo q no sea numeros lo remueve
    let departamento = departamentoSelect.value;
    let ocupacion = ocupacionSelect.value;

    //verifica si algun campo quedo vacio

    if (usuarioActivo === "") {
        alert("Debe Ingresar con su Nombre, Usuario y Contraseña primero.");
        return false;
    }

    if (nombre === "") {
        alert("El nombre no puede estar vacío.");
        return false;
    }

    if (apellido === "") {
        alert("El apellido no puede estar vacío.");
        return false;
    }

    if (edad === "") {
        alert("La edad no puede estar vacía.");
        return false;
    }
    if (!(edad > 0 && edad < 130)) {
        alert("La edad es Incorrecta.");
        return false;
    }

    if (cedula === "") {
        alert("La cédula no puede estar vacía.");
        return false;
    }

    if (departamento === "") {
        alert("Debe seleccionar un departamento de residencia.");
        return false;
    }

    if (ocupacion === "") {
        alert("Debe seleccionar una ocupación.");
        return false;
    }
    //verifica si la cedula ya esta censada
    if (esCedulaDuplicada(cedula)) {
        alert("Ya existe una persona censada para esta cédula.");
        return false;
    }
    //verifica si la cedula es valida
    if (!validarCedula(cedula)) {
        alert("La cédula ingresada no es válida.");
        return false;
    }

    return true; // si pasa todas las verificaciones returnea TRUE, sino returnea false y tira alert
}


//ejecuto funcion para cargar los departamentos
cargarDepartamentos();

//al hacer click GUARDAR ejecuta la gran funcion validarFormulario(), si devuelve true, crea el objeto Persona y 
//lo agrega al array de personas, y tambien guarda la cedula en el array de cedulasCensadas
document.querySelector("#btnAgregar").addEventListener("click", function () {
    if (validarFormulario()) {
        let nombre = document.querySelector("#txtNombre3").value.trim();
        let apellido = document.querySelector("#txtApellido3").value.trim();
        let edad = document.querySelector("#txtEdad3").value;
        let cedula = cedulaInput.value.replace(/[^0-9]/g, "");
        let departamento = departamentoSelect.value;
        let ocupacion = ocupacionSelect.value;
        //let censista = USUARIO QUE LOGEASTE COMO CENSISTA
        let persona = new Persona(nombre, apellido, edad, cedula, departamento, ocupacion);//crea el objeto nuevo Persona

        personas.push(persona); // pushea al array de personas


        cedulasCensadas.push(cedula);// pushea al array de cedulas

        //mando un mensaje de notificacion con todos los datos que se cargaron al array de personas
        alert(`Datos válidos, se pueden guardar.
Nombre: ${persona.nombre}
Apellido: ${persona.apellido}
Edad: ${persona.edad}
Cédula: ${persona.cedula}
Departamento: ${persona.departamento}
Ocupación: ${persona.ocupacion}`);
        //resetea los campos de texto nuevamente para volver a ingresar nuevos textos
        document.querySelector("#txtNombre3").value = "";
        document.querySelector("#txtApellido3").value = "";
        document.querySelector("#txtEdad3").value = "";
        cedulaInput.value = "";
        departamentoSelect.value = "";
        ocupacionSelect.value = "";
    }
});


//3333333333333333333333333333333333333333333333333333333333333333

//4444444444444444444444444444444444444444444444444444444444444444



document.querySelector('#btnVerificar').addEventListener('click', verificarDatos);
const personaCensada = new Persona("Juan", "Pérez", 30, "123456789", "Departamento A", "Empleado");
personaCensada.censado = true;
console.log(personaNoCensada);

function verificarDatos() {
    let cedula = document.querySelector('#txtCedula4').value;
    if (cedulasCensadas.includes(cedula)) {
        document.querySelector('#pVerificar').innerHTML = 'La cédula ya ha sido censada.';
    } else {
        document.querySelector('#pVerificar').innerHTML = 'La cédula no fue encontrada.';
    }
}


function consultarCenso(cedula) {
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].cedula === cedula && !personas[i].censado) {
            return personas[i];
        }
    }
    return null;
}
