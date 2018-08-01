# bus-event

**bus-event** is a simple package for passing easily your event.

## Installation

```
npm install bus-event
```

or

```
yarn add bus-event
```

## Usage

Just import the package before start using it.

As a ES6 Module:

```javascript
import BusEvent from 'bus-event';
```
## Methods

Now here we have two methods to complete our work.

* [$emit](#emit)
* [$on](#on)

### `$emit(key, params)`

When you will fire your event by bus event.

```javascript
BusEvent.$emit('some_key', {
    // something 
})
```

### `$on(key, callback)`
When you will receive your event by bus event.

```javascript
BusEvent.$on('some_key', (e) => {
    // something
})
```