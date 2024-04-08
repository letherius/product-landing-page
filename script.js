// Add interactivity
const features = document.querySelectorAll('.feature');
features.forEach((feature) => {
    feature.addEventListener('click', () => {
        alert(`You clicked on "${feature.querySelector('h2').textContent}"! 🎉`);
    });
});
