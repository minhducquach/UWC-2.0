import express from 'express'
import { manageController } from '../controllers/index.js'
import authenticator from '../controllers/auth.js'

const router = express.Router()

router.use('/', authenticator)
router.get('/', manageController.returnDashboard)

router.get('/dashboard', manageController.returnDashboard) 
router.get('/charts', manageController.returnChart ) 
router.get('/tasks', manageController.returnTask) 
router.get('/mcps', manageController.returnMcp) 
router.get('/vehicles', manageController.returnVihicle) 

export default router