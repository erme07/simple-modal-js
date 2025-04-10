# Simple Modal JS

A simple library for generating modal windows using JavaScript.

## Installation

### CDN

```html
<script src="https://cdnjs.sfsffsdfsdffsdfsdfdfs"></script>

<script>
    const modal = new SimpleModalJS();
    modal.show();
</script>

```


### NPM

```bash
npm install simple-modal-js
```
#### Use with local files

```html

<script src="node_modules/simple-modal-js/dist/main.iife.min.js"></script>
<script>
    const modal = new SimpleModalJS();
    modal.show();
</script>

OR

<link rel="stylesheet" href="./node_modules/simple-modal-js/dist/style.css">
<script src="node_modules/simple-modal-js/dist/main.ems.js" type="module"></script>
<script>
    import SimpleModalJS from './node_modules/simple-modal-js/dist/main.ems.js';
    const modal = new SimpleModalJS();
    modal.show();
</script>

```

#### Use with bundlers

```javascript

import SimpleModalJS from 'simple-modal-js';
import './dist/style.css'

const modal = new SimpleModalJS();
modal.show();

```

## Configuration

