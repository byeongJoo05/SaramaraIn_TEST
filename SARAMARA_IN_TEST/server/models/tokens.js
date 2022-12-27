const Sequelize = require('sequelize');

module.exports = class Tokens extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            refreshToken:{
                type:Sequelize.STRING(255),
                allowNull:false
            }
        }, {
            sequelize,
            timestamps:false,
            underscored:false,
            tableName:'tokens',
            modelName:'Tokens',
            paranoid:true,
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    }

    static associate(db) {
        db.Users.belongsTo(db.Users, {foreignKey:'userId', targetKey:'userId'});
    }
}