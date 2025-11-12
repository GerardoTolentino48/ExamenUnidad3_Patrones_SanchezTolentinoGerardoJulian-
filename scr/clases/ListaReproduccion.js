class ListaReproduccion extends ComponenteMusical 
{
    constructor(nombre, componentes) 
    {
        super(nombre);
        this.componentes = componentes || [];
    }

    agregar(componente) 
    {
        this.componentes.push(componente);
    }

    obtenerCanciones() 
    {
        let todasLasCanciones = [];
        this.componentes.forEach(componente => 
            {
            todasLasCanciones = todasLasCanciones.concat(componente.obtenerCanciones());
        });
        return todasLasCanciones;
    }

    mostrar() 
    {
        const div = document.createElement('div');
        div.className = 'lista-reproduccion';
        
        const titulo = document.createElement('h3');
        titulo.textContent = `Lista: ${this.nombre}`;
        div.appendChild(titulo);

        this.componentes.forEach(componente => 
            {
            div.appendChild(componente.mostrar());
        });

        return div;
    }
}
