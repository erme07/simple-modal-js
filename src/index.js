
class SimpleModalJS {

    #initialized = false

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

    #applyStyles() {
        this.$modal.style.setProperty('--overlay-opacity', this.overlay.opacity);
        this.$modal.style.setProperty('--modal-title-color', this.modal.title.textColor);
        this.$modal.style.setProperty('--modal-title-size', this.modal.title.size);
        this.$modal.style.setProperty('--modal-text-color', this.modal.content.textColor);
        this.$modal.style.setProperty('--modal-text-size', this.modal.content.size);
        this.$modal.classList.add('simple-modalJS');
    }

    #createModal(){
        this.$modal = document.createElement('div');
        this.#applyStyles();
        
        const $modalContent = document.createElement('div');
        $modalContent.classList.add('simple-modalJS__content');
        const $modalTitle = this.#createModalTitle();
        const $modalText = this.#createModalText();
        const $modalClose = this.#createCloseButton();

        $modalContent.appendChild($modalTitle);
        $modalContent.appendChild($modalText);
        $modalContent.appendChild($modalClose);
        this.hide();
        this.$modal.appendChild($modalContent);
    }

    #createModalTitle() {
        const $modalTitle = document.createElement('h2');
        $modalTitle.classList.add('simple-modalJS__title');
        $modalTitle.textContent = this.modal.title.text;
        return $modalTitle;
    }

    #createModalText() {
        const $modalText = document.createElement('p');
        $modalText.classList.add('simple-modalJS__text');
        $modalText.textContent = this.modal.content.text;
        return $modalText;
    }

    #createCloseButton() {
        const $modalClose = document.createElement('button');
        $modalClose.classList.add('simple-modalJS__button', 'simple-modalJS__button--close');
        $modalClose.id = 'close';
        $modalClose.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                <path d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        `;
        return $modalClose;
    }

    clickHandler = (e) => {
        if ((e.target.id === "close") || (e.target.classList.contains("simple-modalJS")))
            this.close();
    }

    hide(){
        this.$modal.classList.add('simple-modalJS--hide');
        document.removeEventListener("click", this.clickHandler);
    }
    show(){
        this.$modal.classList.remove('simple-modalJS--hide');
        document.addEventListener("click", this.clickHandler);
    }
    
    init () {
        if (this.#initialized) return;
        document.addEventListener("DOMContentLoaded", () => {
            this.#createModal();
            document.body.appendChild(this.$modal);
            this.#initialized = true;
        });
    }
}

export default SimpleModalJS;