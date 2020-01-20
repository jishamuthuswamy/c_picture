/*!
 * Graphite: c_picture
 * Description : HTML5 responsive image wrapper.
 *
 * Note that js-c_picture is rendered only when the image is in responsive mode.
 */
(function ( G, $  ) {

    'use strict';

    G.registerComponent('c_picture', {
        dependencies : ['picturefill'],
        el : '.c_picture',
        initialize: function () {

        }
    });

})( window.Graphite, jQuery );