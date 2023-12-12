const { DataTypes, Model, Sequelize } = require('sequelize');

//보드 초기화
class Board extends Model {
    static initiate(sequelize) {
        Board.init(
            {
                board_no: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                title: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                writer: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                content: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                reg_date: {
                    type: DataTypes.DATE,
                    defaultValue: Sequelize.NOW,
                },
                upd_date: {
                    type: DataTypes.DATE,
                    defaultValue: Sequelize.NOW,
                },
            },
            {
                sequelize,
                modelName: 'Board',
                tableName: 'board',
                timestamps: false,
                //timestamps : true로 했을 때는 createdAt  updatedAt 라는 컬럼들을 자동으로 만드어줍니다. 
            }
        );
    }
    static associate(db) {
        // Add associations if needed
    }
}
module.exports = Board;