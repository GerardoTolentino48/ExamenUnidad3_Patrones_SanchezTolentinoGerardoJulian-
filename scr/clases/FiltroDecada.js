class FiltroDecada extends DecoradorFiltro 
{
    constructor(artista, decadaFiltro) 
    {
        super(artista);
        this.decadaFiltro = decadaFiltro;
    }

    cumpleFiltro() 
    {
        if (!this.decadaFiltro) return true;
        return this.artista.obtenerDecada() === this.decadaFiltro;
    }
}
