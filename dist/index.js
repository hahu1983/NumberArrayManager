"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumberArrayManager {
    constructor() {
        this.arrs = [];
    }
    add(name, ids) {
        const names = typeof name === 'string' ? [name] : name;
        for (let i = 0, m = names.length; i < m; i++) {
            let n = names[i];
            let nameFound = false;
            for (let j = 0, o = this.arrs.length; j < o; j++) {
                let a = this.arrs[j];
                if (a.name === n) {
                    for (let k = 0, p = ids.length; k < p; k++) {
                        let id = ids[k];
                        if (a.arr.indexOf(id) === -1) {
                            a.arr.push(id);
                        }
                    }
                    nameFound = true;
                    break;
                }
            }
            if (!nameFound) {
                this.arrs.push({
                    name: n,
                    arr: ids
                });
            }
        }
    }
    addName(name) {
        if (!this.hasName(name)) {
            this.arrs.push({ name: name, arr: [] });
        }
    }
    hasName(name) {
        return this.arrs.some(a => a.name === name);
    }
    getName(name, dontCreate) {
        if (!dontCreate) {
            this.addName(name);
        }
        return this.arrs.find(a => a.name === name) || { name: 'empty', arr: [] };
    }
    delete(name) {
        this.arrs = this.arrs.filter(i => i.name !== name);
    }
    remove(name, ids) {
        const nameContent = this.getName(name);
        nameContent.arr = nameContent.arr.filter(a => !ids.some(i => i === a));
    }
    reset(name) {
        const nameContent = this.getName(name);
        nameContent.arr = [];
    }
    has(name, id) {
        const nameContent = this.getName(name, true);
        if (nameContent.name === 'empty') {
            return false;
        }
        return nameContent.arr.indexOf(id) > -1;
    }
    some(name, ids) {
        const nameContent = this.getName(name);
        return nameContent.arr.some(a => ids.some(i => a === i));
    }
    every(name, ids) {
        const nameContent = this.getName(name);
        return ids.every(i => nameContent.arr.indexOf(i) > -1);
    }
    list(name) {
        const nameContent = this.getName(name);
        return nameContent.arr;
    }
    showAll() {
        return this.arrs;
    }
}
exports.default = NumberArrayManager;
