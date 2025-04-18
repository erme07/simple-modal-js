# Simple Modal JS

Simple Modal JS is a lightweight, dependency-free library for creating customizable modal windows using JavaScript configuration objects. Developers can easily adjust the design, behavior, and other aspects of the modal without the need to write any CSS.

Ideal for developers looking for a quick, flexible, and easily integrable solution to display modal content in the browser.

## Installation

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/simple-modal-js@0.3.0/dist/main.min.js"></script>

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

<script src="node_modules/simple-modal-js/dist/main.min.js"></script>
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

## Features

| Method             | Description                              |
|:-------------------|:-----------------------------------------|
| show()             | Shows the modal window.                  |
| hide()             | Hides the modal window.                  |
| removeFromDOM()    | Removes the modal window from the dom.   |
| addToDOM()         | Adds the modal window to the dom.        |

| Property         | Description                                            |
|:-----------------|:-------------------------------------------------------|
| modalID          | Contains the ID of the modal.                          |
| $modalWrapper    | Contains all the elements that are part of the modal.  |
| $modal_window    | Saves the reference to the modal window.               |
| $modal_title     | Saves the reference to the title.                      |
| $modal_text      | Saves the reference to the text of the modal window.   |
| $modal_close     | Saves the reference to the close button.               |

## Configuration

You can customize the modal window by passing a configuration object when instantiating the class.

### Overlay:

|Property  |Type                   |Default value     |Description                      |
|:---------|:----------------------|:----------------:|---------------------------------|
|show      |boolean [true-false]   |true              | Defines visibility of overlay   |
|opacity   |number [0-1]           |0.8               | Sets opacity of overlay         |

### Modal: Title - Content

|Property  |Type                          |Default value     |Description                                   |
|:---------|:-----------------------------|:----------------:|----------------------------------------------|
|text      |string                        |"placeholder"     | Defines the content of the element.          |
|textColor |string [valid color format]   |"black"           | Sets the text color.                         |
|font      |string                        |"san-serif"       | Defines the font family.                     |
|weight    |string                        |"normal"          | Sets the weight (or boldness) of the font.   |
|size      |string [pixels]               |"20px"/"18px"     | Defines the text size.                       |



```javascript

const modal = new SimpleModalJS({
    overlay: { 
        show: true, 
        opacity: 0.8 
    },
    modal: {
        title: {
            text: 'Window title',
            textColor: 'black',
            font: 'sans-serif',
            weight: 'bold',
            size: '20px',
        },
        content: {
            text: 'Enter the text that will appear in the modal window. The text size and color can be customized.',
            textColor: 'black',
            font: 'sans-serif',
            weight: 'normal',
            size: '18px',
        }
    }
});
```

## License

[MIT License](https://raw.githubusercontent.com/erme07/simple-modal-js/refs/heads/main/LICENSE). Copyright (c) 2025 Erik Medina