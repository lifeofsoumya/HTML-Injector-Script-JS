class MyCoffee extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="coffee-box">
        <a target="_blank" href="https://soumyamondal.com/coffee"><img
                style="position:fixed; bottom: 15px; left: 15px; z-index: 9999;" width="150px"
                src="https://soumyamondal.com/img/general/getmecoffee.png"
                alt="Buy me a coffee"></a>
        </div>
        `;
    }
}

customElements.define('my-coffee', MyCoffee);

        function callCoffee() {
            var h = document.getElementsByTagName("body")[0]; var s = document.createElement("my-coffee");
            var newScript = document.createElement('script');
            document.head.appendChild(newScript);
            h.appendChild(s);
        };
callCoffee();
