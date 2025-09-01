
// Navigation functionality
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });

  // Remove active class from all nav buttons
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => {
    btn.classList.remove('active');
  });

  // Show selected page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Add active class to clicked nav button
  const clickedButton = event.target;
  clickedButton.classList.add('active');

  // Scroll to top when changing pages
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Form interaction helpers
document.addEventListener('DOMContentLoaded', function() {
  // Add form submission handlers (for future enhancement)
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Please text 616-516-9613 with your information!');
    });
  });

  // Add hover effects to staff members
  const staffMembers = document.querySelectorAll('.staff-member');
  staffMembers.forEach(member => {
    member.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.02)';
    });

    member.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Add click to call functionality for phone numbers
  const phoneNumbers = document.querySelectorAll('strong');
  phoneNumbers.forEach(phone => {
    if (phone.textContent.includes('616-516-9613')) {
      phone.style.cursor = 'pointer';
      phone.style.textDecoration = 'underline';
      phone.addEventListener('click', function() {
        if (confirm('Would you like to text Happy Eats™?')) {
          window.open('sms:616-516-9613', '_blank');
        }
      });
    }
  });
});
