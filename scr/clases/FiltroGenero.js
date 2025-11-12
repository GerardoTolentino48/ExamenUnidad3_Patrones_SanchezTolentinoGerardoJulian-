class FiltroGenero extends DecoradorFiltro 
{
    constructor(artista, generoFiltro) 
    {
        super(artista);
        this.generoFiltro = generoFiltro;
    }

    cumpleFiltro() 
    {
        return this.artista.obtenerGenero() === this.generoFiltro;
    }
}
