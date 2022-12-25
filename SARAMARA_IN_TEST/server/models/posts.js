const Sequelize = require('sequelize');

module.exports = class Posts extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            postId:{
                type:Sequelize.INTEGER.UNSIGNED,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            },
            cate:{
                type:Sequelize.ENUM('NORMAL','QUESTION'),
                allowNull:false
            },
            title:{
                type:Sequelize.STRING(200),
                allowNull:false
            },
            content:{
                type:Sequelize.TEXT
            },
            like:{
                type:Sequelize.INTEGER.UNSIGNED
            }
        }, {
            sequelize,
            timestamps:true,
            underscored:false,
            tableName:'posts',
            modelName:'Posts',
            paranoid:true,
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    }

    static associate(db) {
        db.Posts.belongsTo(db.Users, {foreignKey:'userId', targetKey:'userId'});
    }
}