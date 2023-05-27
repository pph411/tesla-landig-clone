module.exports = { //contendra las configuraciones que iremos agregando
    content: ['./src/**/*/*.{astro,html,js,jsx}'], //se crea una regla para escuchar los archivos o la estructura d elos mismos que nossotros vamso a estar trabajando, con los asteriscos definimos que no importa en que carpeta este ni tampoco en que carpeta dentro de las carpetas, y con otro que no importa el nombre pero qeu si contenga una de las siguientes extenciones siguientes para poder trabajar con el. despues se pueden ir a gregando mas extenciones para que podamos trabajar con ellos. 
    theme: { //aqui se agregan las conficuraciones adicionales de comportamiento o simplemente para un tipo de modo ejemplo el modo nocturno. 
        extend: {

        }
    },
    plugins: []
}