document.querySelectorAll("section div").forEach(div => {
    div.innerHTML = Math.floor(Math.random() * 10);

    const r = Math.floor(Math.random() * 10);
    if (r <= 1) {
        div.classList.add('b-20');
    } else if (r <= 3) {
        div.classList.add('l-20');
    }

    const d = Math.floor(Math.random() * 10);
    if (d <= 3) {
        div.classList.add('d-1');
    } else if (d <= 6) {
        div.classList.add('d-1_5');
    }

    const du = Math.floor(Math.random() * 10);
    if (du <= 1) {
        div.classList.add('du-2');
    } else if (du <= 6) {
        div.classList.add('du-8');
    }
});

document.addEventListener("mousemove", function(event) {
const x = event.pageX;
const y = event.pageY;

document.querySelectorAll("section div").forEach(div => {
    const dx = div.offsetLeft + 50 - x;
    const dy = div.offsetTop + 50 - y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const score = Math.exp(dist * -0.004);

    if (dist <= 100) {
        div.style.transform = "scale(2.6)"
    } else if (dist <= 130) {
        div.style.transform = "scale(2.3)"
    } else if (dist <= 140) {
        div.style.transform = "scale(1.8)"
    } else if (dist <= 150) {
        div.style.transform = "scale(1.5)"
    } else if (dist <= 180) {
        div.style.transform = "scale(1.2)"
    } else if (dist <= 200) {
        div.style.transform = "scale(1.1)"
    } else {
        div.style.transform = "scale(1)"
    }

    //div.style.transform = "scale("+score+")";
})
})
