
  // Wait for the page to load
  document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('#nav-menu a');

    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  });


// JS snippet to add a custom class to iframes in Contact Us page 

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      iframe.classList.add("custom-map-iframe");
      iframe.removeAttribute("width");
      iframe.removeAttribute("height");
    }
  }, 100); // wait 100ms, adjust if needed
});


//  Custom JS for Floating Alert

  document.querySelectorAll('.floating-alert').forEach((alert, index) => {
    const fadeDelay = 5000 + index * 1000; // wait 5s + 1s per alert to stagger
    const fadeDuration = 1000; // 1 second fade

    setTimeout(() => {
      alert.classList.remove('show'); // starts fade-out
      setTimeout(() => {
        alert.remove(); // remove from DOM after fade completes
      }, fadeDuration);
    }, fadeDelay);
  });
