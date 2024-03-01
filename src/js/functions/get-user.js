import { auth } from '../firebase/auth-firebase'

export const getUser = () => {
    const user = auth().currentUser
    return user
}
