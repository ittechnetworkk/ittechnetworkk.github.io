document.addEventListener('DOMContentLoaded', function() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress-bar';
    document.body.appendChild(progressBar);

    // Calculate and update progress
    function updateProgress() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.width = progress + '%';
    }

    // Add scroll event listener
    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);

    // Initial progress calculation
    updateProgress();
}); 