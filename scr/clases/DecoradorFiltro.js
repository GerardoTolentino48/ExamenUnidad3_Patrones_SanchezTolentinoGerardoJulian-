class DecoradorFiltro 
{
    constructor(artista) 
    {
        this.artista = artista;
    }

    obtenerNombre() 
    {
        return this.artista.obtenerNombre();
    }

    obtenerGenero() 
    {
        return this.artista.obtenerGenero();
    }

    obtenerIdioma() 
    {
        return this.artista.obtenerIdioma();
    }

    obtenerDecada() 
    {
        return this.artista.obtenerDecada();
    }

    cumpleFiltro() 
    {
        throw new Error("Método cumpleFiltro debe ser implementado");
    }
}
