// /routes/route-for-page-home.js
import { Router } from 'meteor/iron:router';
Router.route(
    '/',
    {
        // Route name
        name: 'pageHome',
        // Include in sitemap?
        sitemap: true,
        // Crawl request frequency
        changefreq: 'daily',
        // Crawl priority
        priority: '1.0',
        // Activate pre-rendering of meta info
        ironMeta: true,
        // Meta info
        meta() {
            return {
                title: 'META_TITLE_GOES_HERE',
                description: 'META_DESCRIPTION_GOES_HERE',
                keywords: 'META_KEYWORDS_GO_HERE',
                canonical: 'CANONICAL_URL_GOES_HERE',

            };
        },
    },
);