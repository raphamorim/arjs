# arjs

> Augmented Reality `拡張現実` JavaScript Library

## Usage

### init

Init AR configuration:

```js

ar.init({

});

```

### add

Add objects:

```js

ar.add(objectPropeties);

```

### remove

Remove objects based on reference:

```js

var ref = ar.add(objectPropeties);

ar.remove(ref);

```