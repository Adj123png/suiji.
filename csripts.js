function spinWheel(wheelId) {
    const wheel = document.getElementById(wheelId).querySelector('ul');
    const randomDegree = Math.floor(Math.random() * 360) + 3600; // Ensure multiple full rotations
    wheel.style.transform = `rotate(${randomDegree}deg)`;
}
