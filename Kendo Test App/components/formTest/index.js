'use strict';

app.formTest = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_formTest
// END_CUSTOM_CODE_formTest
(function(parent) {
    var formTestModel = kendo.observable({
        fields: {
            username: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('formTestModel', formTestModel);
})(app.formTest);

// START_CUSTOM_CODE_formTestModel
// END_CUSTOM_CODE_formTestModel