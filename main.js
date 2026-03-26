import './style.css';

console.log('System initialized: Cyberpunk Kosen Site');

// Add a simple flicker effect to random elements
document.querySelectorAll('.cyber-border').forEach(el => {
    setInterval(() => {
        if (Math.random() > 0.98) {
            el.style.opacity = '0.5';
            setTimeout(() => el.style.opacity = '1', 50);
        }
    }, 100);
});
