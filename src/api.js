import { db, auth } from './firebase';
import FieldValue from 'firebase'
import firebase from "firebase";

/* Auth */
export function logInUser(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}

export function logInUserGoogle(provider) {
    return auth.signInWithRedirect(provider);
}

export function signOutUser() {
    return auth.signOut();
}

export function registerUser(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
}

export function initAuth(onAuth) {
    auth.onAuthStateChanged(onAuth);
}


/* DB */

export function createList(data) {
    return db.collection('lists').add({
        sort: '',
        ...data
    })
        .then(docRef => docRef.get())
        .then(mapDoc);
}

export function updateList(listId, data) {
    return db.collection('lists').doc(listId).update(data)
        .then(() => ({
            id: listId,
            ...data
        }));
}

export function deleteList(listId) {
    return db.collection('lists').doc(listId).delete()
        .then(() => listId);
}

export function getLists(userId) {
    return db.collection('lists')
        .where('userId', '==', userId)
        .get()
        .then(mapSnapshot);
}

export function getTodos(userId = '') {
    return db.collection('todos')
        .where('userId', '==', userId)
        .get()
        .then(mapSnapshot);
}

export function getListTodos(listId) {
    return db.collection('todos')
        .where('listId', '==', listId)
        .get()
        .then(mapSnapshot);
}

export function createTodo(data) {
    return db.collection('todos').add({
        completed: false,
        important:false,
        dueDate: null,
        listId: '',
        ...data
    }).then(docRef => docRef.get())
        .then(mapDoc);
}

export function updateTodo(todoId, data) {
    return db.collection('todos').doc(todoId).update(data)
    .then(() => ({
        id: todoId,
        ...data
    }));
}

export function deleteTodo(todoId) {
    return db.collection('todos').doc(todoId).delete()
        .then(() => todoId);
}

function mapSnapshot(snapshot) {
    return snapshot.docs.map(mapDoc);
}

function mapDoc(doc){
    return {
        id: doc.id,
        ...doc.data()
    }
}
