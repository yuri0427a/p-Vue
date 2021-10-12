Vue.directive('fallback-image', {
    bind: function (el) {
        el.addEventListener('error', function () {
            el.src = 'https://dummyimage.com/400x400/000/ffffff.png&text=no+image'
        })
    },
    update: function (el, binding) {
        console.log('update', binding)
    }
})

new Vue({
    el: '#app',
    data: function () {
        return  {
            altText: 'logo'
        }
    }
})