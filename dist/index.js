"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumberArrayManager {
    constructor() {
        this.arrs = [];
    }
    add(name, ids) {
        const nameContent = this.getName(name);
        ids.forEach(id => {
            if (nameContent.arr.indexOf(id) === -1) {
                nameContent.arr.push(id);
            }
        });
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
}
exports.default = NumberArrayManager;
