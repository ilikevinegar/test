import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import YonghuController from './Yonghu'
import XinwenfenleiController from './Xinwenfenlei'
import JinrixinwenController from './Jinrixinwen'
import CaogaoxiangController from './Caogaoxiang'
import NewsController from './News'
import StoreupController from './Storeup'
import AboutusController from './Aboutus'
import SystemintroController from './Systemintro'
import DiscussjinrixinwenController from './Discussjinrixinwen'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/yonghu', YonghuController({ config, db }))

	api.use('/xinwenfenlei', XinwenfenleiController({ config, db }))

	api.use('/jinrixinwen', JinrixinwenController({ config, db }))

	api.use('/caogaoxiang', CaogaoxiangController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/aboutus', AboutusController({ config, db }))

	api.use('/systemintro', SystemintroController({ config, db }))

	api.use('/discussjinrixinwen', DiscussjinrixinwenController({ config, db }))

	return api
}
