//import './style.css';

class SimpleModalJS {

    $modalWrapper = null
    $modal_window = null
    $modal_title = null
    $modal_text = null
    $modal_close = null

    constructor({overlay = {}, modal = {}} = {}) {

        this.overlay = {
            show: overlay.show ?? true,
            opacity: overlay.opacity ?? 0.8,
        };
        this.modal = {
            title: {
                text: modal.title?.text ?? 'Window title',
                textColor: modal.title?.textColor ?? 'black',
                size: modal.title?.size ?? '20px',
            },
            content: {
                text: modal.content?.text ?? 'Enter the text that will appear in the modal window. The text size and color can be customized.',
                textColor: modal.content?.textColor ?? 'black',
                size: modal.content?.size ?? '18px',
            },
        };
        this.init();
    }

    #addCustomProperties() {
        if(this.overlay.show)
            this.$modalWrapper.style.setProperty('--overlay-content', "\"\"");
        else
            this.$modalWrapper.style.setProperty('--overlay-content', "none");
        this.$modalWrapper.style.setProperty('--overlay-opacity', this.overlay.opacity);
        this.$modalWrapper.style.setProperty('--modal-title-color', this.modal.title.textColor);
        this.$modalWrapper.style.setProperty('--modal-title-size', this.modal.title.size);
        this.$modalWrapper.style.setProperty('--modal-text-color', this.modal.content.textColor);
        this.$modalWrapper.style.setProperty('--modal-text-size', this.modal.content.size);
    }

    #createModal(){
        this.$modalWrapper = document.createElement('div');
        this.$modalWrapper.classList.add('simple-modalJS');
        this.hide();
        
        this.$modal_window = document.createElement('div');
        this.$modal_window.classList.add('simple-modalJS__window');

        this.#createModalTitle();
        this.#createModalText();
        this.#createCloseButton();

        this.$modal_window.appendChild(this.$modal_title);
        this.$modal_window.appendChild(this.$modal_text);
        this.$modal_window.appendChild(this.$modal_close);
        
        this.$modalWrapper.appendChild(this.$modal_window);
    }

    #createModalTitle() {
        this.$modal_title = document.createElement('h2');
        this.$modal_title.classList.add('simple-modalJS__title');
        this.$modal_title.textContent = this.modal.title.text;
    }

    #createModalText() {
        this.$modal_text = document.createElement('p');
        this.$modal_text.classList.add('simple-modalJS__text');
        this.$modal_text.textContent = this.modal.content.text;
    }

    #createCloseButton() {
        this.$modal_close = document.createElement('button');
        this.$modal_close.classList.add('simple-modalJS__button', 'simple-modalJS__button--close');
        this.$modal_close.id = 'close';
        this.$modal_close.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                <path d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        `;
    }

    clickHandler = (e) => {
        if ((e.target === this.$modal_close) || (e.target === this.$modalWrapper))
            this.hide();
    }

    hide(){
        this.$modalWrapper.classList.add('simple-modalJS--hide');
    }
    show(){
        this.$modalWrapper.classList.remove('simple-modalJS--hide');
    }

    removeFromDOM() {
        this.$modalWrapper.remove();
    }

    addToDOM() {
        document.body.appendChild(this.$modalWrapper);
    }
    
    init () {
        if (this.$modalWrapper) return;
        this.#createModal();
        this.#addCustomProperties();
        document.addEventListener("DOMContentLoaded", () => this.addToDOM());
        document.addEventListener("click", this.clickHandler);
    }
}

export default SimpleModalJS;