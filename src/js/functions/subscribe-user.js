import { db } from '../firebase/firestore'
import { collection, query, getDocs, limit } from 'firebase/firestore'
import { doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { getUser } from './get-user'

export const subscribeUser = async () => {
    // ----> READ KEY FROM FIRESTORE
    const keysCollectionRef = collection(db, 'keys')
    const keysQuery = query(keysCollectionRef, limit(1))
    const querySnapshot = await getDocs(keysQuery)

    const key = querySnapshot.docs[0].data().keyValue
    const keyID = querySnapshot.docs[0].data().keyID

    // ----> SET KEY TO CURRENT USER
    const user = getUser()
    const userID = user.uid

    await updateDoc(doc(db, 'users', userID), {
        subscriber: true,
        keyValue: key,
        keyID: keyID,
    })

    //  ----> DELETE KEY FROM FIRESTORE KEYS COLLECTION
    await deleteDoc(doc(db, 'keys', keyID))
}
