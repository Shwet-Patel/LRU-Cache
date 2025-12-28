import { createLRUCache } from "./LRU-cache-utility.js";

const main = () => {
    const cache = createLRUCache(2);
    console.log(cache.set(1, 'A')); // 1
    console.log(cache.set(2, 'B')); // 1
    // console.log(cache.set(3, 'C')); // 1, evicts key 1
    // console.log(cache.get(1)); // -1
    // console.log(cache.get(2)); // 'B'
}

main();