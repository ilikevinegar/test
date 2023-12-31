import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 今日新闻
const JinrixinwenModel = sequelize.define('JinrixinwenModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
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
	xiangguanshipin: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '相关视频'
	},
	shifadidian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '事发地点'
	},
	fabushijian: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('fabushijian')).format('YYYY-MM-DD')
        },
		comment: '发布时间'
	},
	xinwenxiangqing: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '新闻详情'
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
	tableName: 'jinrixinwen'
})

export default JinrixinwenModel
