(function() {

    var openFormButton = document.querySelector('.arrowDown');

    openFormButton.addEventListener('click', function() {
        form.open();
    });

    if (openFormButton) {
        openFormButton.addEventListener('click', function(e) {
            e.preventDefault;
            form.open();
        });
    };

    console.log(openFormButton);

}());

