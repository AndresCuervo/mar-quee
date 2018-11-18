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
                overflow: hidden;
                height: 25px;
                width: 100px;
            }
            .marquee span {
                position: absolute;
                margin: 0;
                line-height: 25px;
                white-space: nowrap;
                animation: marquee 3s linear infinite;
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
