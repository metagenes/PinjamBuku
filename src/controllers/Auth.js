const User = require('../models/Auth');
const { hashSync, genSaltSync, compareSync } = require('bcryptjs');
const { sign } = require('jsonwebtoken');


module.exports = {
    registerUser : async (req, res) => {

        const user = await User.findOne({
            where : {
                email : req.body.email,
            },
            attributes:{
                exclude:['created_at', 'updated_at']
            },
        });

        const salt = genSaltSync(10);
        const password = hashSync(req.body.password, salt);
        const data = {
                      ...req.body,
                      password,
        };
        await User.create(data);
        delete data.password;

        res.json({
            code : 200,
            status : 'OK',
            message: 'Success Register User',
            data,

        });

    


}
}