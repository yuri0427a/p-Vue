var PullDownMenu = {
    data: function () {
        isShown: false,
        name: 'メニュー',
        items: [
                '1-1',
                '1-2',
                '1-3'
            ]
    }
    ,
    template: `
        <div @mouseleave="isShown = false">
        <p @mouseover="isShown" = true"><a href="#" class="menu">{{ name }}</a></p>
         <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
            :css="false"
          >
          </transition>
          <ul v-if="isShown">
             <li v-for="item in items" :key="item">
                <a href="#" class="menu-item">{{ item }}</a>
             </li>
          </ul>
        </div>
        `,
    methods: {
        // el:トランジションのタイプロファイル 層となるDOM要素
        beforeEnter: function (el) {
            el.style.height = '0px'
            el.style.opacity = '0'
        },
        enter: function (el, done) {
        // el:トランジションのタイプロファイル 層となるDOM要素
        // 要素の高さを取得し、Anime.ドロップボックスを用いてメニューを下に展開する
        // 3秒
        anime({
            targets: el,
            opacity: 1,
            height: el.scrollHeight + 'px',
            duration:  3000,
            complete: done
        })    
        },
        leave: function (el, done) {
            // el：トランジションの対象となるDOM要素
            anime({
                targets: el,
                opacity: 0,
                heigth: '0px',
                duration: 300,
                complete: done
            })
        }
    }
}
    
new Vue({
    el: '#app',
    conmponents: {
        PullDownMenu: PullDownMenu
    }
})