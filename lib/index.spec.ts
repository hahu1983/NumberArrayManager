'use strict'
// var expect = require('chai').expect
import { expect } from 'chai'
import { describe, it } from 'mocha'
import NumberArrayManager from './index'

const name1 = 'name1'
const arr1a = [3, 2, 1]
const arr1b = [2 , 4, 5]
const arr1combine = [1, 2, 3, 4, 5]
const name2 = 'name2'


describe('NumberArrayManager', () => {
  var NAM = new NumberArrayManager()
  it('should have all functions', () => {
    expect(NAM.add).to.not.equal(undefined)
    expect(NAM.addName).to.not.equal(undefined)
    expect(NAM.hasName).to.not.equal(undefined)
    expect(NAM.remove).to.not.equal(undefined)
    expect(NAM.reset).to.not.equal(undefined)
    expect(NAM.has).to.not.equal(undefined)
    expect(NAM.some).to.not.equal(undefined)
    expect(NAM.every).to.not.equal(undefined)
    expect(NAM.list).to.not.equal(undefined)
  })
  it('add should add array and under the name every element is coming back with list', () => {
    NAM.add(name1, arr1a)
    const res1 = NAM.list(name1)
    expect(res1.every(i => arr1a.some(j => i === j))).to.equal(true)
    expect(res1.length).to.equal(arr1a.length)
  })
  it('calling add twice combines the array, but each value will be unique', () => {
    NAM.add(name1, arr1b)
    const res1 = NAM.list(name1)
    expect(res1.every(i => arr1combine.some(j => i === j))).to.equal(true)
    expect(res1.length).to.equal(arr1combine.length)
  })
  it('getName should check if name available', () => {
    NAM.reset(name1)
    NAM.add(name1, [])
    expect(NAM.hasName(name1)).to.equal(true)
    expect(NAM.hasName(name2)).to.equal(false)
  })
  it('delete should delete name', () => {
    NAM.reset(name1)
    NAM.add(name1, [1,2,3])
    NAM.delete(name1)
    expect(NAM.hasName(name1)).to.equal(false)
  })
  it('remove should remove given numbers', () => {
    NAM.reset(name1)
    NAM.add(name1, [1,2,3,4,5])
    NAM.remove(name1, [5,1])
    const r = NAM.list(name1)
    expect(r.every(i => [2,3,4].some(j => i === j))).to.equal(true)
    expect(r.length).to.equal([2,3,4].length)
  })
  it('reset should empty list by name', () => {
    NAM.reset(name1)
    NAM.add(name1, [1,2,3,4,5])
    NAM.reset(name1)
    const r = NAM.list(name1)
    expect(r.length).to.equal(0)
  })
  it('has shall check if array with name has specific number', () => {
    NAM.reset(name1)
    NAM.reset(name1)
    NAM.add(name1, [1,2,3,4,5])
    expect(NAM.has(name1, 3)).to.equal(true)
    expect(NAM.has(name1, 42)).to.equal(false)
  })
  it('some tests if there are numbers in a given array which are in the named array', () => {
    NAM.reset(name1)
    NAM.add(name1, [1,2,3,4,5])
    expect(NAM.some(name1, [3, 5])).to.equal(true)
    expect(NAM.some(name1, [42, 43])).to.equal(false)
  })
  it('every tests if every number in a given array is in the named array', () => {
    NAM.reset(name1)
    NAM.add(name1, [-5,3,2,0])
    expect(NAM.every(name1, [0, 3, 2])).to.equal(true)
    expect(NAM.every(name1, [0, 3, 2, 42])).to.equal(false)
  })
  it('it can process multiple list without data loss', () => {
    let nameList: string[] = []
    let amount = 1
    function i2name(i: number): string {
      return 'n' + i
    }
    for (let i = 0; i < amount; i++) {
      nameList.push(i2name(i))
    }
    nameList.forEach((i) => {
      // For exteme speed - two orders at once:
      NAM.add(i, arr1a)
      NAM.add(i + 'b', arr1a)
      NAM.add([i + 'c', i + 'd'], arr1a)
    })
    for (let i = 0; i < amount; i++) {
      expect(NAM.every(i2name(i), arr1a)).to.equal(true)
    }
    nameList.forEach((i) => {
      // For exteme speed - two orders at once:
      NAM.add(i, arr1b)
      NAM.add(i + 'b', arr1b)
      NAM.add([i + 'c', i + 'd'], arr1b)
    })
    for (let i = 0; i < amount; i++) {
      console.log(NAM.list(i2name(i)))
      console.log(NAM.list(i2name(i) + 'b'))
      expect(arr1b.every(a => NAM.list(i2name(i)).some(l => l === a))).to.equal(true)
      expect(arr1b.every(a => NAM.list(i2name(i) + 'b').some(l => l === a))).to.equal(true)
      expect(arr1b.every(a => NAM.list(i2name(i) + 'c').some(l => l === a))).to.equal(true)
      expect(arr1b.every(a => NAM.list(i2name(i) + 'd').some(l => l === a))).to.equal(true)
    }

  })
})
