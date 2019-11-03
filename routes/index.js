var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { layout: 'layout-home', title: 'Trang chủ'});
});

/* GET home page. */
router.get('/index.html', function(req, res, next) {
  res.render('index', { layout: 'layout-home', title: 'Trang chủ'});
});

/* GET about-us page */
router.get('/about-us.html', function(req, res, next) {
  res.render('about-us', { title: 'Giới thiệu', page:'GIỚI THIỆU' });
});

/* GET shop page */
router.get('/shop.html', function(req, res, next) {
  res.render('shop', { title: 'Cửa hàng',  page:'CỬA HÀNG'});
});
router.get('/shop-list.html', function(req, res, next) {
  res.render('shop-list', { title: 'Cửa hàng',  page:'CỬA HÀNG'});
});

/* GET blog page */
router.get('/blog-left-sidebar.html', function(req, res, next) {
  res.render('blog-sidebar/blog-left-sidebar', { title: 'Bài viết',  page:'BÀI VIẾT'});
});
/* GET blog page */
router.get('/blog-masonry.html', function(req, res, next) {
  res.render('blog-sidebar/blog-masonry', { title: 'Bài viết',  page:'BÀI VIẾT'});
});
/* GET blog page */
router.get('/blog-right-sidebar.html', function(req, res, next) {
  res.render('blog-sidebar/blog-right-sidebar', { title: 'Bài viết',  page:'BÀI VIẾT'});
});
/* GET blog page */
router.get('/blog-no-sidebar.html', function(req, res, next) {
  res.render('blog-sidebar/blog-no-sidebar', { title: 'Bài viết',  page:'BÀI VIẾT'});
});

/* GET blog page */
router.get('/blog-details-audio.html', function(req, res, next) {
  res.render('blog-detail/blog-details-audio', { title: 'Bài viết',  page:'BÀI VIẾT'});
});

/* GET blog page */
router.get('/blog-details-gallery.html', function(req, res, next) {
  res.render('blog-detail/blog-details-gallery', { title: 'Bài viết',  page:'BÀI VIẾT'});
});

/* GET blog page */
router.get('/blog-details-link.html', function(req, res, next) {
  res.render('blog-detail/blog-details-link', { title: 'Bài viết',  page:'BÀI VIẾT'});
});

/* GET blog page */
router.get('/blog-details-quote.html', function(req, res, next) {
  res.render('blog-detail/blog-details-quote', { title: 'Bài viết',  page:'BÀI VIẾT'});
});

/* GET blog page */
router.get('/blog-details-standerd.html', function(req, res, next) {
  res.render('blog-detail/blog-details-standerd', { title: 'Bài viết',  page:'BÀI VIẾT'});
});

/* GET blog page */
router.get('/blog-details-video.html', function(req, res, next) {
  res.render('blog-detail/blog-details-video', { title: 'Bài viết',  page:'BÀI VIẾT'});
});

/* GET product page */
router.get('/product-details.html', function(req, res, next) {
  res.render('product-details', { title: 'Chi tiết sản phẩm',  page:'CHI TIẾT SẢN PHẨM'});
});

/* GET cart page */
router.get('/cart-page.html', function(req, res, next) {
  res.render('cart-page', { title: 'Giỏ hàng',  page:'GIỎ HÀNG'});
});

/* GET checkout page */
router.get('/checkout.html', function(req, res, next) {
  res.render('checkout', { title: 'Thanh toán',  page:'THANH TOÁN'});
});

/* GET wishlist page */
router.get('/wishlist.html', function(req, res, next) {
  res.render('wishlist', { title: 'Danh sách yêu thích',  page:'DANH SÁCH YÊU THÍCH'});
});

/* GET my account page */
router.get('/my-account.html', function(req, res, next) {
  res.render('my-account', { title: 'Tài khoản',  page:'TÀI KHOẢN'});
});

/* GET login register page */
router.get('/login-register.html', function(req, res, next) {
  res.render('login-register', { title: 'Đăng nhập / Đăng ký',  page:'ĐĂNG NHẬP / ĐĂNG KÝ'});
});

/* GET contact page */
router.get('/contact.html', function(req, res, next) {
  res.render('contact', { title: 'Liên hệ',  page:'LIÊN HỆ'});
});


/* GET forget page */
router.get('/forget', function(req, res, next) {
  res.render('forget-pass', { title: 'Quên mật khẩu',  page:'QUÊN MẬT KHẨU'});
});


module.exports = router;
