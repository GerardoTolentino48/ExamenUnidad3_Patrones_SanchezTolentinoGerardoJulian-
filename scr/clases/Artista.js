class Artista 
{
    constructor(nombre, genero, idioma, decada) 
    {
        this.nombre = nombre;
        this.genero = genero;
        this.idioma = idioma;
        this.decada = decada;
    }

    obtenerNombre() 
    {
        return this.nombre;
    }

    obtenerGenero() 
    {
        return this.genero;
    }

    obtenerIdioma() 
    {
        return this.idioma;
    }

    obtenerDecada() 
    {
        return this.decada;
    }
}
