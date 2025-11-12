class Cancion extends ComponenteMusical 
{
    constructor(nombre, artista, duracion) 
    {
        super(nombre);
        this.artista = artista;
        this.duracion = duracion;
    }

    obtenerCanciones() 
    {
        return [this];
    }

    mostrar() 
    {
        const div = document.createElement('div');
        div.className = 'cancion';
        div.style.cursor = 'pointer';
        const artista = this.artista || 'Artista Desconocido';
        div.textContent = `${this.nombre} - ${artista} (${this.duracion})`;
        
        div.addEventListener('click', () => 
            {
            if (window.gestorInterfaz) 
                {
                    window.gestorInterfaz.seleccionarCancion(this);
                }
        });
        
        return div;
    }
}
