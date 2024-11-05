// Define products array with descriptions
const products = [
    { name: 'Hammer', image: 'assets/images/hardware/hammer.webp', category: 'Plywood & Hardware', description: 'A sturdy hammer for all your construction needs.' },
    { name: 'Drill', image: 'assets/images/hardware/drill.webp', category: 'Plywood & Hardware', description: 'Powerful drill for precise holes and fasteners.' },
    { name: 'Screwdriver', image: 'assets/images/hardware/screwdriver.webp', category: 'Plywood & Hardware', description: 'Versatile screwdriver for tightening and loosening screws.' },
    { name: 'Wrench', image: 'assets/images/hardware/wrench.webp', category: 'Plywood & Hardware', description: 'Durable wrench for loosening and tightening bolts.' },
    { name: 'Pliers', image: 'assets/images/hardware/pliers.webp', category: 'Plywood & Hardware', description: 'Handy pliers for gripping and cutting.' },
    { name: 'Chisel', image: 'assets/images/hardware/chisel.webp', category: 'Plywood & Hardware', description: 'Sharp chisel for precise wood and metal carving.' },
    { name: 'Saw', image: 'assets/images/hardware/saw.webp', category: 'Plywood & Hardware', description: 'High-quality saw for cutting through tough materials.' },
    { name: 'Nail Gun', image: 'assets/images/hardware/nail-gun.webp', category: 'Plywood & Hardware', description: 'Fast and powerful nail gun for quick construction jobs.' },
    { name: 'Oak Plywood', image: 'assets/images/plywood/oak-plywood.webp', category: 'Plywood & Hardware', description: 'Premium oak plywood for durable furniture.' },
    { name: 'Cherry Plywood', image: 'assets/images/plywood/cherry-plywood.webp', category: 'Plywood & Hardware', description: 'Elegant cherry plywood for a smooth finish.' },
    { name: 'Mahogany Plywood', image: 'assets/images/plywood/mahogany-plywood.webp', category: 'Plywood & Hardware', description: 'Luxurious mahogany plywood for premium designs.' },
    { name: 'Pine Plywood', image: 'assets/images/plywood/pine-plywood.webp', category: 'Plywood & Hardware', description: 'Affordable and versatile pine plywood.' },
    { name: 'Fir Plywood', image: 'assets/images/plywood/fir-plywood.webp', category: 'Plywood & Hardware', description: 'Strong fir plywood for heavy-duty applications.' },
    { name: 'Beech Plywood', image: 'assets/images/plywood/beech-plywood.webp', category: 'Plywood & Hardware', description: 'Durable beech plywood for high-performance use.' },
    { name: 'Laminated Plywood', image: 'assets/images/plywood/laminated-plywood.webp', category: 'Plywood & Hardware', description: 'Weather-resistant laminated plywood for outdoor use.' },
    { name: 'Veneered Plywood', image: 'assets/images/plywood/veneered-plywood.webp', category: 'Plywood & Hardware', description: 'Smooth veneered plywood for decorative finishes.' },
]

// Function to load products dynamically
function loadProducts() {
    const productList = document.querySelector('.products .product-list');
    const interiorList = document.querySelector('#interior-items .interior-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.setAttribute('onclick', `showProductDetails('${product.name}', '${product.description}', '${product.image}')`);

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
        `;

        // Append to the correct section
        if (product.category === 'Plywood & Hardware') {
            productList.appendChild(productItem);
        } else if (product.category === 'Interior Designs') {
            const interiorSlide = document.createElement('div');
            interiorSlide.classList.add('swiper-slide');
            interiorSlide.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
            `;
            interiorList.appendChild(interiorSlide);
        }
    });

    // Update Swiper after items are added
    interiorSwiper.update();
}

// Call the loadProducts function on page load
window.onload = loadProducts;

// Function to display product details in a modal
function showProductDetails(name, description, image) {
    // Set the modal content
    document.getElementById('modal-product-name').innerText = name;
    document.getElementById('modal-product-description').innerText = description;
    document.getElementById('modal-product-image').src = image;

    // Show the modal
    document.getElementById('product-modal').style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById('product-modal').style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('product-modal');
    if (event.target == modal) {
        closeModal();
    }
};