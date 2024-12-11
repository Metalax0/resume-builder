const DB_NAME = "metalax-resume-builder";
const DB_VERSION = 1;
const STORE_NAME = "user-templates";

// Open or create the IndexedDB database
export const openDatabase = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = () => {
            const db = request.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: "id" });
            }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
};

// Save as new template
export const saveTemplatetoIndexDB = async (data: object): Promise<void> => {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, "readwrite");
        const store = transaction.objectStore(STORE_NAME);

        const countRequest = store.count();
        countRequest.onsuccess = () => {
            const id = countRequest.result; // Use the current count as the new ID
            const putRequest = store.put({ id, data });

            putRequest.onsuccess = () => resolve();
            putRequest.onerror = () => reject(putRequest.error);
        };

        countRequest.onerror = () => reject(countRequest.error);
    });
};

// Fetch a template
export const fetchTemplateFromIndexDB = async (
    id: number
): Promise<object | null> => {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, "readonly");
        const store = transaction.objectStore(STORE_NAME);

        const request = store.get(id);
        request.onsuccess = () => resolve(request.result?.data || null);
        request.onerror = () => reject(request.error);
    });
};

// Fetch all templates
export const fetchAllTemplatesFromIndexDB = async (): Promise<
    object[] | []
> => {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, "readonly");
        const store = transaction.objectStore(STORE_NAME);

        const request = store.getAll();
        request.onsuccess = () => resolve(request.result || []);
        request.onerror = () => reject(request.error);
    });
};

// Delete a template
export const deleteTemplateFromIndexDB = async (id: number): Promise<void> => {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, "readwrite");
        const store = transaction.objectStore(STORE_NAME);

        const request = store.delete(id);
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
    });
};
