const DataTypes =  require('sequelize');
const db = require('../configs/db');


    const User = db.define(
        'user',
        {
            user_id: { 
            type : DataTypes.INTEGER,
            primaryKey : true,
            allowNull : true,
            autoIncrement : true,
        },
        name : {type : DataTypes.STRING,
        },
        email : {type : DataTypes.STRING,
        },
        password : {type : DataTypes.STRING,
        },
        photo: {type : DataTypes.STRING,
        },
        isAdmin: { type: DataTypes.STRING,
                defaultValue : "user",
        },
        createdAt: { type : DataTypes.DATEONLY,
        },
        updatedAt: { type : DataTypes.DATEONLY,
        },

        },
        

    );
module.exports = User;