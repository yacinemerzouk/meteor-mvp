// /routes/sitemap.js

Meteor.startup(function() {

    sitemaps.add('/sitemap.xml', function () {

        const out = [];
        Router.routes.forEach(function (route) {

            if (route.options && route.options.sitemap) {

                if (route.path()) {

                    out.push({
                        page: route.path(),
                        lastmod: new Date(),
                        changefreq: route.options.changefreq ? route.options.changefreq : 'monthly',
                        priority: route.options.priority ? route.options.priority : '0.5',
                    });

                }

            }

        });

        return out;

    });

});