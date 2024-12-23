document.addEventListener("DOMContentLoaded", () => {
    const destinations = [
        {
            id: "card1",
            title: "Nairobi",
            locationImage: "images/Nairobi/nairobi-national-park-main-gate.jpeg",
            modalId: "myModal1",
            modalClass: "nairobi-modal",
            modalImage: "images/Nairobi/nairobi-national-park-main-gate.jpeg",
            destinationName: "Nairobi National Park",
            description: "Just 7 kilometers from Nairobi’s city center, Nairobi National Park is a unique wildlife haven where urban meets untamed nature. Spanning over 117 square kilometers, it is Kenya’s first national park, offering a stunning backdrop of skyscrapers juxtaposed with vast savannahs. Home to over 100 mammal species, including lions, giraffes, buffalo, rhinos, and cheetahs, the park is perfect for game drives, picnics, and nature walks. Bird enthusiasts can spot more than 400 bird species throughout the year. Highlights include the David Sheldrick Elephant Orphanage and the scenic Ivory Burning Site Monument, a powerful symbol of Kenya’s anti-poaching efforts.",
        },
        {
            id: "card2",
            title: "Nakuru",
            locationImage: "images/Nairobi/flock-of-flamingos-in-lake-nakuru.jpg",
            modalId: "myModal2",
            modalClass: "nakuru-modal",
            modalImage: "images/Nairobi/download (1).jpeg",
            destinationName: "Lake Nakuru National Park",
            description: "Lake Nakuru National Park is a stunning wildlife haven in Kenya's Rift Valley, renowned for its rich biodiversity and picturesque landscapes. The park is centered around the alkaline Lake Nakuru, which attracts thousands of flamingos, creating a mesmerizing pink shoreline. It is home to a variety of wildlife, including rhinos, lions, leopards, and giraffes, alongside over 400 bird species.",
        },
        {
            id: "card3",
            title: "Central Kenya",
            locationImage: "images/Nairobi/white-water-rafting-sagana.jpg",
            modalId: "myModal3",
            modalClass: "central-modal",
            modalImage: "images/Nairobi/Solio-ranch-768x512.jpg",
            destinationName: "Solio Ranch",
            description: "Central Kenya is a region of breathtaking landscapes, vibrant culture, and rich agricultural heritage. Dominated by Mount Kenya, the area offers diverse attractions ranging from lush tea plantations to dense forests teeming with wildlife.",
        },
        {
            id: "card4",
            title: "Kisumu",
            locationImage: "images/Nairobi/unnamed.jpg",
            modalId: "myModal4",
            modalClass: "kisumu-modal",
            modalImage: "images/Nairobi/images (2).jpeg",
            destinationName: "Kisumu Impala Sanctuary",
            description: "Kisumu Impala Sanctuary is a serene wildlife refuge on the shores of Lake Victoria, near Kisumu City. It provides a peaceful retreat with stunning views of the lake and diverse wildlife.",
        },
        {
            id: "card5",
            title: "Malindi",
            locationImage:"images/Nairobi/sandiestropicalvillage4-1.jpg" ,
            modalId: "myModal5",
            modalClass: "malindi-modal",
            modalImage: "images/Nairobi/malindi-bg1.webp",
            destinationName: "Vasco da Gama Pillar",
            description: "The Vasco da Gama Pillar in Malindi, Kenya, is one of the oldest European monuments in Africa, built in 1498 by Portuguese explorer Vasco da Gama during his voyage to India. Standing on a cliff overlooking the Indian Ocean, the coral stone pillar served as a navigational landmark and symbol of Portuguese influence in the region. Adorned with a cross, the pillar reflects the historical interaction between Europe and East Africa during the Age of Exploration. Its location offers breathtaking ocean views, making it a significant cultural and historical attraction for visitors to Malindi."
        },
        {
            id: "card6",
            title: "Diani",
            locationImage: "images/Nairobi/Diani-Beach-2-scaled.jpg",
            modalId: "myModal6",
            modalClass: "malindi-modal",
            modalImage: "images/Nairobi/images (3).jpeg",
            destinationName: "kongo Mosque",
            description:"The Kongo Mosque in Diani, Kenya, is a historic landmark and one of the oldest mosques on the East African coast, dating back to the 14th century. Built in Swahili-Arabic architectural style, it reflects the rich cultural and religious heritage of the coastal region. Surrounded by lush greenery and situated near the Indian Ocean, the mosque is a serene spot for spiritual reflection and a testament to the centuries-old Islamic influence in the area. Its proximity to the beach enhances its tranquil ambiance, making it a must-visit site for history enthusiasts and those exploring Diani’s cultural gems."
        },
        {
            id: "card7",
            title: "Maasai Mara",
            locationImage:"images/Nairobi/Masai-Mara-wildlife-reserve-1200x675.webp" ,
            modalId: "myModal7",
            modalClass: "mara-modal",
            modalImage: "images/Nairobi/maasai-mara-wildlife.jpg",
            destinationName: "Maasai-mara",
            description:"The Maasai Mara National Reserve, located in southwestern Kenya, is a world-famous wildlife conservation area and part of the greater Serengeti ecosystem. Covering over 1,500 square kilometers, it is renowned for its breathtaking landscapes of rolling savannahs, acacia woodlands, and dramatic escarpments. The reserve is home to an incredible diversity of wildlife, including the Big Five (lion, elephant, buffalo, leopard, and rhino) and over 450 bird species. The Maasai Mara is most celebrated for the Great Migration, an annual spectacle where millions of wildebeest, zebras, and gazelles traverse the Mara River, often encountering crocodiles and predators. Rich in cultural heritage, the area also provides an opportunity to engage with the Maasai people and their vibrant traditions. A visit to the Maasai Mara offers unmatched safari experiences, making it a top global destination for nature and wildlife enthusiasts."
        },
        {
            id: "card8",
            title: "Laikipia",
            locationImage: "images/Nairobi/LWC_Wilddogs_Dog+family+rocks+PL.jpg",
            modalId: "myModal8",
            modalClass: "laikipia-modal",
            modalImage: "images/Nairobi/Ol-Pejeta-Trip-62-1024x683.jpg",
            destinationName: "Ol Pejeta Conservancy",
            description:"Ol Pejeta Conservancy, located in Laikipia County, Kenya, is a renowned wildlife sanctuary celebrated for its conservation efforts and biodiversity. Spanning over 90,000 acres, it is home to the Big Five and the last two remaining northern white rhinos in the world, safeguarded under 24-hour armed surveillance. The conservancy is also a refuge for rescued chimpanzees at the Sweetwaters Chimpanzee Sanctuary. Visitors can enjoy game drives, guided bush walks, and night safaris, experiencing close encounters with diverse wildlife. With a commitment to sustainable tourism and community engagement, Ol Pejeta combines conservation, education, and adventure in a stunning natural setting."
        },

    ];

    const destinationContainer = document.getElementById("destination-container");
    const modalContainer = document.getElementById("modalsContainer");

    destinations.forEach(destination => {
        // Create the card element
        let destinationCard = document.createElement("div");
        destinationCard.classList.add("col-md-3");
        destinationCard.innerHTML = `
            <div class="card" id="${destination.id}">
                <img src="${destination.locationImage}" class="card-img-top clickable" alt="${destination.destinationName}">
                <div class="card-body">
                    <h5 class="card-title">${destination.title}</h5>
                </div>
            </div>
        `;
        destinationContainer.appendChild(destinationCard);

        // Create the modal element
        let modal = document.createElement("div");
        modal.classList.add("modal", destination.modalClass);
        modal.id = destination.modalId;
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h1>${destination.destinationName}</h1>
                <div class="image-container">
                    <img src="${destination.modalImage}" alt="${destination.destinationName}">
                </div>
                <div class="modal-description">
                <p>${destination.description}</p>
                </div>
            </div>
        `;
        modalContainer.appendChild(modal);

        // Add event listeners for opening the modal
        const card = document.querySelector(`#${destination.id}`);
        card.addEventListener("click", () => {
            modal.style.display = "inline";
        });

        // Add event listener for closing the modal
        const closeModalBtn = modal.querySelector(".close");
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    });

    // Global event listener to close modals when clicking outside
    window.addEventListener("click", (event) => {
        const openModals = document.querySelectorAll(".modal");
        openModals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});

// Get modal element
const bookingModal = document.getElementById('bookingModal');
const openBookingModalButton = document.getElementById('open-booking-modal');
const closeBookingModalButton = document.getElementById('closeBookingModal');

// Open modal
openBookingModalButton.onclick = function() {
    bookingModal.style.display = 'block';
}

// Close modal
closeBookingModalButton.onclick = function() {
    bookingModal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == bookingModal) {
        bookingModal.style.display = 'none';
    }
}
// Get the submit button
const submitButton = document.getElementById('submit-booking');

// Add event listener to the submit button
submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const bookingData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        date: document.getElementById('date').value,
        destination: document.getElementById('destination').value,
        details: document.getElementById('details').value
    };

    // Send data to the server
    fetch('/saveBooking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Close the modal after successful submission
        bookingModal.style.display = 'none';
        // Optionally, reset the form
        document.getElementById('booking-form').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  
});

// Get modal element
const contactModal = document.getElementById('contactModal');
const openContactModalButton = document.getElementById('open-contact-modal'); // Get the Contact Us link
const closeContactModalButton = document.getElementById('closeContactModal');

// Open modal when the Contact Us link is clicked
openContactModalButton.onclick = function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    contactModal.style.display = 'block'; // Show the modal
}

// Close modal
closeContactModalButton.onclick = function() {
    contactModal.style.display = 'none'; // Hide the modal
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == contactModal) {
        contactModal.style.display = 'none'; // Hide the modal
    }
}

// Handle contact form submission
document.getElementById('contact-form-modal').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const contactData = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        message: document.getElementById('contact-message').value
    };

    // Send data to the server (you can adjust the endpoint as needed)
    fetch('/sendContact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Close the modal after successful submission
        contactModal.style.display = 'none';
        // Optionally, reset the form
        document.getElementById('contact-form-modal').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Get modal element
const addDestinationModal = document.getElementById('addDestinationModal');
const openAddDestinationModalButton = document.getElementById('open-modal'); // Get the Add Destination link
const closeAddDestinationModalButton = document.getElementById('closeAddDestinationModal');

// Open modal when the "Add Destination" link is clicked
openAddDestinationModalButton.onclick = function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    addDestinationModal.style.display = 'block'; // Show the modal
}

// Close modal
closeAddDestinationModalButton.onclick = function() {
    addDestinationModal.style.display = 'none'; // Hide the modal
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == addDestinationModal) {
        addDestinationModal.style.display = 'none'; // Hide the modal
    }
}

// Handle add destination form submission
document.getElementById('add-destination-form').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const newDestination = {
        name: document.getElementById('destination-name').value,
        description: document.getElementById('destination-description').value,
        image: document.getElementById('destination-image').value
    };

    // Send data to the server (you can adjust the endpoint as needed)
    fetch('/addDestination', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDestination)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Close the modal after successful submission
        addDestinationModal.style.display = 'none';
        // Optionally, reset the form
        document.getElementById('add-destination-form').reset();
        // Optionally, update the destination list on the page
        // You can call a function to refresh the destination list here
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Get modal element
const registerModal = document.getElementById('registerModal');
const openRegisterModalButton = document.getElementById('open-register-modal'); // Assuming this is the button to open the modal
const closeRegisterModalButton = document.getElementById('closeRegisterModal');

// Open modal when the "Register" link is clicked
openRegisterModalButton.onclick = function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    registerModal.style.display = 'block'; // Show the modal
}

// Close modal
closeRegisterModalButton.onclick = function() {
    registerModal.style.display = 'none'; // Hide the modal
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == registerModal) {
        registerModal.style.display = 'none'; // Hide the modal
    }
}

// Handle registration form submission
document.getElementById('registration-form').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const registrationData = {
        name: document.getElementById('reg-name').value,
        email: document.getElementById('reg-email').value,
        password: document.getElementById('reg-password').value
    };

    // Send data to the server (you can adjust the endpoint as needed)
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally, you can show a success message or redirect the user
        alert('Registration successful!');
        // Close the modal after successful submission
        registerModal.style.display = 'none';
        // Reset the form
        document.getElementById('registration-form').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Registration failed. Please try again.');
    });
}

// Get modal elements
const paymentModal = document.getElementById('paymentModal');
const openPaymentModalButton = document.getElementById('openModal'); // Assuming this is the button to open the modal
const closePaymentModalButton = document.getElementById('closePaymentModal');

// Open modal when the "Choose Payment Method" button is clicked
openPaymentModalButton.onclick = function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    paymentModal.style.display = 'block'; // Show the modal
}

// Close modal
closePaymentModalButton.onclick = function() {
    paymentModal.style.display = 'none'; // Hide the modal
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == paymentModal) {
        paymentModal.style.display = 'none'; // Hide the modal
    }
}

// Add event listener for the Confirm Payment button
document.getElementById('confirmPayment').onclick = function() {
    // Logic to handle payment confirmation
    // You can call the PayPal payment processing function here if needed
    alert('Payment method confirmed!');
    paymentModal.style.display = 'none'; // Close the modal after confirmation
}


