﻿define(function () {
    'use strict';

    var ErrorView = Backbone.Marionette.ItemView.extend({
        className: 'error',
        template: false,
        text: '',

        initialize: function (options) {
            this.text = options.text;
        },

        onRender: function() {
            this.$el.html(this.text);
        }
    });

    return ErrorView;
});