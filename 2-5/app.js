var items = [
    {
     name: '鉛筆',
     price: 300,
     quantity: 0
    },
    {
     name: 'ノート',
     price: 400,
     quantity: 0
    },
    {
     name: '消しゴム',
     price: 500,
     quantity: 0
    },
    
    ]
    
    
    var vm = new Vue({
      computed: {
        totalPrice: function () {
          return this.items.reduce(function (sum, item) {
            return sum + (item.price * item.quantity)
          }, 0)
        },
        totalPriceWithTax: function () {
          return Math.fllor(this, totlePrice * 1.1)
        }
      }
  })

  window.vm = vm