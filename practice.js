const customerData = [
    { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com"},
    { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@company.com"}
];

let request = window.indexedDB.open('MyDB', 1);
let db;

request.onerror = () => {
    console.log("Error!!");
}; 

request.onsuccess = () => {
    console.log("Success!!");
};

request.onupgradeneeded = (event) => {
    db = event.target.result;
    let objectStore = db.createObjectStore('customers', { keyPath: 'ssn' });

    objectStore.createIndex("name", "name", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });

    objectStore.transaction.oncomplete = () => {
        let objectStoreEditAccess = db.transaction('customers', 'readwrite').objectStore('customers');
        customerData.forEach(customer => objectStoreEditAccess.add(customer));
    };
};