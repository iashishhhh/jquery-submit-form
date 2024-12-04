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
            progress: $('.range').val()
        };
        console.log('Form Data Submitted:', formData);
        alert('Form submitted successfully!');

        $('#inquiryForm')[0].reset();
        $('.range').val(0);
    });

    // Update progress bar live on input
    $('.range').on('input', function () {
        const value = $(this).val();
    });
});
