window.addEventListener('DOMContentLoaded', () => {
    const heroText = document.getElementById('heroText');
    heroText.classList.add('show');
  });

  // Menambahkan alert saat klik gambar
  const certImages = document.querySelectorAll('.cert');
  certImages.forEach(img => {
    img.addEventListener('click', () => {
      alert("Photoshoot PEKSIMINAS 2024.");
    });
  });

  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    certImages.forEach(img => {
      const rect = img.getBoundingClientRect();
      const imgX = rect.left + rect.width / 2;
      const imgY = rect.top + rect.height / 2;
      const distance = Math.hypot(mouseX - imgX, mouseY - imgY);

      // Jika kursor dekat gambar (<200px), beri animasi
      if (distance < 200) {
        img.classList.add('near');
      } else {
        img.classList.remove('near');
      }
    });
  });

