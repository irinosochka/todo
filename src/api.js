import { db } from "./firebase";

export function getLists() {
    return db.collection('lists')
        .get()
        .then(snapshot => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            return items;
        });
}

export function getTodos() {
    return db.collection('todos')
        .where('listId', '==', '')
        .get()
        .then(snapshot => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            return items;
        });
}

export function getListTodos(listId) {
    return db.collection('todos')
        .where('listId', '==', listId)
        .get()
        .then(snapshot => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            return items;
        });
}


export function createTodo(data) {
    return db.collection('todos').add({
        ...data,
        completed: false
    })
        .then(docRef => docRef.get())
        .then(doc => ({
            id: doc.id,
            ...doc.data()
        }));
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