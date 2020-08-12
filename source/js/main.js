(function() {

    var openFormButton = document.querySelector('.arrowDown');
    var form = document.querySelector('.form');

    openFormButton.addEventListener('click', function() {
        BusinessTGH.form.open();
    });

    if (openFormButton) {
        openFormButton.addEventListener('click', function(e) {
            e.preventDefault;
            BusinessTGH.form.open();
        });
    };

    if (form) {
        form.addEventListener('click', function(e) {
            e.preventDefault();
            if (BusinessTGH.form.isValid()) {
                console.log('all good');
            } else {
                console.log('is not valid');
            }
            
        })
    };

    console.log(openFormButton);

}());

