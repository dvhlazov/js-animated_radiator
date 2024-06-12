document.addEventListener('DOMContentLoaded', () => {
    let radiatorLines = document.querySelectorAll('.radiator_line');
    let btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        radiatorLines.forEach(radiatorLine => {
            if (radiatorLine.classList.contains('toTheHot')) {
                radiatorLine.classList.remove('toTheHot');
                radiatorLine.classList.add('toTheCold');
            } else {
                radiatorLine.classList.remove('toTheCold');
                radiatorLine.classList.add('toTheHot');
            }
        });
    });
});