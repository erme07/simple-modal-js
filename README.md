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

You can customize the modal window by passing a configuration object when instantiating the class.

```javascript

const modal = new SimpleModalJS({
    overlay:{
        show: true,
        opacity: 0.8,
    },
    modal:{
        title:{
            text: 'Window title',
            textColor: 'black',
            size: '20px',
        },
        content:{
            text: 'Enter the text that will appear in the modal window. The text size and color can be customized.',
            textColor: 'black',
            size: '18px',
        },
    }
});
```

### Configuration structure

#### Overlay:

|Property  |Type                   |Default value     |Description                      |
|:---------|:----------------------|:----------------:|---------------------------------|
|show      |boolean [true-false]   |true              | Defines visibility of overlay   |
|opacity   |number [0-1]           |0.8               | Sets opacity of overlay         |

#### Modal: Title - Content

|Property  |Type                          |Default value     |Description                         |
|:---------|:-----------------------------|:----------------:|------------------------------------|
|text      |string                        |"placeholder"     | Defines the content of the element |
|textColor |string [valid color format]   |"black"           | Sets the text color                |
|size      |string [pixels]               |"20px"/"18px"     | Defines the text size              |

## License

[MIT License](https://raw.githubusercontent.com/erme07/simple-modal-js/refs/heads/main/LICENSE). Copyright (c) 2025 Erik Medina