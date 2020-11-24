import firebase  from '../backend/firebase'

export const login = (email, password) => {
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(retorno => resolve(retorno))
            .catch(erro => reject(erro))
    })
}

export const saveUser = (email, password) => {
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(retorno => resolve(retorno))
            .catch(erro => reject(erro))
    })
}

export const logout = () => {
    return new Promise((resolve, reject) => {
        firebase
        .auth()
        .signOut()
        .then(retorno => resolve(retorno))
        .catch(erro => reject(erro))
    })
}