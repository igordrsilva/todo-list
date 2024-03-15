export function isColorLight(hexColor: string) {
    // Remover o caractere '#' se presente
    hexColor = hexColor.replace('#', '');

    // Converter para valores RGB
    var r = parseInt(hexColor.substr(0, 2), 16);
    var g = parseInt(hexColor.substr(2, 2), 16);
    var b = parseInt(hexColor.substr(4, 2), 16);

    // Calcular o brilho (luminosidade)
    var brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Se o brilho for maior que 125, a cor é considerada clara
    if (brightness > 125) {
        return true;
    } else {
        return false;
    };
}