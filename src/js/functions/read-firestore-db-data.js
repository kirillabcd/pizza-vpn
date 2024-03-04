import { db } from '../firebase/firestore'
import { doc, getDoc } from 'firebase/firestore'
import { getUser } from './get-user'

export const readUserData = async () => {
    const user = getUser()
    const userID = user.uid

    try {
        const userDocRef = doc(db, 'users', userID)
        const userDocSnapshot = await getDoc(userDocRef)

        if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data()
            return userData
        } else {
            console.log('No such document!')
        }
    } catch (e) {
        console.error('Error reading document: ', e)
    }
}
