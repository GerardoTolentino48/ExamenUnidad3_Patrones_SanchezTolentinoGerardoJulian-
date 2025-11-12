class GestorInterfaz 
{
    constructor(gestorDatos, gestorFiltros, gestorNavegacion) 
    {
        this.gestorDatos = gestorDatos;
        this.gestorFiltros = gestorFiltros;
        this.gestorNavegacion = gestorNavegacion;
        
        this.generoSeleccionado = '';
        this.idiomaSeleccionado = '';
        this.decadaSeleccionada = '';
        this.artistasSeleccionados = [];
        this.albumesSeleccionados = [];
        this.cancionSeleccionada = null;
    }

    inicializar() 
    {
        const selectorGenero = document.getElementById('selectorGenero');
        const selectorIdioma = document.getElementById('selectorIdioma');
        const selectorDecada = document.getElementById('selectorDecada');
        const btnMostrarCanciones = document.getElementById('btnMostrarCanciones');

        selectorGenero.addEventListener('change', (e) => {
            this.generoSeleccionado = e.target.value;
            this.actualizarListaArtistas();
            this.limpiarAlbumes();
            this.cancionSeleccionada = null;
            this.mostrarCancionActual();
            this.gestorNavegacion.actualizar(this);
        });

        selectorIdioma.addEventListener('change', (e) => {
            this.idiomaSeleccionado = e.target.value;
            this.actualizarListaArtistas();
            this.limpiarAlbumes();
            this.cancionSeleccionada = null;
            this.mostrarCancionActual();
            this.gestorNavegacion.actualizar(this);
        });

        selectorDecada.addEventListener('change', (e) => {
            this.decadaSeleccionada = e.target.value;
            this.actualizarListaArtistas();
            this.limpiarAlbumes();
            this.cancionSeleccionada = null;
            this.mostrarCancionActual();
            this.gestorNavegacion.actualizar(this);
        });

        document.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox' && e.target.id.startsWith('artista-')) {
                this.actualizarListaAlbumes();
                this.gestorNavegacion.actualizar(this);
            }
            if (e.target.type === 'checkbox' && e.target.id.startsWith('album-')) {
                this.gestorNavegacion.actualizar(this);
            }
        });

        btnMostrarCanciones.addEventListener('click', () => {
            this.mostrarCanciones();
            this.gestorNavegacion.actualizar(this);
        });

        this.gestorNavegacion.actualizar(this);
    }

    actualizarListaArtistas() 
    {
        const listaArtistas = document.getElementById('listaArtistas');
        listaArtistas.innerHTML = '';

        if (!this.generoSeleccionado) 
            {
                return;
            }

        const artistasFiltrados = this.gestorFiltros.filtrarArtistas(
            this.generoSeleccionado,
            this.idiomaSeleccionado,
            this.decadaSeleccionada,
            []
        );

        artistasFiltrados.forEach(artista => {
            const div = document.createElement('div');
            div.className = 'artista-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = artista.obtenerNombre();
            checkbox.id = `artista-${artista.obtenerNombre()}`;
            
            const label = document.createElement('label');
            label.htmlFor = `artista-${artista.obtenerNombre()}`;
            label.textContent = `${artista.obtenerNombre()} (${artista.obtenerIdioma()}, ${artista.obtenerDecada()})`;
            
            div.appendChild(checkbox);
            div.appendChild(label);
            listaArtistas.appendChild(div);
        });
    }

    actualizarListaAlbumes() 
    {
        const listaAlbumes = document.getElementById('listaAlbumes');
        listaAlbumes.innerHTML = '';
        const checkboxes = document.querySelectorAll('#listaArtistas input[type="checkbox"]:checked');
        this.artistasSeleccionados = Array.from(checkboxes).map(cb => cb.value);

        if (this.artistasSeleccionados.length === 0) {
            return;
        }

        const albumesPorArtista = this.gestorDatos.obtenerAlbumesPorArtista();
        this.artistasSeleccionados.forEach(nombreArtista => {
            const albumes = albumesPorArtista[nombreArtista];
            
            if (albumes && typeof albumes === 'object') {
                const divArtista = document.createElement('div');
                divArtista.style.marginBottom = '15px';
                
                const tituloArtista = document.createElement('strong');
                tituloArtista.textContent = nombreArtista + ':';
                divArtista.appendChild(tituloArtista);
                
                Object.keys(albumes).forEach(nombreAlbum => {
                    const div = document.createElement('div');
                    div.className = 'album-item';
                    div.style.marginLeft = '20px';
                    div.style.marginTop = '5px';
                    
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.value = `${nombreArtista}|${nombreAlbum}`;
                    checkbox.id = `album-${nombreArtista}-${nombreAlbum}`;
                    
                    const label = document.createElement('label');
                    label.htmlFor = `album-${nombreArtista}-${nombreAlbum}`;
                    label.textContent = nombreAlbum;
                    label.style.marginLeft = '5px';
                    
                    div.appendChild(checkbox);
                    div.appendChild(label);
                    divArtista.appendChild(div);
                });
                
                listaAlbumes.appendChild(divArtista);
            }
        });
    }

    limpiarAlbumes() 
    {
        const listaAlbumes = document.getElementById('listaAlbumes');
        listaAlbumes.innerHTML = '';
        this.albumesSeleccionados = [];
    }

    mostrarCanciones() 
    {
        const resultados = document.getElementById('resultados');
        resultados.innerHTML = '';

        const checkboxes = document.querySelectorAll('#listaAlbumes input[type="checkbox"]:checked');
        this.albumesSeleccionados = Array.from(checkboxes).map(cb => cb.value);

        if (this.albumesSeleccionados.length === 0) {
            alert('Por favor selecciona al menos un álbum');
            return;
        }

        const albumesPorArtista = this.gestorDatos.obtenerAlbumesPorArtista();
        const listaReproduccion = new ListaReproduccion(`Canciones Seleccionadas`);

        this.albumesSeleccionados.forEach(albumKey => {
            const [nombreArtista, nombreAlbum] = albumKey.split('|');
            const albumes = albumesPorArtista[nombreArtista];
            
            if (albumes && albumes[nombreAlbum]) {
                const canciones = albumes[nombreAlbum];
                const album = new Album(`${nombreAlbum} - ${nombreArtista}`);
                
                canciones.forEach(cancion => {
                    if (!cancion.artista || cancion.artista === '') 
                        {
                            cancion.artista = nombreArtista;
                        }
                    album.agregar(cancion);
                });
                
                listaReproduccion.agregar(album);
            }
        });
        resultados.appendChild(listaReproduccion.mostrar());
    }

    seleccionarCancion(cancion) 
    {
        this.cancionSeleccionada = cancion;
        this.gestorNavegacion.actualizar(this);
        this.mostrarCancionActual();
    }

    mostrarCancionActual() 
    {
        const reproductorActual = document.getElementById('reproductorActual');
        
        if (this.cancionSeleccionada) {
            reproductorActual.innerHTML = '';
            reproductorActual.style.display = 'block';
            
            const divCancion = document.createElement('div');
            divCancion.className = 'cancion-actual';
            
            const nombreCancion = document.createElement('div');
            nombreCancion.className = 'nombre-cancion-actual';
            nombreCancion.textContent = this.cancionSeleccionada.nombre;
            
            const infoCancion = document.createElement('div');
            infoCancion.className = 'info-cancion-actual';
            infoCancion.textContent = `${this.cancionSeleccionada.artista} - ${this.cancionSeleccionada.duracion}`;
            
            divCancion.appendChild(nombreCancion);
            divCancion.appendChild(infoCancion);
            reproductorActual.appendChild(divCancion);
        } else {
            reproductorActual.style.display = 'none';
        }
    }
}
