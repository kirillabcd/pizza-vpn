import { app } from './initialize-firebase.js'
import { getAuth } from 'firebase/auth'

export const auth = () => getAuth(app)
