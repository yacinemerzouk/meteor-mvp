// /routes/router-seo.js
import { Router } from 'meteor/iron:router';

Router.onStop(function() {

    if (Meteor.isClient) {

        // Remove twitter stuff
        // Remove Facebook stuff
        $('[seo="meteorhubdotnet"]').remove();

    }

});

Router.onAfterAction(function() {

    if (Meteor.isClient) {

        const meta = this.lookupOption('meta');

        if (typeof meta === 'function') {

            this.meta = _.bind(meta, this);

        } else if (typeof meta !== 'undefined') {

            this.meta = function() {

                return meta;

            };

        }
        if (meta) {

            const metaData = this.meta();

            if (metaData) {

                $('[seo="meteorhubdotnet"]').remove();
                _.each(metaData, function (val, key) {

                    if (key === 'title') {

                        document.title = val;

                    } else if (key === 'canonical') {

                        $('head').append(`<link rel="canonical" href="${val}" seo="meteorhubdotnet">`);

                    } else {

                        // Inject.meta(key, val, res);
                        let idType = 'name';

                        // Twitter like the name attribute whilst standard dictates property
                        if (key.slice(0, 2) === 'og' || key.slice(0, 2) === 'fb') {

                            idType = 'property';

                        }
                        $('head').append(`<meta ${idType}="${key}" content="${val}" seo="meteorhubdotnet"></meta>`);

                    }

                });

            }

        }

    }

});