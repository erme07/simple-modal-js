
import { createElementHTML, closeIconSVG } from './utils.js';
import { DEFAULTS } from './config.js';

import './style.css';

class SimpleModalJS {

    static #instance = 0;

    constructor({overlay = {}, modal = {}} = {}) {
        this.overlay = { ...DEFAULTS.overlay, ...overlay };
        this.modal = {
            title: { ...DEFAULTS.modal.title, ...modal.title },
            content: { ...DEFAULTS.modal.content, ...modal.content },
        };
        this.modalID = this.#generateID();
        this.$modalWrapper = null
        this.$modal_window = null
        this.$modal_title = null
        this.$modal_text = null
        this.$modal_close = null

        this.#init();
    }

    #generateID() {return `smjs-${++SimpleModalJS.#instance}`} 

    #addCustomProperties() {
        this.$modalWrapper.style.setProperty('--overlay-content', this.overlay.show ? "\"\"" : "none");
        this.$modalWrapper.style.setProperty('--overlay-opacity', this.overlay.opacity);
        this.$modalWrapper.style.setProperty('--modal-title-color', this.modal.title.textColor);
        this.$modalWrapper.style.setProperty('--modal-title-font-family', this.modal.title.font);
        this.$modalWrapper.style.setProperty('--modal-title-font-weight', this.modal.title.weight);
        this.$modalWrapper.style.setProperty('--modal-title-size', this.modal.title.size);
        this.$modalWrapper.style.setProperty('--modal-text-color', this.modal.content.textColor);
        this.$modalWrapper.style.setProperty('--modal-text-size', this.modal.content.size);
        this.$modalWrapper.style.setProperty('--modal-text-font-family', this.modal.content.font);
        this.$modalWrapper.style.setProperty('--modal-text-font-weight', this.modal.content.weight);
    }

    #createModal(){
        this.$modalWrapper= createElementHTML('div', ['simple-modalJS','simple-modalJS--hide'], {id: this.modalID});
        this.$modal_window = createElementHTML('div', ['simple-modalJS__window']);
        this.$modal_title = createElementHTML('h2', ['simple-modalJS__title'], {text: this.modal.title.text}); 
        this.$modal_text = createElementHTML('p', ['simple-modalJS__text'], {text: this.modal.content.text});
        this.$modal_close = createElementHTML('button', ['simple-modalJS__button', 'simple-modalJS__button--close'], {html: closeIconSVG});

        this.$modal_window.appendChild(this.$modal_title);
        this.$modal_window.appendChild(this.$modal_text);
        this.$modal_window.appendChild(this.$modal_close);
        this.$modalWrapper.appendChild(this.$modal_window);
    }

    clickHandler = (e) => {
        if ((e.target === this.$modal_close) || (e.target === this.$modalWrapper))
            this.hide();
    }

    hide() {this.$modalWrapper.classList.add('simple-modalJS--hide')}
    show() {this.$modalWrapper.classList.remove('simple-modalJS--hide')}

    removeFromDOM() {this.$modalWrapper.remove()}
    addToDOM() {document.body.appendChild(this.$modalWrapper)}
    
    #init () {
        if (this.$modalWrapper) return;
        this.#createModal();
        this.#addCustomProperties();
        document.addEventListener("DOMContentLoaded", () => this.addToDOM());
        document.addEventListener("click", this.clickHandler);
    }
}

export default SimpleModalJS;