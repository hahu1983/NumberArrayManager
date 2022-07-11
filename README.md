# NumberArrayManager
A Tool for managing Number-Arrays by name.
Id-Lists are always unique lists - no number will be saved twice in a given array.
This is usefull when managing ids.
For example we can have one list of ids and a second list of ids and compare, if they have the ids in common.
This can be fore example useful in react applications for saving and managing the state of several items and their filter states and decide which objects are to be shown in the given filter state.

## How to install

```bash
npm i hahu1983/NumberArrayManager
```

## Methods / with Examples

First we have to import and construct the Database. For this example we call it `nam`:

```typescript
import NumberArrayManager from 'numberarraymanager'

const nam = new NumberArrayManager()
```

### add

Adds Numbers to an existing array or creates one. Example:

```typescript
nam.add('myListName', [43, 54])
```

### addName

Adds empty list:
```typescript
nam.addName('myListName')
```

### hasName

Checks if there is a list with a name:
```typescript
nam.hasName('myListName') // = true
nam.hasName('notMyListName') // = false
```

### delete

Deletes list entirely:

```typescript
nam.delete('myListName')
nam.hasName('myListName') // = false
```

### remove

Removes some numbers from a names list:

```typescript
nam.add('myListName', [1,2,3,4,5])
nam.remove('myListName', [2,3,42]) // list is now [1,4,5]
```

### reset

Resets the numbers from a named list:
```typescript
nam.add('myListName', [1,2,3,4,5])
nam.reset('myListName') // list is now empty =[]
```

### has

Tests if a number is in a named list:

```typescript
nam.add('myListName', [1,2,3,4,5])
nam.has('myListName', 5) // = true
nam.has('myListName', 42) // = false
```

### some

Tests if some numbers are in the array
```typescript
nam.add('myListName', [1,2,3,4,5])
nam.some('myListName', [2,3,4,42]) // = true
nam.some('myListName', [42,43,44]) // = false
```

### every

Tests if all given numbers are in the named array:

```typescript
nam.add('myListName', [1,2,3,4,5])
nam.every('myListName', [2,3,4]) // = true
nam.every('myListName', [2,3,4,42]) // = false
```

### list

Returns the list with the given name:

```typescript
nam.add('myListName', [1,2,3,4,5])
nam.list('myListName') // = [1,2,3,4,5]
```
