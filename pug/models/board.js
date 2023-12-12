const { DataTypes, Model, Sequelize } = require('sequelize')

//보드 초기화
class Board extends Model {
    //함수 정의
    static initiate(sequelize){
        //함수 호출
        Board.init({
            board_no : {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
            title : {type: DataTypes.STRING, allowNull: false},
            writer : {type: DataTypes.STRING, allowNull: false},
            content : {type: DataTypes.TEXT, allowNull: false},
            reg_date : {type: 'TIMESTAMP', defaultValue: Sequelize.NOW},
            upd_date : {type: 'TIMESTAMP', defaultValue: Sequelize.NOW},
        }, {sequelize, modelName: 'Board', tableName: 'Board', timestamps: true})
    }

    static associate(db){ }
}

module.exports = Board