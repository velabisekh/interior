// Interior items data
const interiorItems = [
    { name: 'Living Room', image: 'assets/images/interior/living-room.webp', category: 'Interior Designs', description: 'Modern and stylish living room designs.' },
    { name: 'Bedroom', image: 'assets/images/interior/bedroom.webp', category: 'Interior Designs', description: 'Comfortable and elegant bedroom setups.' },
    { name: 'Kitchen', image: 'assets/images/interior/kitchen.webp', category: 'Interior Designs', description: 'Functional and beautiful kitchen interiors.' },
    { name: 'Bathroom', image: 'assets/images/interior/bathroom.webp', category: 'Interior Designs', description: 'Luxurious bathroom designs for relaxation.' },
    { name: 'Dining Room', image: 'assets/images/interior/dining-room.webp', category: 'Interior Designs', description: 'Elegant dining room spaces for gatherings.' },
    { name: 'Home Office', image: 'assets/images/interior/home-office.webp', category: 'Interior Designs', description: 'Productive and ergonomic home office designs.' },
    { name: 'Entrance', image: 'assets/images/interior/entrance.webp', category: 'Interior Designs', description: 'Welcoming and stylish entrance designs.' },
    { name: 'Garden', image: 'assets/images/interior/garden.webp', category: 'Interior Designs', description: 'Lush garden designs to bring nature home.' },
    { name: 'Patio', image: 'assets/images/interior/patio.webp', category: 'Interior Designs', description: 'Relaxing patio setups for outdoor enjoyment.' },
    { name: 'Balcony', image: 'assets/images/interior/balcony.webp', category: 'Interior Designs', description: 'Cozy and stylish balcony spaces.' }
];

// Function to load interior items into the Swiper
function loadInteriorItems() {
    const swiperWrapper = document.querySelector('.interior-list');

    interiorItems.forEach(item => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `
            <img src="${item.image}" alt="${item.name}" onclick="openInteriorDetails('${item.name}', '${item.image}', '${item.description}')">
            <p class="interior-name">${item.name}</p>
        `;
        swiperWrapper.appendChild(slide);
    });
}

// Function to open the interior details modal
function openInteriorDetails(name, imageSrc, description) {
    document.getElementById("modal-name").innerText = name;
    document.getElementById("modal-image").src = imageSrc;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("interior-modal").style.display = "block";
}

// Function to close the modal
function closeInteriorModal() {
    document.getElementById("interior-modal").style.display = "none";
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("interior-modal");
    if (event.target == modal) {
        closeInteriorModal();
    }
};

// Initialize Swiper and load items when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    loadInteriorItems();

    // Initialize Swiper for Interior Designs
    const interiorSwiper = new Swiper(".interior-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true, // Enable looping for continuous navigation
        autoplay: {
            delay: 3000, // Auto-pagination delay in milliseconds
            disableOnInteraction: false, // Continue autoplay even after user interaction
        },
        navigation: {
            nextEl: ".interior-next",
            prevEl: ".interior-prev",
        },
        pagination: {
            el: ".interior-pagination",
            clickable: true, // Allows clicking on pagination dots to navigate
            dynamicBullets: true, // Makes pagination bullets responsive
        },
    });
});
