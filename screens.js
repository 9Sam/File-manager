const screen = {
main: `
------------------------------------------------------------
๐ Bienvenido al sistema administrador de archivos de Samuel
------------------------------------------------------------
Acciones posibles:
------------------
1. ๐ Crear un nuevo archivo
2. ๐ Abrir un archivo existente
3. โ๏ธ Renombrar un archivo
4. ๐งจ Borrar un archivo
5. ๐ด Salir
`,

carpetas:`
------------------------------------------------------------
Carpetas disponibles:
------------------------------------------------------------
โจ๏ธ [:q -> Salir]
    `,

archivos: `
------------------------------------------------------------
Archivos disponibles
------------------------------------------------------------
โจ๏ธ [:q -> Salir]
`,

archivoAbierto:`
------------------------------------------------------------
Archivos disponibles
------------------------------------------------------------
โจ๏ธ [:q -> Salir, :s -> Guardar, :sq -> Guardar y salir]
`

}

module.exports = screen;