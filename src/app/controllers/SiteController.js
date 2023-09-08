const Course = require('../models/course')
const { mutileMogooseToObject } = require('../../utils/mongoose')
class SiteController {
    // get /
    async index(req, res, next) {
        Course.find({})
            .then(Courses => {
                res.render('home', {
                    Courses: mutileMogooseToObject(Courses)
                })
            })
            .catch(err => next(err));

    }
    // get --> /news/slug
    search(req, res) {
        res.render('search')
    }

}
module.exports = new SiteController