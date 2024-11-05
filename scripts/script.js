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

// Initialize Swiper for interior items
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Swiper for Interior Designs
    const interiorSwiper = new Swiper(".interior-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".interior-next",
            prevEl: ".interior-prev",
        },
        pagination: {
            el: ".interior-pagination",
            clickable: true,
        },
        allowTouchMove: false, // Disable swipe functionality for navigation-only control
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



// Function to search for products
function searchProduct() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        const productName = item.querySelector('p').innerText.toLowerCase();
        item.style.display = productName.includes(query) ? 'block' : 'none';
    });
}

// Form submission with WhatsApp integration
document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var enquiryType = document.getElementById('enquiry-type').value;

    // Make sure to replace this with your actual phone number in the right format
    var phoneNumber = '7200751812'; // without '+' or '0' before your number

    var whatsappURL = `https://wa.me/${7200751812}?text=Name:%20${encodeURIComponent(name)}%0APhone:%20${encodeURIComponent(phone)}%0AMessage:%20${encodeURIComponent(message)}%0AEnquiry%20Type:%20${encodeURIComponent(enquiryType)}`;

    window.open(whatsappURL, '_blank');
});
