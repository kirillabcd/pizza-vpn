import { app } from './initialize-firebase.js'
import { getFirestore } from 'firebase/firestore'

export const db = getFirestore(app)
