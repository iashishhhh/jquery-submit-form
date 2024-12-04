$(document).ready(function () {
    $('#inquiryForm').submit(function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Collect form data
        const formData = {
            name: $('#name').val(),
            location: $('#location').val(),
            addressLine2: $('#addressLine2').val(),
            city: $('#city').val(),
            state: $('#state').val(),
            postalCode: $('#postalCode').val(),
            country: $('#country').val(),
            progress: $('.range').val() // Progress bar value
        };

        // Log the form data for debugging or further processing
        console.log('Form Data Submitted:', formData);

        // Show an alert message for successful form submission
        alert('Form submitted successfully!');

        // Reset the form and progress bar
        $('#inquiryForm')[0].reset(); // Clear form fields
        $('.range').val(0); // Reset the progress bar
    });

    // Update progress bar live on input
    $('.range').on('input', function () {
        const value = $(this).val();
    });
});
