  // set waktu tampil slide
  var slideInterval = setInterval(nextSlide, 2000);

  // atur slide aktif pertama kali
  var currentSlide = 0;
  var slides = document.getElementsByClassName("slide");
  slides[currentSlide].classList.add("active");

  // fungsi untuk menampilkan slide berikutnya
  function nextSlide() {
    // atur slide berikutnya menjadi aktif dan slide saat ini menjadi tidak aktif
    slides[currentSlide].classList.remove("active");
    currentSlide++;

    // jika slide berikutnya tidak ditemukan, maka kembali ke slide pertama
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
  }

