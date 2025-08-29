const btn = document.querySelectorAll('button');

btn.forEach((e) => {
    e.addEventListener('click', () => {
        window.location.href = 'https://pay.hotmart.com/D101649130O?checkoutMode=10';
    })
})