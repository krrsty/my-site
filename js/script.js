document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.js-cta');

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Напишите мне: kristinka232006@gmail.com');
        });
    });
});
