import { db } from '../firebase/firestore'
import { doc, updateDoc, deleteField } from 'firebase/firestore'
import { getUser } from './get-user'

export const unsubscribeUser = async () => {
    // ----> DELETE KEY
    const user = getUser()
    const userID = user.uid

    await updateDoc(doc(db, 'users', userID), {
        subscriber: false,
    })
}
