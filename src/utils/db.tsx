import { openDB, deleteDB, wrap, unwrap, IDBPDatabase } from 'idb';

export const createTheDB = async() => {
    const db = await openDB("MyDatabase", 2, {
        upgrade(db, oldVersion, newVersion, transaction, event) {
            if(oldVersion < 2) {// Create a store of objects
            const store = db.createObjectStore('trips', {
                // The 'id' property of the object will be the key.
                keyPath: 'id',
                // If it isn't explicitly set, create a value by auto incrementing.
                autoIncrement: true,
            });
            // Create an index on the 'date' property of the objects.
            store.createIndex('date', 'date');}
        },
        blocked(currentVersion, blockedVersion, event) {
        // …
        },
        blocking(currentVersion, blockedVersion, event) {
        // …
        },
        terminated() {
        // …
        },
    });
    return db;
}