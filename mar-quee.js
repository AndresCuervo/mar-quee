customElements.define('mar-quee',
class extends HTMLElement {
    constructor() {
        super();
        // let template = document.getElementById('mar-quee');
        let template = document.createElement('template');
        // CSS taken from: https://stackoverflow.com/a/44805879
        template.innerHTML = `
        <style>
            .marquee {
                position: relative;
                display: inline-block;
                overflow: hidden;
                height: var(--marquee-height, 25px);
                width: var(--marquee-width, 100px);
            }
            .marquee span {
                position: absolute;
                margin: 0;
                line-height: var(--marquee-height, 25px);
                white-space: nowrap;
                animation: marquee;
                animation-timing-function: var(--marquee-animation-timing-function, linear);
                animation-duration: var(--marquee-animation-duration, 3s);
                animation-iteration-count: var(--marquee-animation-iteration-count, infinite);
            }
            @keyframes marquee {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
            }
        </style>
        <div class="marquee">
            <span>
                ${this.innerHTML || "EXAMPLE TEXT"}
            </span>
        </div>
        `;
        let templateContent = template.content;
        console.log(this.innerHTML)

        const shadowRoot = this.attachShadow({mode: 'open'})
            .appendChild(templateContent.cloneNode(true));
    }
})
