type NumArr = {
  name: string,
  arr: number[]
}
export default class NumberArrayManager {
  arrs: NumArr[] = []

  public add(name: string, ids: number[]): void {
    if (!this.arrs.some(a => {
      if (a.name === name) {
        ids.forEach(i => {
          if (a.arr.indexOf(i) === -1) {
            a.arr.push(i)
          }
        })
        return true
      }
    })) {
      this.arrs.push({
        name: name,
        arr: ids
      })
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
