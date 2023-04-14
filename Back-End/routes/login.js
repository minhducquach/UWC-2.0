import express from 'express'
import { loginController } from '../controllers/index.js'

const router = express.Router()


router.get('/', loginController.returnFile)
router.post('/', loginController.login)
    

export default router