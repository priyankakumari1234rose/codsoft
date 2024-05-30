document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-container img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            img.classList.toggle('enlarged');
        });
    });
});

// Enlarged class in CSS
const styles = `
.enlarged {
    position: fixed;
    top: 50%;
    left: 50%;
    width: auto;
    height: 80%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    border-radius: 0;
}
.enlarged + .overlay {
    display: block;
}
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Overlay for enlarged images
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

overlay.addEventListener('click', function() {
    document.querySelectorAll('.enlarged').forEach(img => {
        img.classList.remove('enlarged');
    });
});
