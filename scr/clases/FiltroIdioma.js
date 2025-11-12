class FiltroIdioma extends DecoradorFiltro 
{
    constructor(artista, idiomaFiltro) 
    {
        super(artista);
        this.idiomaFiltro = idiomaFiltro;
    }

    cumpleFiltro() 
    {
        if (!this.idiomaFiltro) return true;
        return this.artista.obtenerIdioma() === this.idiomaFiltro;
    }
}
