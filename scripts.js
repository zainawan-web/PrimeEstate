
// =====================================
// 1. PROPERTY SEARCH FUNCTIONALITY
// =====================================

const searchForm = document.querySelector(".search-form");

if (searchForm) {

    searchForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get search values
        const selectedType =
            document.getElementById("propertyType").value.toLowerCase();

        const selectedStatus =
            document.getElementById("propertyStatus").value.toLowerCase();

        const enteredLocation =
            document.getElementById("location").value.trim().toLowerCase();

        // Select all property cards
        const propertyCards =
            document.querySelectorAll(".property-card");

        let foundProperties = 0;

        // Check every property card
        propertyCards.forEach(function (card) {

            const type = (card.dataset.type || "").toLowerCase();
            const status = (card.dataset.status || "").toLowerCase();
            const location = (card.dataset.location || "").toLowerCase();

            const typeMatches =
                selectedType === "" || type === selectedType;

            const statusMatches =
                selectedStatus === "" || status === selectedStatus;

            const locationMatches =
                enteredLocation === "" ||
                location.includes(enteredLocation);

            // Show matching properties
            if (typeMatches && statusMatches && locationMatches) {

                card.style.display = "";
                foundProperties++;

            } else {

                card.style.display = "none";

            }

        });

        // Display search result
        alert(
            foundProperties + " matching property/properties found."
        );

    });

}


// =====================================
// 2. MOBILE NAVIGATION MENU
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    // Open and close menu
    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

    // Close menu after clicking a navigation link
    const navigationLinks = navLinks.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

    // Close menu when Escape key is pressed
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

}


// =====================================
// 3. CONTACT FORM FUNCTIONALITY
// =====================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function () {

        const submitButton =
            contactForm.querySelector("button[type='submit']");

        submitButton.textContent = "Sending...";
        submitButton.disabled = true;

    });

}
