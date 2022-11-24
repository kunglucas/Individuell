    // Show when button is clicked by user.
    $(document).ready(function () {

        $(".form-alert").hide();
        
        $(".form-btn-create").click(function(){
             $(".form-alert").toggle();
             $(".form-input").toggle();
        });
    // Show when button is clicked by user.

    $(".form-alert").hide();
    
    $(".form-btn").click(function(){ //Toggle the form/container and the alert.
    $(".form-alert").toggle();
    $(".form-input").toggle();
    });   
    
    });