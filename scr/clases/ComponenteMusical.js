class ComponenteMusical 
{
    constructor(nombre) 
    {
        this.nombre = nombre;
    }

    obtenerNombre() 
    {
        return this.nombre;
    }

    obtenerCanciones() 
    {
        throw new Error("Método obtenerCanciones debe ser implementado");
    }

    mostrar() 
    {
        throw new Error("Método mostrar debe ser implementado");
    }
}
