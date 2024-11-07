// Function to initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        centeredSlides: true,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
});

// toggling menu and search bar
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
    document.getElementById("close-icon").classList.add("active");
    document.getElementById("menu-bars").style.display = "none";
    document.getElementById("search-icon").style.display = "none";
}

function closeMenu() {
    document.getElementById("nav-links").classList.remove("active");
    document.getElementById("search-bar").classList.remove("active");
    document.getElementById("close-icon").classList.remove("active");
    document.getElementById("menu-bars").style.display = "block";
    document.getElementById("search-icon").style.display = "block";
}

function toggleSearch() {
    document.getElementById("search-bar").classList.toggle("active");
    document.getElementById("close-icon").classList.add("active");
    document.getElementById("menu-bars").style.display = "none";
    document.getElementById("search-icon").style.display = "none";
}

function searchProduct() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');
    let found = false;

    // Check each product name to see if it matches the search query
    productItems.forEach(item => {
        const productName = item.querySelector('p').innerText.toLowerCase();
        if (productName.includes(query)) {
            item.style.display = 'block';
            found = true;
        } else {
            item.style.display = 'none';
        }
    });

    const alert = document.getElementById('no-results-alert');
    if (!found) {
        // Show the alert message if no results are found
        alert.style.display = 'block';
        
        // Hide the alert after 3 seconds and reset all products to be visible
        setTimeout(() => {
            alert.style.display = 'none';
            productItems.forEach(item => {
                item.style.display = 'block';
            });
        }, 3000);
    } else {
        // Hide alert if results are found
        alert.style.display = 'none';
    }
}


// Form submission with WhatsApp integration
document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var enquiryType = document.getElementById('enquiry-type').value;

    // Make sure to replace this with your actual phone number in the right format
    var phoneNumber = 'whatsappnumber'; // without '+' or '0' before your number

    var whatsappURL = `https://wa.me/${phoneNumber}?text=Name:%20${encodeURIComponent(name)}%0APhone:%20${encodeURIComponent(phone)}%0AMessage:%20${encodeURIComponent(message)}%0AEnquiry%20Type:%20${encodeURIComponent(enquiryType)}`;

    window.open(whatsappURL, '_blank');
});


// Set the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();
