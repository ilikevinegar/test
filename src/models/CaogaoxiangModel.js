import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 草稿箱
const CaogaoxiangModel = sequelize.define('CaogaoxiangModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	caogaobianhao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '草稿编号'
	},
	biaoti: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '标题'
	},
	xinwenfenlei: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '新闻分类'
	},
	tupian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '图片'
	},
	xinwengaiyao: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '新闻概要'
	},
	shifariqi: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('shifariqi')).format('YYYY-MM-DD')
        },
		comment: '事发日期'
	},
	shifadidian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '事发地点'
	},
	xinwenxiangqing: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '新闻详情'
	},
	cunrushijian: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('cunrushijian')).format('YYYY-MM-DD')
        },
		comment: '存入时间'
	},
	thumbsupnum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '赞'
	},
	crazilynum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '踩'
	},
	addtime: {
  		type: DataTypes.DATE,
  		defaultValue: DataTypes.NOW,
    	allowNull: false,
    	get() {
            return moment(this.getDataValue('addtime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '添加时间'
	}
}, {
	timestamps: false,
	freezeTableName: true,
	tableName: 'caogaoxiang'
})

export default CaogaoxiangModel
