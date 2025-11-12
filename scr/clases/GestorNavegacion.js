class GestorNavegacion 
{
    constructor() {
    }

    actualizar(gestorInterfaz) 
    {
        const contenidoArbol = document.getElementById('contenidoArbol');
        contenidoArbol.innerHTML = '';
        const ruta = document.createElement('div');
        ruta.className = 'ruta-lineal'; 
        const elementosRuta = [];

        if (gestorInterfaz.generoSeleccionado) {
            elementosRuta.push({
                texto: gestorInterfaz.generoSeleccionado,
                activo: true
            });
        } else {
            ruta.textContent = 'Selecciona un género...';
            contenidoArbol.appendChild(ruta);
            return;
        }

        if (gestorInterfaz.artistasSeleccionados.length > 0) {
            if (gestorInterfaz.artistasSeleccionados.length === 1) {
                elementosRuta.push({
                    texto: gestorInterfaz.artistasSeleccionados[0],
                    activo: true
                });
            } else {
                elementosRuta.push({
                    texto: `${gestorInterfaz.artistasSeleccionados.length} artistas`,
                    activo: true
                });
            }
        }

        if (gestorInterfaz.albumesSeleccionados.length > 0) {
            if (gestorInterfaz.albumesSeleccionados.length === 1) {
                const [, nombreAlbum] = gestorInterfaz.albumesSeleccionados[0].split('|');
                elementosRuta.push({
                    texto: nombreAlbum,
                    activo: true
                });
            } else {
                elementosRuta.push({
                    texto: `${gestorInterfaz.albumesSeleccionados.length} álbumes`,
                    activo: true
                });
            }
        }

        if (gestorInterfaz.cancionSeleccionada) {
            elementosRuta.push({
                texto: gestorInterfaz.cancionSeleccionada.nombre,
                activo: true
            });
        }

        elementosRuta.forEach((elemento, index) => {
            const span = document.createElement('span');
            if (elemento.activo) {
                span.className = 'elemento-ruta activo';
            } else {
                span.className = 'elemento-ruta';
            }
            span.textContent = elemento.texto;
            ruta.appendChild(span);

            if (index < elementosRuta.length - 1) {
                const separador = document.createElement('span');
                separador.className = 'separador-ruta';
                separador.textContent = ' > ';
                ruta.appendChild(separador);
            }
        });

        contenidoArbol.appendChild(ruta);
    }
}
