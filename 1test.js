let btn1 = document.getElementById("switch-antrieb");
let btn2 = document.getElementById("switch-holodeck");
let btn3 = document.getElementById("switch-hitzeschild");
let btn4 = document.getElementById("switch-transporter");

const links = [btn1, btn2, btn3, btn4];

links.forEach(link => {
    if (!link) return;
    link.dataset.state = 'on';
    link.style.cursor = 'pointer';

    link.addEventListener('click', (e) => {
        e.preventDefault();
        const isOn = link.dataset.state === 'on';

        if (isOn) {
            link.textContent = 'Abgeschaltet';
            link.style.color = '#ff0000ff';
            link.dataset.state = 'off';
        } else {
            link.textContent = 'Abschalten!';
            link.style.color = '';
            link.dataset.state = 'on';
        }
    });
});

