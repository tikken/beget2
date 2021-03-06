const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/templates/post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/blog.js"))),
  "component---src-pages-cabinet-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/cabinet.js"))),
  "component---src-pages-cart-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/cart.js"))),
  "component---src-pages-catalog-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/catalog.js"))),
  "component---src-pages-contacts-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/contacts.js"))),
  "component---src-pages-hits-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/hits.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/index.js"))),
  "component---src-pages-information-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/information.js"))),
  "component---src-pages-landing-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/landing.js"))),
  "component---src-pages-product-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/product.js"))),
  "component---src-pages-sales-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/sales.js"))),
  "component---src-pages-tracking-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/tracking.js")))
}

