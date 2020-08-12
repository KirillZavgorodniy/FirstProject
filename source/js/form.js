(function() {
    var me = {};
    var form = document.querySelector('.formContainer');
    var closeButton = null;


    //Закрытие по Esc???
    
    function onClose(e) {
        e.preventDefault();

        me.close();
        closeButton.removeEventListener('click', onClose);
        
    };

    me.open = function() {
        form.classList.remove('isHidden');

        closeButton = document.querySelector('.formCloseButton');
        closeButton.addEventListener('click', onClose);

        
    };

    me.close = function() {
        form.classList.add('isHidden');
    };

    me.isValid = function() {
        var requiredFildsValue = document.querySelectorAll('[data-valid="required"]');
        var emailValue = document.querySelector('[data-email]').value;
        var numberValue = document.querySelector('[data-number]').value;

        if (!me.isAllComplited()) {
            console.log('Write in all fields');
        } else if (!BusinessTGH.validation.isEmail(emailValue)){
            console.log('Invalid E-mail');
            return false;
        } else if (!BusinessTGH.validation.isNumber(numberValue)){
            console.log('Invalid number');
            return false;
        } else  {
            return true;
        }
    };

    me.isAllComplited = function(data) {
        var result = true;

        for (var i = 0; i < data.length; i++) {
            if (!BusinessTGH.validation.isNotEmpty(data[i].value)) {
                result = false;
                break
            };
        };

        return result;
    };


    BusinessTGH.form = me;
}());