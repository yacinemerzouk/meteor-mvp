// /routes/route-for-page-2.js
import { Router } from 'meteor/iron:router';
Router.route(
    '/page-2',
    {
        // Route name
        name: 'page2',
        // Include in sitemap?
        sitemap: true,
        // Crawl request frequency
        changefreq: 'monthly',
        // Crawl priority
        priority: '0.1',
        // Activate pre-rendering of meta info
        ironMeta: true,
        // Meta info
        meta() {
            return {
                title: 'META_TITLE_FOR_PAGE_2_GOES_HERE',
                description: 'META_DESCRIPTION_FOR_PAGE_2_GOES_HERE',
                keywords: 'META_KEYWORDS_FOR_PAGE_2_GO_HERE',
                canonical: 'CANONICAL_URL_FOR_PAGE_2_GOES_HERE',

            };
        },
    },
);