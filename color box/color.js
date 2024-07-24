function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('changeColorButton').addEventListener('click', function() {
    const newColor = getRandomColor();
    document.getElementById('colorBox').style.backgroundColor = newColor;
});
