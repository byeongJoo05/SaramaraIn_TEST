const Sequelize = require('sequelize');
module.exports = class Users extends Sequelize.Model {
    static init(sequelize) {
        // 테이블에 대한 설정

        return super.init({
        // 컬럼에 대한 설정
        // 카카오 로그인 때문에 email, nick, pw에 대한 설정이 조금 다르다.
            userId: {
                type: Sequelize.INTEGER(100).UNSIGNED,
                allowNull: false,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            type: {
                type: Sequelize.ENUM("LOCAL", "SOCIAL"),
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(40),
                allowNull: false,
                unique: true
            },
            nickname: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            role: {
                type: Sequelize.ENUM("BASIC", "ADMIN"),
                allowNull: false,
                defaultValueL: "BASIC"
            },
            profileImg: {
                type: Sequelize.BLOB("long"),
                // allowNull: false,
                // defaultValueL: "BASIC"
            },
        }, {
            // 테이블에 대한 설정
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Users',
            tableName: 'Users',
            paranoid: true,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci'
        });
    }
    // 관계에 대한 설정
    static associate(db) {
        db.Users.hasOne(db.Tokens, {
            foreignKey: 'userId',
            sourceKey: 'userId'
        });
    }
};