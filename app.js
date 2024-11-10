var typed = new Typed(".multiple-text",{
    strings:["Developer","Coder"],
    typeSpeed: 100,
    backSpeed: 100,
    backdelay: 1000,
    loop: true
});

const downloadButton = document.querySelector('.btn.btn-outline-info');
downloadButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = './PDF/Resume.pdf';
  link.download = 'Vudattu Praneethnadh Resume.pdf';
  link.click();
});
