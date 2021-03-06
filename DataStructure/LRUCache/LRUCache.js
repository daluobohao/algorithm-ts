"use strict";
exports.__esModule = true;
exports.LRUCache = void 0;
var LRUCache = /** @class */ (function () {
    /**
     * @param {number} capacity
     */
    function LRUCache(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    /**
     * @param {number} key
     * @return {number}
     */
    LRUCache.prototype.get = function (key) {
        var cache = this.cache;
        // 如果存在 返回其值 同时重新插入更新其位置
        if (cache.has(key)) {
            var returnVal = cache.get(key);
            cache["delete"](key);
            cache.set(key, returnVal);
            return returnVal;
        }
        else {
            return -1;
        }
    };
    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    LRUCache.prototype.put = function (key, value) {
        var cache = this.cache;
        // 如果当前设置时已存在此键
        if (cache.has(key)) {
            cache["delete"](key);
            cache.set(key, value);
        }
        // 如果此时已达到容量上限 cache.keys().next().value 始终返回第一个的键
        else if (cache.size === this.capacity) {
            cache["delete"](cache.keys().next().value);
            cache.set(key, value);
        }
        else {
            cache.set(key, value);
        }
    };
    ;
    return LRUCache;
}());
exports.LRUCache = LRUCache;
