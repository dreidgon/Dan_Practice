define([
    'Magento_Checkout/js/view/minicart',
    'jquery',
    'ko',
    'underscore'
], function (Component, $, ko, _) {
    'use strict';
    alert("UAUA");
    return Component.extend({

        /**
         * @override
         */
        initialize: function () {
            return this._super();
        },

        updatePostalCode: function () {
            $('body').trigger('processStart');
            this.disabled(true);
            var that = this;

            var value = $.trim(this.value);

            if (value.length) {
                $.ajax({
                    type: 'POST',
                    url: '/heavyfreight/CalculateFreight/index',
                    data: {
                        postalCode : this.value
                    },
                    success: function(data){
                        location.reload(true);
                    },
                    complete: function () {
                        location.reload(true);
                    }
                });
            } else {
                e.preventDefault();
                $(this).parent().next('.warn').text('Postinumero ei voi olla tyhjä!!!');
            }


        }
    });
});
