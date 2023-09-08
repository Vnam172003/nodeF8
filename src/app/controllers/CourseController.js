const Course = require('../models/course');
const { mutileMogooseToObject } = require('../../utils/mongoose');
class CourseController {
    show(req, res) {
        res.send('Course details');
    }
}




module.exports = new CourseController;