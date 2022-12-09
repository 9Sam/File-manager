const screen = {
main: `
------------------------------------------------------------
😄 Bienvenido al sistema administrador de archivos de Samuel
------------------------------------------------------------
Acciones posibles:
------------------
1. 📄 Crear un nuevo archivo
2. 📖 Abrir un archivo existente
3. ✏️ Renombrar un archivo
4. 🧨 Borrar un archivo
5. 🔴 Salir
`,

carpetas:`
------------------------------------------------------------
Carpetas disponibles:
------------------------------------------------------------
⌨️ [:q -> Salir]
    `,

archivos: `
------------------------------------------------------------
Archivos disponibles
------------------------------------------------------------
⌨️ [:q -> Salir]
`,

archivoAbierto:`
------------------------------------------------------------
Archivos disponibles
------------------------------------------------------------
⌨️ [:q -> Salir, :s -> Guardar, :sq -> Guardar y salir]
`

}

module.exports = screen;