$(function(){
   $('#pirate-forms-contact-submit').on('click',function(){
        console.log("Send Message Clicked");
   });

   $('#pirate-forms').on('submit',function(){
        event.preventDefault();
        var nameInput = $('#pirate-forms-contact-name');
        var emailInput = $('#pirate-forms-contact-email');
        var mobileNumberInput = $('#pirate-forms-contact-mobile');
        var addressInput = $('#pirate-forms-contact-address');
        var cityInput = $('#pirate-forms-contact-city');
        var queriesInput = $('#pirate-forms-contact-message');
        $.ajax({
            url: '/sendenquirypage',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ Name: nameInput.val(),
                Email:emailInput.val(),
                MobileNo:mobileNumberInput.val(),
                Address:addressInput.val(),
                City:cityInput.val(),
                Description:queriesInput.val()
            }),
            success: function(response) {
                alert("Your enquiry has been sent! Thank you.")
                $('#pirate-forms-contact-name').val("");
                $('#pirate-forms-contact-email').val("");
                $('#pirate-forms-contact-mobile').val("");
                $('#pirate-forms-contact-address').val("");
                $('#pirate-forms-contact-city').val("");
                $('#pirate-forms-contact-message').val("");
            }
        });
   });
});