// Preloader functionality
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  
  // Hide preloader after minimum 3 seconds or when all resources are loaded
  setTimeout(() => {
    preloader.classList.add('preloader-hidden');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500); // Wait for fade out animation
  }, 3000);
});

// Contact Modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('contactModal');
  const quoteButtons = document.querySelectorAll('a[href="#contact"]');
  const closeBtn = document.querySelector('.close');
  const whatsappMessage = document.getElementById('whatsappMessage');
  
  // WhatsApp message animation every 15 seconds
  function showWhatsAppMessage() {
    whatsappMessage.classList.add('show');
    setTimeout(() => {
      whatsappMessage.classList.remove('show');
    }, 3000); // Show for 3 seconds
  }
  
  // Start showing message after 5 seconds, then every 15 seconds
  setTimeout(showWhatsAppMessage, 5000);
  setInterval(showWhatsAppMessage, 13000);
  
  // Service to project navigation
  const serviceLinks = document.querySelectorAll('.service-more[data-project]');
  serviceLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const projectType = this.getAttribute('data-project');
      
      // Scroll to projects section
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
      
      // Highlight relevant project after scroll
      setTimeout(() => {
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => item.classList.remove('highlight'));
        
        // Map service types to project indices
        const projectMap = {
          'siding': 0,
          'coping': 1, 
          'flashing': 2,
          'soffit': 4,
          'eavestrough': 5
        };
        
        const targetIndex = projectMap[projectType];
        if (targetIndex !== undefined && galleryItems[targetIndex]) {
          galleryItems[targetIndex].classList.add('highlight');
          setTimeout(() => {
            galleryItems[targetIndex].classList.remove('highlight');
          }, 3000);
        }
      }, 800);
    });
  });
  
  // Open modal when clicking Request Quote
  quoteButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close modal
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  closeBtn.addEventListener('click', closeModal);
  
  // Close when clicking outside modal
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });
});