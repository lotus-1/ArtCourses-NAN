const router = express.Router();

router.get('/courses', (req, res) => {
  res.render('courses');
});

router.get('*', (req, res) => {
  res.sendFile('pageNotFound.html', { root: path.join(__dirname, '..', '..', 'public') });
});

module.exports = router;
