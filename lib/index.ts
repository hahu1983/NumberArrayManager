type NumArr = {
  name: string,
  arr: number[]
}
export default class NumberArrayManager {
  arrs: NumArr[] = []

  public add(name: string | string[], ids: number[]): void {
    const names = typeof name === 'string' ? [name] : name
    for (let i = 0, m = names.length; i < m; i++) {
      let n = names[i]
      let nameFound = false
      for (let j = 0, o = this.arrs.length; j < o; j++) {
        let a = this.arrs[j]
        if (a.name === n) {
          for (let k = 0, p = ids.length; k < p; k++) {
            let id = ids[k]
            if (a.arr.indexOf(id) === -1) {
              a.arr.push(id)
            }
          }
          nameFound = true
          break
        }
      }
      if (!nameFound) {
        this.arrs.push({
          name: n,
          arr: ids
        })
      }
    }
  }
  public addName(name: string) {
    if (!this.hasName(name)) {
      this.arrs.push({name: name, arr: []})
    }
  }
  public hasName(name: string): boolean {
    return this.arrs.some(a => a.name === name)
  }
  private getName(name: string, dontCreate?: boolean): NumArr {
    if (!dontCreate) {
      this.addName(name)
    }
    return this.arrs.find(a => a.name === name) || {name: 'empty', arr: []}
  }
  public delete(name: string): void {
    this.arrs = this.arrs.filter(i => i.name !== name)
  }
  public remove(name: string, ids: number[]): void {
    const nameContent = this.getName(name)
    nameContent.arr = nameContent.arr.filter(a => !ids.some(i => i === a))
  }
  public reset(name: string): void {
    const nameContent = this.getName(name)
    nameContent.arr = []
  }
  public has(name: string, id: number): boolean {
    const nameContent = this.getName(name, true)
    if (nameContent.name === 'empty') { return false }
    return nameContent.arr.indexOf(id) > -1
  }
  public some(name: string, ids: number[]): boolean {
    const nameContent = this.getName(name)
    return nameContent.arr.some(a => ids.some(i => a === i))
  }
  public every(name: string, ids: number[]): boolean {
    const nameContent = this.getName(name)
    return ids.every(i => nameContent.arr.indexOf(i) > -1)
  }
  public list(name: string): number[] {
    const nameContent = this.getName(name)
    return nameContent.arr
  }
  public showAll() {
    return this.arrs
  }
}
