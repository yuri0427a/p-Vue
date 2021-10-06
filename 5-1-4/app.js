var MyButton = {
    template:
        <button>
            <slot>OK</slot>
        </button>
}

var MyPage = {
    template: `
        <div>
            <header>
                <slot name="header"></slot>
            </header>
        </div>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    `
}

new Vue({
    el: '#app',
    components: {
        MyButton: MyButton
    }
})