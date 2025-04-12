export function createElementHTML(tag, classNames = [], options = {}) {
    const element = document.createElement(tag);
    if (classNames.length) element.classList.add(...classNames);
    if (options.text) element.textContent = options.text;
    if (options.html) element.innerHTML = options.html;
    if (options.id) element.id = options.id;
    return element;
}

export const closeIconSVG = `
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
    <path d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
`;