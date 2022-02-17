class MyCoffee extends HTMLElement { // MyCoffee is the portion containing html code to be entered in the tag
    connectedCallback() {
        this.innerHTML = ` 
        <div class="coffee-box">
        <a target="_blank" href="https://soumyamondal.com/coffee"><img
                style="position:fixed; bottom: 15px; left: 15px; z-index: 9999;" width="150px"
                src="https://soumyamondal.com/img/general/getmecoffee.png"
                alt="Buy me a coffee"></a>
        </div>
        `; // html code ends here
    }
}

customElements.define('my-coffee', MyCoffee); // my-coffee is a custom html tag which can be called using <my-coffee>

        function callCoffee() { // function to insert the html content inside the html file
            var h = document.getElementsByTagName("body")[0]; var s = document.createElement("my-coffee"); // gets the body and creates an tag element automatically 
            var newScript = document.createElement('script'); // automatially creates a script inside the html file
            document.head.appendChild(newScript); // inserts the newly created script to the head of the html file
            h.appendChild(s); // inserts the custom tag in the body of the file
        };
callCoffee();
