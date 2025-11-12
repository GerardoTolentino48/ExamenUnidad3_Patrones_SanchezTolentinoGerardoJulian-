class GestorDatos 
{
    constructor() 
    {
        this.artistasDisponibles = [];
        this.albumesPorArtista = {};
        this.inicializarDatos();
    }

    inicializarDatos() 
    {
        this.artistasDisponibles = [
            // Rock 70s
            new Artista("The Beatles", "rock", "ingles", "70s"),
            new Artista("Led Zeppelin", "rock", "ingles", "70s"),
            new Artista("Pink Floyd", "rock", "ingles", "70s"),
            new Artista("The Rolling Stones", "rock", "ingles", "70s"),
            // Rock 80s
            new Artista("Queen", "rock", "ingles", "80s"),
            new Artista("AC/DC", "rock", "ingles", "80s"),
            new Artista("Guns N' Roses", "rock", "ingles", "80s"),
            new Artista("Joaquín Sabina", "rock", "espanol", "80s"),
            new Artista("Soda Stereo", "rock", "espanol", "80s"),
            // Rock 90s
            new Artista("Nirvana", "rock", "ingles", "90s"),
            new Artista("Radiohead", "rock", "ingles", "90s"),
            new Artista("Pearl Jam", "rock", "ingles", "90s"),
            new Artista("Café Tacvba", "rock", "espanol", "90s"),
            new Artista("Maná", "rock", "espanol", "90s"),
            new Artista("Los Fabulosos Cadillacs", "rock", "espanol", "90s"),
            // Rock 2000
            new Artista("Linkin Park", "rock", "ingles", "2000"),
            new Artista("The White Stripes", "rock", "ingles", "2000"),
            new Artista("Arctic Monkeys", "rock", "ingles", "2000"),
            new Artista("Juanes", "rock", "espanol", "2000"),
            new Artista("Molotov", "rock", "espanol", "2000"),
            new Artista("Zoé", "rock", "espanol", "2000"),
            // Pop 70s
            new Artista("ABBA", "pop", "ingles", "70s"),
            // Pop 80s
            new Artista("Michael Jackson", "pop", "ingles", "80s"),
            new Artista("Madonna", "pop", "ingles", "80s"),
            new Artista("Prince", "pop", "ingles", "80s"),
            // Pop 90s
            new Artista("Britney Spears", "pop", "ingles", "90s"),
            new Artista("Backstreet Boys", "pop", "ingles", "90s"),
            new Artista("Luis Miguel", "pop", "espanol", "90s"),
            new Artista("Ricky Martin", "pop", "espanol", "90s"),
            // Pop 2000
            new Artista("Shakira", "pop", "espanol", "2000"),
            new Artista("Enrique Iglesias", "pop", "espanol", "2000"),
            new Artista("Lady Gaga", "pop", "ingles", "2000"),
            new Artista("Taylor Swift", "pop", "ingles", "2000"),
            // Jazz 70s
            new Artista("Miles Davis", "jazz", "ingles", "70s"),
            new Artista("John Coltrane", "jazz", "ingles", "70s"),
            new Artista("Herbie Hancock", "jazz", "ingles", "70s"),
            // Jazz 80s
            new Artista("Pat Metheny", "jazz", "ingles", "80s"),
            // Jazz 90s
            new Artista("Diana Krall", "jazz", "ingles", "90s"),
            // Jazz 2000
            new Artista("Norah Jones", "jazz", "ingles", "2000"),
            // Electrónica 80s
            new Artista("Kraftwerk", "electronica", "ingles", "80s"),
            // Electrónica 90s
            new Artista("The Prodigy", "electronica", "ingles", "90s"),
            new Artista("Chemical Brothers", "electronica", "ingles", "90s"),
            // Electrónica 2000
            new Artista("Daft Punk", "electronica", "ingles", "2000"),
            new Artista("Deadmau5", "electronica", "ingles", "2000"),
            new Artista("Skrillex", "electronica", "ingles", "2000"),
            // Clásica 70s
            new Artista("Mozart", "clasica", "ingles", "70s"),
            new Artista("Beethoven", "clasica", "ingles", "70s"),
            new Artista("Bach", "clasica", "ingles", "70s"),
            // Clásica 80s
            new Artista("Vivaldi", "clasica", "ingles", "80s"),
            // Clásica 90s
            new Artista("Chopin", "clasica", "ingles", "90s"),
            // Clásica 2000
            new Artista("Ludovico Einaudi", "clasica", "ingles", "2000")
        ];

        // Álbumes y canciones
        this.albumesPorArtista = 
        {
            "The Beatles": {
                "Abbey Road": [
                    new Cancion("Come Together", "The Beatles", "4:20"),
                    new Cancion("Something", "The Beatles", "3:03"),
                    new Cancion("Here Comes the Sun", "The Beatles", "3:06")
                ],
                "The White Album": [
                    new Cancion("Hey Jude", "The Beatles", "4:35"),
                    new Cancion("Let It Be", "The Beatles", "3:50"),
                    new Cancion("Yesterday", "The Beatles", "2:05")
                ]
            },
            "Michael Jackson": {
                "Thriller": [
                    new Cancion("Billie Jean", "Michael Jackson", "4:54"),
                    new Cancion("Thriller", "Michael Jackson", "5:57"),
                    new Cancion("Beat It", "Michael Jackson", "4:18")
                ],
                "Bad": [
                    new Cancion("Smooth Criminal", "Michael Jackson", "4:17"),
                    new Cancion("The Way You Make Me Feel", "Michael Jackson", "4:58"),
                    new Cancion("Man in the Mirror", "Michael Jackson", "5:19")
                ]
            },
            "Miles Davis": {
                "Kind of Blue": [
                    new Cancion("So What", "Miles Davis", "9:22"),
                    new Cancion("Blue in Green", "Miles Davis", "5:37"),
                    new Cancion("Kind of Blue", "Miles Davis", "9:44")
                ]
            },
            "Daft Punk": {
                "Discovery": [
                    new Cancion("One More Time", "Daft Punk", "5:20"),
                    new Cancion("Around the World", "Daft Punk", "7:09")
                ],
                "Random Access Memories": [
                    new Cancion("Get Lucky", "Daft Punk", "4:08"),
                    new Cancion("Instant Crush", "Daft Punk", "5:37")
                ]
            },
            "Mozart": {
                "Sinfonías Clásicas": [
                    new Cancion("Eine kleine Nachtmusik", "Mozart", "6:00"),
                    new Cancion("Rondo Alla Turca", "Mozart", "3:30"),
                    new Cancion("Lacrimosa", "Mozart", "3:05")
                ]
            },
            "Queen": {
                "A Night at the Opera": [
                    new Cancion("Bohemian Rhapsody", "Queen", "5:55"),
                    new Cancion("Love of My Life", "Queen", "3:38")
                ],
                "News of the World": [
                    new Cancion("We Will Rock You", "Queen", "2:01"),
                    new Cancion("We Are the Champions", "Queen", "2:59"),
                    new Cancion("Don't Stop Me Now", "Queen", "3:29")
                ]
            },
            "Madonna": {
                "Like a Virgin": [
                    new Cancion("Like a Virgin", "Madonna", "3:38"),
                    new Cancion("Material Girl", "Madonna", "4:00")
                ],
                "The Immaculate Collection": [
                    new Cancion("Vogue", "Madonna", "4:50"),
                    new Cancion("Like a Prayer", "Madonna", "5:40")
                ]
            },
            "John Coltrane": {
                "Giant Steps": [
                    new Cancion("Giant Steps", "John Coltrane", "4:45"),
                    new Cancion("Naima", "John Coltrane", "4:22")
                ],
                "A Love Supreme": [
                    new Cancion("A Love Supreme", "John Coltrane", "7:50"),
                    new Cancion("My Favorite Things", "John Coltrane", "13:41")
                ]
            },
            "Deadmau5": {
                "For Lack of a Better Name": [
                    new Cancion("Ghosts 'n' Stuff", "Deadmau5", "5:28"),
                    new Cancion("I Remember", "Deadmau5", "9:07")
                ],
                "Random Album Title": [
                    new Cancion("Strobe", "Deadmau5", "10:37"),
                    new Cancion("Faxing Berlin", "Deadmau5", "11:28")
                ]
            },
            "Beethoven": {
                "Sinfonías": [
                    new Cancion("Symphony No. 9", "Beethoven", "65:00"),
                    new Cancion("Symphony No. 5", "Beethoven", "33:30")
                ],
                "Sonatas": [
                    new Cancion("Moonlight Sonata", "Beethoven", "15:00"),
                    new Cancion("Für Elise", "Beethoven", "3:00")
                ]
            },
            "Joaquín Sabina": {
                "19 días y 500 noches": [
                    new Cancion("19 días y 500 noches", "Joaquín Sabina", "4:15"),
                    new Cancion("Y nos dieron las diez", "Joaquín Sabina", "4:30"),
                    new Cancion("Contigo", "Joaquín Sabina", "3:45")
                ]
            },
            "Shakira": {
                "Oral Fixation Vol. 2": [
                    new Cancion("Hips Don't Lie", "Shakira", "3:38"),
                    new Cancion("La Tortura", "Shakira", "3:35")
                ],
                "Waka Waka": [
                    new Cancion("Waka Waka", "Shakira", "3:22"),
                    new Cancion("Loca", "Shakira", "3:13")
                ]
            },
            "Luis Miguel": {
                "Romance": [
                    new Cancion("La Incondicional", "Luis Miguel", "4:17"),
                    new Cancion("Hasta Que Me Olvides", "Luis Miguel", "4:41")
                ],
                "Segundo Romance": [
                    new Cancion("Ahora Te Puedes Marchar", "Luis Miguel", "3:11"),
                    new Cancion("El Día Que Me Quieras", "Luis Miguel", "4:15")
                ]
            },
            "Café Tacvba": {
                "Re": [
                    new Cancion("Eres", "Café Tacvba", "4:27"),
                    new Cancion("La Ingrata", "Café Tacvba", "3:32")
                ],
                "Avalancha de Éxitos": [
                    new Cancion("Chilanga Banda", "Café Tacvba", "3:31"),
                    new Cancion("No Controles", "Café Tacvba", "3:05")
                ]
            },
            "Juanes": {
                "Mi Sangre": [
                    new Cancion("La Camisa Negra", "Juanes", "3:36"),
                    new Cancion("A Dios Le Pido", "Juanes", "3:25")
                ],
                "Un Día Normal": [
                    new Cancion("Es Por Ti", "Juanes", "3:58"),
                    new Cancion("Fotografía", "Juanes", "3:58")
                ]
            },
            "Led Zeppelin": {
                "Led Zeppelin IV": [
                    new Cancion("Stairway to Heaven", "Led Zeppelin", "8:02"),
                    new Cancion("Black Dog", "Led Zeppelin", "4:54")
                ],
                "Led Zeppelin II": [
                    new Cancion("Whole Lotta Love", "Led Zeppelin", "5:34")
                ]
            },
            "Pink Floyd": {
                "The Wall": [
                    new Cancion("Comfortably Numb", "Pink Floyd", "6:22"),
                    new Cancion("Another Brick in the Wall", "Pink Floyd", "3:59")
                ],
                "Wish You Were Here": [
                    new Cancion("Wish You Were Here", "Pink Floyd", "5:34")
                ]
            },
            "The Rolling Stones": {
                "Aftermath": [
                    new Cancion("Paint It Black", "The Rolling Stones", "3:45"),
                    new Cancion("Satisfaction", "The Rolling Stones", "3:44")
                ],
                "Goats Head Soup": [
                    new Cancion("Angie", "The Rolling Stones", "4:32")
                ]
            },
            "AC/DC": {
                "Back in Black": [
                    new Cancion("Back in Black", "AC/DC", "4:15"),
                    new Cancion("Thunderstruck", "AC/DC", "4:52")
                ],
                "Highway to Hell": [
                    new Cancion("Highway to Hell", "AC/DC", "3:28")
                ]
            },
            "Guns N' Roses": {
                "Appetite for Destruction": [
                    new Cancion("Sweet Child O' Mine", "Guns N' Roses", "5:56"),
                    new Cancion("Welcome to the Jungle", "Guns N' Roses", "4:31")
                ],
                "Use Your Illusion I": [
                    new Cancion("November Rain", "Guns N' Roses", "8:57")
                ]
            },
            "Soda Stereo": {
                "Canción Animal": [
                    new Cancion("De Música Ligera", "Soda Stereo", "3:32"),
                    new Cancion("Persiana Americana", "Soda Stereo", "4:52")
                ],
                "Doble Vida": [
                    new Cancion("En la Ciudad de la Furia", "Soda Stereo", "5:26")
                ]
            },
            "Nirvana": {
                "Nevermind": [
                    new Cancion("Smells Like Teen Spirit", "Nirvana", "5:01"),
                    new Cancion("Come As You Are", "Nirvana", "3:38"),
                    new Cancion("Lithium", "Nirvana", "4:16")
                ]
            },
            "Radiohead": {
                "OK Computer": [
                    new Cancion("Karma Police", "Radiohead", "4:24"),
                    new Cancion("Paranoid Android", "Radiohead", "6:23")
                ],
                "Pablo Honey": [
                    new Cancion("Creep", "Radiohead", "3:56")
                ]
            },
            "Pearl Jam": {
                "Ten": [
                    new Cancion("Alive", "Pearl Jam", "5:40"),
                    new Cancion("Jeremy", "Pearl Jam", "5:18"),
                    new Cancion("Black", "Pearl Jam", "5:43")
                ]
            },
            "Maná": {
                "¿Dónde Jugarán los Niños?": [
                    new Cancion("Oye Mi Amor", "Maná", "4:19"),
                    new Cancion("Rayando el Sol", "Maná", "4:10")
                ],
                "Sueños Líquidos": [
                    new Cancion("En el Muelle de San Blas", "Maná", "5:52")
                ]
            },
            "Los Fabulosos Cadillacs": {
                "El León": [
                    new Cancion("Matador", "Los Fabulosos Cadillacs", "5:13"),
                    new Cancion("Vasos Vacíos", "Los Fabulosos Cadillacs", "4:20")
                ],
                "Rey Azúcar": [
                    new Cancion("Siguiendo la Luna", "Los Fabulosos Cadillacs", "4:51")
                ]
            },
            "Linkin Park": {
                "Hybrid Theory": [
                    new Cancion("In the End", "Linkin Park", "3:36"),
                    new Cancion("Numb", "Linkin Park", "3:05")
                ],
                "Minutes to Midnight": [
                    new Cancion("What I've Done", "Linkin Park", "3:25")
                ]
            },
            "The White Stripes": {
                "Elephant": [
                    new Cancion("Seven Nation Army", "The White Stripes", "3:52"),
                    new Cancion("Icky Thump", "The White Stripes", "4:14")
                ],
                "White Blood Cells": [
                    new Cancion("Fell in Love with a Girl", "The White Stripes", "1:50")
                ]
            },
            "Arctic Monkeys": {
                "AM": [
                    new Cancion("Do I Wanna Know?", "Arctic Monkeys", "4:32"),
                    new Cancion("R U Mine?", "Arctic Monkeys", "3:20")
                ],
                "Favourite Worst Nightmare": [
                    new Cancion("505", "Arctic Monkeys", "4:13")
                ]
            },
            "Molotov": {
                "¿Dónde Jugarán las Niñas?": [
                    new Cancion("Gimme Tha Power", "Molotov", "4:10"),
                    new Cancion("Puto", "Molotov", "3:05")
                ],
                "Dance and Dense Denso": [
                    new Cancion("Frijolero", "Molotov", "3:30")
                ]
            },
            "Zoé": {
                "Reptilectric": [
                    new Cancion("Soñé", "Zoé", "4:47"),
                    new Cancion("Nada", "Zoé", "4:20")
                ],
                "Memo Rex Commander": [
                    new Cancion("Labios Rotos", "Zoé", "4:04")
                ]
            },
            "ABBA": {
                "Arrival": [
                    new Cancion("Dancing Queen", "ABBA", "3:50"),
                    new Cancion("Mamma Mia", "ABBA", "3:33")
                ],
                "ABBA": [
                    new Cancion("Waterloo", "ABBA", "2:45")
                ]
            },
            "Prince": {
                "Purple Rain": [
                    new Cancion("Purple Rain", "Prince", "8:41"),
                    new Cancion("When Doves Cry", "Prince", "5:52")
                ],
                "Parade": [
                    new Cancion("Kiss", "Prince", "3:46")
                ]
            },
            "Britney Spears": {
                "...Baby One More Time": [
                    new Cancion("Baby One More Time", "Britney Spears", "3:30"),
                    new Cancion("Oops!... I Did It Again", "Britney Spears", "3:31")
                ],
                "In the Zone": [
                    new Cancion("Toxic", "Britney Spears", "3:18")
                ]
            },
            "Backstreet Boys": {
                "Millennium": [
                    new Cancion("I Want It That Way", "Backstreet Boys", "3:33"),
                    new Cancion("As Long As You Love Me", "Backstreet Boys", "3:34")
                ],
                "Backstreet Boys": [
                    new Cancion("Everybody", "Backstreet Boys", "3:45")
                ]
            },
            "Ricky Martin": {
                "Ricky Martin": [
                    new Cancion("Livin' la Vida Loca", "Ricky Martin", "4:03"),
                    new Cancion("María", "Ricky Martin", "4:22")
                ],
                "Vuelve": [
                    new Cancion("La Copa de la Vida", "Ricky Martin", "4:30")
                ]
            },
            "Enrique Iglesias": {
                "Sex and Love": [
                    new Cancion("Bailando", "Enrique Iglesias", "4:03")
                ],
                "Escape": [
                    new Cancion("Hero", "Enrique Iglesias", "4:24"),
                    new Cancion("Escape", "Enrique Iglesias", "3:28")
                ]
            },
            "Lady Gaga": {
                "The Fame": [
                    new Cancion("Poker Face", "Lady Gaga", "3:57"),
                    new Cancion("Bad Romance", "Lady Gaga", "4:54")
                ],
                "Born This Way": [
                    new Cancion("Born This Way", "Lady Gaga", "4:20")
                ]
            },
            "Taylor Swift": {
                "1989": [
                    new Cancion("Shake It Off", "Taylor Swift", "3:39"),
                    new Cancion("Blank Space", "Taylor Swift", "3:51")
                ],
                "Fearless": [
                    new Cancion("Love Story", "Taylor Swift", "3:55")
                ]
            },
            "Herbie Hancock": {
                "Head Hunters": [
                    new Cancion("Chameleon", "Herbie Hancock", "15:41"),
                    new Cancion("Watermelon Man", "Herbie Hancock", "6:28")
                ],
                "Empyrean Isles": [
                    new Cancion("Cantaloupe Island", "Herbie Hancock", "5:33")
                ]
            },
            "Pat Metheny": {
                "Still Life (Talking)": [
                    new Cancion("Last Train Home", "Pat Metheny", "5:43")
                ],
                "Pat Metheny Group": [
                    new Cancion("Phase Dance", "Pat Metheny", "8:25"),
                    new Cancion("Are You Going With Me?", "Pat Metheny", "8:50")
                ]
            },
            "Diana Krall": {
                "The Look of Love": [
                    new Cancion("The Look of Love", "Diana Krall", "4:42"),
                    new Cancion("Let's Fall in Love", "Diana Krall", "4:18")
                ],
                "All for You": [
                    new Cancion("Peel Me a Grape", "Diana Krall", "5:52")
                ]
            },
            "Norah Jones": {
                "Come Away With Me": [
                    new Cancion("Don't Know Why", "Norah Jones", "3:06"),
                    new Cancion("Come Away With Me", "Norah Jones", "3:18")
                ],
                "Feels Like Home": [
                    new Cancion("Sunrise", "Norah Jones", "3:20")
                ]
            },
            "Kraftwerk": {
                "The Man-Machine": [
                    new Cancion("The Model", "Kraftwerk", "3:40"),
                    new Cancion("Computer Love", "Kraftwerk", "7:15")
                ],
                "Autobahn": [
                    new Cancion("Autobahn", "Kraftwerk", "22:43")
                ]
            },
            "The Prodigy": {
                "The Fat of the Land": [
                    new Cancion("Firestarter", "The Prodigy", "4:40"),
                    new Cancion("Breathe", "The Prodigy", "5:35"),
                    new Cancion("Smack My Bitch Up", "The Prodigy", "5:42")
                ]
            },
            "Chemical Brothers": {
                "Dig Your Own Hole": [
                    new Cancion("Block Rockin' Beats", "Chemical Brothers", "5:13")
                ],
                "Surrender": [
                    new Cancion("Hey Boy Hey Girl", "Chemical Brothers", "4:50")
                ],
                "Push the Button": [
                    new Cancion("Galvanize", "Chemical Brothers", "6:33")
                ]
            },
            "Skrillex": {
                "Bangarang": [
                    new Cancion("Bangarang", "Skrillex", "3:35"),
                    new Cancion("First of the Year", "Skrillex", "4:22")
                ],
                "Scary Monsters and Nice Sprites": [
                    new Cancion("Scary Monsters and Nice Sprites", "Skrillex", "4:03")
                ]
            },
            "Bach": {
                "Obras Maestras": [
                    new Cancion("Toccata and Fugue in D minor", "Bach", "9:20"),
                    new Cancion("Air on the G String", "Bach", "5:10"),
                    new Cancion("Jesu, Joy of Man's Desiring", "Bach", "3:52")
                ]
            },
            "Vivaldi": {
                "The Four Seasons": [
                    new Cancion("The Four Seasons - Spring", "Vivaldi", "3:30"),
                    new Cancion("The Four Seasons - Summer", "Vivaldi", "5:40"),
                    new Cancion("The Four Seasons - Winter", "Vivaldi", "3:25")
                ]
            },
            "Chopin": {
                "Nocturnes": [
                    new Cancion("Nocturne Op. 9 No. 2", "Chopin", "4:20")
                ],
                "Valses": [
                    new Cancion("Waltz in D-flat major", "Chopin", "1:48"),
                    new Cancion("Fantaisie-Impromptu", "Chopin", "5:27")
                ]
            },
            "Ludovico Einaudi": {
                "Una Mattina": [
                    new Cancion("Una Mattina", "Ludovico Einaudi", "3:32"),
                    new Cancion("Nuvole Bianche", "Ludovico Einaudi", "5:57")
                ],
                "Divenire": [
                    new Cancion("Divenire", "Ludovico Einaudi", "6:47")
                ]
            }
        };
    }

    obtenerArtistas() 
    {
        return this.artistasDisponibles;
    }

    obtenerAlbumesPorArtista() 
    {
        return this.albumesPorArtista;
    }
}
