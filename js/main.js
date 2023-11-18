document.querySelectorAll('.btn__waves').forEach(item => {
    btn = item.closest('.btn');
    item.style.height = parseInt(window.getComputedStyle(btn).width) + 'px';
})

function reloadPageOneTime() {
    if (!window.location.hash) {
        window.location = window.location + '#gnowbe';
        window.location.reload();
    }
}
setTimeout(reloadPageOneTime, 0);