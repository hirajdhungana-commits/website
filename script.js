
/* =========================
   MOTORCYCLE DATA
========================= */

const bikes = {
    "Scrambler 400X": {
        description:
            "A versatile scrambler-style motorcycle designed for road riding and light off-road adventures. Contact your Triumph dealer for current specifications and pricing.",

        image:
            "https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto:eco/sitecoremedialibrary/media-library/images/motorcycles/modern-classics/t%20series/scrambler%20400%20x/scrambler%20400%20x%20family%20page/scrambler-400-x-my24-family-hero-1-1920x1080.jpg"
    
        },

    "Scrambler XC": {
        description:
            "Explore this scrambler-inspired motorcycle selection. Contact your dealer to confirm the exact model name, specifications, and availability.",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOt0Rs0KZWSMDQW2BsaDMGmA7xeVnt_cUX0tNMJIoFfQ33xj76kDzFwCE&s=10"
    },

    "Speed 400": {
        description:
            "A modern roadster with classic styling, designed for enjoyable everyday riding. Contact your local Triumph dealer for current specifications and pricing.",

        image:
            "https://english.onlinekhabar.com/wp-content/uploads/2024/09/image-109.jpg"
    },

    "Speed T4": {
        description:
            "A roadster with distinctive styling and everyday riding appeal. Ask your local dealer about the latest specifications and availability.",

        image:
            "https://media.triumphmotorcycles.co.uk/image/upload/v1739784734/sitecoremedialibrary/media-library/images/motorcycles/modern-classics/my25/bajaj%20-%20india/speed%20t4/2025-speed-t4/my25-speed-t4-r2r-hero-1920x1080.jpg"
    },

    "Tracker 400": {
        description:
            "Discover classic-inspired motorcycle styling and timeless road presence. Contact your dealer to confirm the exact model name and specifications.",

        image:
            "https://media.triumphmotorcycles.co.uk/image/upload/v1765179803/Tracker_400_OE_MY26_13550_JP_jiyrpb.jpg"
    }
};


/* =========================
   SELECT HTML ELEMENTS
========================= */

const bikeButtons =
    document.querySelectorAll(".bike-button");

const bikeInfo =
    document.getElementById("bike-info");

const bikeName =
    document.getElementById("bike-name");

const bikeDescription =
    document.getElementById("bike-description");

const bikeImage =
    document.getElementById("bike-image");

const closeButton =
    document.getElementById("close-button");


/* =========================
   SHOW MOTORCYCLE DETAILS
========================= */

function showBike(name) {

    // Get the selected motorcycle information
    const bike = bikes[name];

    // Stop if the model does not exist
    if (!bike) {
        return;
    }

    // Update the model name and description
    bikeName.textContent = name;
    bikeDescription.textContent = bike.description;

    // Update the image for the selected motorcycle
    bikeImage.src = bike.image;
    bikeImage.alt = name + " motorcycle";

    // Show the detail panel
    bikeInfo.hidden = false;

    // Highlight the selected button
    bikeButtons.forEach(function (button) {

        const selected =
            button.dataset.bike === name;

        button.classList.toggle(
            "active",
            selected
        );

        button.setAttribute(
            "aria-pressed",
            String(selected)
        );

    });

}


/* =========================
   MAKE BUTTONS CLICKABLE
========================= */

bikeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Read the motorcycle name from the button
        const selectedBike = button.dataset.bike;

        // Display its details
        showBike(selectedBike);

    });

});


/* =========================
   CLOSE DETAIL PANEL
========================= */

function closeBike() {

    // Hide the detail section
    bikeInfo.hidden = true;

    // Remove active button styling
    bikeButtons.forEach(function (button) {

        button.classList.remove("active");

        button.setAttribute(
            "aria-pressed",
            "false"
        );

    });

}

// Close when the X button is clicked
closeButton.addEventListener("click", closeBike);


/* =========================
   CLOSE USING ESCAPE KEY
========================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && !bikeInfo.hidden) {
        closeBike();
    }

});


/* =========================
   HANDLE IMAGE ERRORS
========================= */

bikeImage.addEventListener("error", function () {

    bikeImage.alt =
        "Image could not be loaded for this motorcycle.";

});