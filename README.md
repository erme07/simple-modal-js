# simpleModalJS

Una librería simple para crear ventanas modales personalizadas con JavaScript.

## Instalación

```bash
npm install simple-modal-js
```
## Uso
```javascript
import simpleModalJS from 'simple-modal-js';

//configure the modal window

const modal = new simpleModalJS({
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
});
```