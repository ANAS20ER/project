document.addEventListener('DOMContentLoaded', function() {

    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    // --- (Scroll to Top Button) ---
    const scrollTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
if  (getElementById('name') == null && getElementById('email') == null  || getElementById('email') == null ){
    alert("errer : données non saisies");
}else{
    if(getElementById('email').includes('@') == false){
        alert("errer : email non valide");
    }
}
