function sizeBgElement() {
    const limit = document.getElementById("projects").offsetTop;
    document.getElementById("hero").style.height = limit + 'px';
}

const observer = new IntersectionObserver(entries => {
    entries.forEach( entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
            //observer.unobserve(entry.target);
        }
        else{
            entry.target.classList.remove('visible');
        }
    });
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
sizeBgElement();
window.addEventListener('resize', sizeBgElement)