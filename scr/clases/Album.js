class Album extends ComponenteMusical 
{
    constructor(nombre, canciones) 
    {
        super(nombre);
        this.canciones = canciones || [];
    }

    agregar(cancion) 
    {
        this.canciones.push(cancion);
    }

    obtenerCanciones() 
    {
        let todasLasCanciones = [];
        this.canciones.forEach(cancion => 
            {
            todasLasCanciones = todasLasCanciones.concat(cancion.obtenerCanciones());
        });
        return todasLasCanciones;
    }

    mostrar() 
    {
        const div = document.createElement('div');
        div.className = 'album';
        
        const titulo = document.createElement('div');
        titulo.className = 'album-titulo';
        titulo.textContent = `Álbum: ${this.nombre}`;
        div.appendChild(titulo);

        this.canciones.forEach(cancion => 
            {
            div.appendChild(cancion.mostrar());
        });

        return div;
    }
}
