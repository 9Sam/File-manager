function getTextWithColor(text, color){
    const existingColors = {
        black: `${text}`.black,
        white: `${text}`.white,
        red: `${text}`.red,
        green: `${text}`.green,
        orange: `${text}`.orange,
        magenta: `${text}`.magenta,
        cyan: `${text}`.cyan,
        gray: `${text}`.gray,
        grey: `${text}`.grey,
        brightRed: `${text}`.brightRed,
        brightGreen: `${text}`.brightGreen,
        brightYellow: `${text}`.brightYellow,
        brightBlue: `${text}`.brightBlue,   
        brightMagenta: `${text}`.brightMagenta,
        brightCyan: `${text}`.brightCyan,
        brightWhite: `${text}`.brightWhite
    }

    if(existingColors.hasOwnProperty(color)){
        return `>> ${existingColors[color]}`
    }else{
        return `🌳🌳 Espero estes pasando un gran día 🌳🌳`;
    }
}

module.exports = getTextWithColor;