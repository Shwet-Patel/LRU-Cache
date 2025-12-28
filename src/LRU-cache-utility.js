import { Node,DLL} from "./DLL.js";

export const createLRUCache = (capacity) => {
    const c = capacity || 5;
    let size = 0;

    const cache = new Map();
    const dll = new DLL();

    const get = (key) => {
        if( key == -1 || !cache.has(key)) { 
            return -1;
        }

        const node = cache.get(key);
        dll.moveToFront(node);

        return node.value;
    }

    const set = (key, value) => {

        if(key == -1) {
            return -1;
        }

        if (cache.has(key)) {
            console.log("entry with this key already exists.");
            return -1;
        }

        const node = new Node(key, value);
        dll.addToFront(node);
        cache.set(key, node);

        if (size < c) {
            size++;
        } else {
            cache.delete(tail.prev.key);
            dll.removeNode(tail.prev);
        }

        return 1;
    }

    return { get, set };
};