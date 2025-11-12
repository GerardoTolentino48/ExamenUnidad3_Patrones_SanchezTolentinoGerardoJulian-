class GestorFiltros 
{
    constructor(gestorDatos) 
    {
        this.gestorDatos = gestorDatos;
    }

    filtrarArtistas(genero, idioma, decada, artistasSeleccionados) 
    {
        const artistasDisponibles = this.gestorDatos.obtenerArtistas();
        
        return artistasDisponibles.filter(artista => {
            const filtroGenero = new FiltroGenero(artista, genero);
            const filtroIdioma = new FiltroIdioma(artista, idioma);
            const filtroDecada = new FiltroDecada(artista, decada);
            const filtroArtista = new FiltroArtistaSeleccionado(artista, artistasSeleccionados);
            
            return filtroGenero.cumpleFiltro() && filtroIdioma.cumpleFiltro() && filtroDecada.cumpleFiltro() &&
                   (artistasSeleccionados.length === 0 || filtroArtista.cumpleFiltro());
        });
    }
}
