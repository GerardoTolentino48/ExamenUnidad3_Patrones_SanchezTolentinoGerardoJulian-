document.addEventListener('DOMContentLoaded', () => {
    const gestorDatos = new GestorDatos();
    const gestorFiltros = new GestorFiltros(gestorDatos);
    const gestorNavegacion = new GestorNavegacion();
    const gestorInterfaz = new GestorInterfaz(gestorDatos, gestorFiltros, gestorNavegacion);

    window.gestorInterfaz = gestorInterfaz;
    gestorInterfaz.inicializar();
});
