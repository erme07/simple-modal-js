# simpleModalJS

Una librería simple para crear ventanas modales personalizadas con JavaScript.

## Instalación

### Via NPM

```bash
npm install simple-modal-js
```

```javascript

import SimpleModalJS from 'simple-modal-js';

const modal = new simpleModalJS(config);


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

```