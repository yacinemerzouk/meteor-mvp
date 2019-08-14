// ================================================================
// TEMPLATE CREATED
// ================================================================
Template.layout.onCreated(function() {});

// ================================================================
// TEMPLATE RENDERED
// ================================================================
Template.layout.onRendered(function() {});

// ================================================================
// TEMPLATE DESTROYED
// ================================================================
Template.layout.onDestroyed(function() {});

// ================================================================
// TEMPLATE EVENTS
// ================================================================
Template.layout.events({

    // ================================================================
    // EVENT: open off-canvas nav
    // ================================================================
    'click [hook="toggle-off-canvas-menu"], click [hook="off-canvas-menu"] a': () => {

        // We don't prevent default behavior of this function because we
        // want off-canvas link clicks to close the off-canvas panel

        if ($('[hook="off-canvas-menu"]').position().left === $(document).width()) {

            $('[hook="off-canvas-menu"]').css('right', '00px');
            $('[hook="main"]').css('right', '300px');
            $('[hook="mobile-navbar"]').css('right', '300px');

        } else {

            $('[hook="off-canvas-menu"]').css('right', '-300px');
            $('[hook="main"]').css('right', '0px');
            $('[hook="mobile-navbar"]').css('right', '0px');

        }

    },

});

// ================================================================
// TEMPLATE EVENTS
// ================================================================
Template.layout.helpers({});