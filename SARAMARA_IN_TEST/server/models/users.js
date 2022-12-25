const Sequelize = require('sequelize');

module.exports = class Users extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            userId:{
                type:Sequelize.INTEGER.UNSIGNED,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            },
            type:{
                type:Sequelize.ENUM('LOCAL','SOCIAL'),
                allowNull:false
            },
            email:{
                type:Sequelize.STRING(50),
                allowNull:false,
                unique:true
            },
            nickname:{
                type:Sequelize.STRING(50),
                allowNull:false,
                unique:true
            },
            password:{
                type:Sequelize.STRING(50),
                allowNull:false
            },
            role:{
                type:Sequelize.ENUM('BASIC','ADMIN'),
                allowNull:false
            },
            profileImg:{
                type:Sequelize.BLOB,
                allowNull:false
            }
        }, {
            sequelize,
            timestamps:true,
            underscored:false,
            tableName:'users',
            modelName:'Users',
            paranoid:true,
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    }

    static associate(db) {
        db.Users.hasMany(db.Posts, {foreignKey:'userId', sourceKey:'userId'});
    }
}