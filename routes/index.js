var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { layout: 'layout-home', title: 'Home'});
});

/* GET home page. */
router.get('/index.html', function(req, res, next) {
  res.render('index', { layout: 'layout-home', title: 'Home'});
});

/* GET about-us page */
router.get('/about-us.html', function(req, res, next) {
  res.render('about-us', { title: 'About us', page:'ABOUT US' });
});

/* GET shop page */
router.get('/shop.html', function(req, res, next) {
  res.render('shop', { title: 'Shop page',  page:'SHOP PAGE'});
});
router.get('/shop-list.html', function(req, res, next) {
  res.render('shop-list', { title: 'Shop page',  page:'SHOP PAGE'});
});

/* GET blog page */
router.get('/blog-left-sidebar.html', function(req, res, next) {
  res.render('blog-sidebar/blog-left-sidebar', { title: 'Blog left sidebar',  page:'BLOG LEFT SIDEBAR'});
});
/* GET blog page */
router.get('/blog-masonry.html', function(req, res, next) {
  res.render('blog-sidebar/blog-masonry', { title: 'Blog masonry',  page:'BLOG MASONRY'});
});
/* GET blog page */
router.get('/blog-right-sidebar.html', function(req, res, next) {
  res.render('blog-sidebar/blog-right-sidebar', { title: 'Blog right sidebar',  page:'BLOG RIGHT SIDEBAR'});
});
/* GET blog page */
router.get('/blog-no-sidebar.html', function(req, res, next) {
  res.render('blog-sidebar/blog-no-sidebar', { title: 'Blog no sidebar',  page:'BLOG NO SIDEBAR'});
});

/* GET blog page */
router.get('/blog-details-audio.html', function(req, res, next) {
  res.render('blog-detail/blog-details-audio', { title: 'Blog details audio',  page:'BLOG DETAILS AUDIO'});
});

/* GET blog page */
router.get('/blog-details-gallery.html', function(req, res, next) {
  res.render('blog-detail/blog-details-gallery', { title: 'Blog details gallery',  page:'BLOG DETAILS GALLERY'});
});

/* GET blog page */
router.get('/blog-details-link.html', function(req, res, next) {
  res.render('blog-detail/blog-details-link', { title: 'Blog details link',  page:'BLOG DETAILS LINK'});
});

/* GET blog page */
router.get('/blog-details-quote.html', function(req, res, next) {
  res.render('blog-detail/blog-details-quote', { title: 'Blog details quote',  page:'BLOG DETAILS QUOTE'});
});

/* GET blog page */
router.get('/blog-details-standerd.html', function(req, res, next) {
  res.render('blog-detail/blog-details-standerd', { title: 'Blog details audio',  page:'BLOG DETAILS AUDIO'});
});

/* GET blog page */
router.get('/blog-details-video.html', function(req, res, next) {
  res.render('blog-detail/blog-details-video', { title: 'Blog details audio',  page:'BLOG DETAILS AUDIO'});
});

/* GET product page */
router.get('/product-details.html', function(req, res, next) {
  res.render('product-details', { title: 'Product details',  page:'PRODUCT DETAILS'});
});

/* GET cart page */
router.get('/cart-page.html', function(req, res, next) {
  res.render('cart-page', { title: 'Cart page',  page:'CART PAGE'});
});

/* GET checkout page */
router.get('/checkout.html', function(req, res, next) {
  res.render('checkout', { title: 'Checkout',  page:'CHECKOUT'});
});

/* GET wishlist page */
router.get('/wishlist.html', function(req, res, next) {
  res.render('wishlist', { title: 'Wishlist',  page:'WISHLIST'});
});

/* GET my account page */
router.get('/my-account.html', function(req, res, next) {
  res.render('my-account', { title: 'My account',  page:'MY ACCOUNT'});
});

/* GET login register page */
router.get('/login-register.html', function(req, res, next) {
  res.render('login-register', { title: 'Login',  page:'LOGIN'});
});

/* GET contact page */
router.get('/contact.html', function(req, res, next) {
  res.render('contact', { title: 'Contact',  page:'CONTACT'});
});



module.exports = router;
