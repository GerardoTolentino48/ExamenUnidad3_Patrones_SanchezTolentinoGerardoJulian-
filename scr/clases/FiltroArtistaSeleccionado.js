class FiltroArtistaSeleccionado extends DecoradorFiltro 
{
    constructor(artista, artistasSeleccionados) 
    {
        super(artista);
        this.artistasSeleccionados = artistasSeleccionados;
    }

    cumpleFiltro() 
    {
        return this.artistasSeleccionados.includes(this.artista.obtenerNombre());
    }
}
