$(document).ready(function($) {
        
    $("#register-form").validate({
    rules: {
        Firstname: {
            required: true,
            minlength: 2
        },
        Lastname: {
            required: true,
            minlength: 2
        },                    
        email: {
            required: true,
            email:true
        },
        age: {
            required: true,
            min: 18
        },
        song: {
            required:true,
            },
           file: { 
                required: false,
                extension: "mp3|mpeg|mp4"
            }, 
        
       city: "required",
      gender: "required"
     
    },
    messages: {
        Firstname: 
        {required:"Please enter your First Name",    
        minlength: "First Name must Contain atleast 2 letters" 
    },  
    Lastname: 
        {required:"Please enter your Last Name",    
        minlength: "Last Name must Contain atleast 2 letters" 
    },              
        email: {
            required: "Please provide a email",
            email: "Please provide a valid email"
        },
        age: {
            required: "Please provide a age",
            min:"user should be minimum of 18 years old to access the site. "
        },
        song: {
            required: "Please Choose a File",
            extension:"please choose the correct extension"
        },
        

      city: "Please enter your city",
      gender: "This field is required"
    },
     errorPlacement: function(error, element) 
{
if ( element.is(":radio") ) 
{
    error.appendTo( element.parents('.form-group') );
}
else 
{ // This is the default behavior 
    error.insertAfter( element );
}
},
    submitHandler: function(form) {
        alert("form submitted")
        form.submit();
    }
    
});

$('#audio').bind('change', function() {

    //this.files[0].size gets the size of your file.
    var s = this.files[0].size;
    s=s/(1024*1024);
    var s = s.toFixed(2)
    alert("The file is of size:" +s +"MB");
  
  });
});