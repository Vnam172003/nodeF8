const newsRoute = require('./news')
const coursesRoute = require('./courses')

const siteRoute = require('./site')
function router(app) {

    app.use('/news', newsRoute);


    app.use('/', siteRoute);


    app.use('/courses', coursesRoute);


}
module.exports = router;