$(document).ready(function () {
    // Progress bar update
    $('.range').on('input', function () {
        const value = $(this).val(); // Get slider value
        $('.progress-bar').css('width', value + '%'); // Update progress bar width
        console.log(value + '%'); // Log value to console
    });
});

// form submit with jq
$(document).ready(function () {
    $('#inquiryForm').submit(function (event) {
        event.preventDefault(); // Prevents the default form submission

        // Collect form data
        const formData = {
            name: $('#name').val(),
            location: $('#location').val(),
            addressLine2: $('#addressLine2').val(),
            city: $('#city').val(),
            state: $('#state').val(),
            postalCode: $('#postalCode').val(),
            country: $('#country').val(),
            progress: $('#slider-digs').val()
        };
        console.log('Form Data Submitted:', formData);

        alert('Form submitted successfully!');
        // : Clear form fields after submission
        $('#inquiryForm')[0].reset();
    });
});
//Code End