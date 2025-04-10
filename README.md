# simpleModalJS

A simple library for generating modal windows using JavaScript.

## Installation

### CDN

```html
<script src="https://cdnjs.sfsffsdfsdffsdfsdfdfs"></script>
<script>
    const config = {
        overlay:{
            show: "true",
            opacity: '0.8',
        },
        modal:{
            title:{
                text: 'Titulo de la ventana',
                textColor: 'black',
                size: '20px',
            },
            content:{
                text: 'Ingrese el texto que contendrá la ventana modal. El tamaño y color del texto se pueden personalizar.',
                textColor: 'black',
                size: '18px',
            },
        }
    }
    
    const modal = new SimpleModalJS(config);

    modal.show();
</script>

```


### NPM

```bash
npm install simple-modal-js
```

```javascript

import SimpleModalJS from 'simple-modal-js';

const config = {
    overlay:{
        show: "true",
        opacity: '0.8',
    },
    modal:{
        title:{
            text: 'Titulo de la ventana',
            textColor: 'black',
            size: '20px',
        },
        content:{
            text: 'Ingrese el texto que contendrá la ventana modal. El tamaño y color del texto se pueden personalizar.',
            textColor: 'black',
            size: '18px',
        },
    }
}

const modal = new SimpleModalJS(config);

modal.show();



```