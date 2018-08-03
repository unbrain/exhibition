!function(){
    let view = document.querySelector('#topNav')   
    let controller = {
        view: null,
        init: function(view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            let view = this.view
            document.addEventListener('scroll', (e) => {
                if (window.scrollY !== 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
        },
        active:function(){
            this.view.classList.add('active')
        },
        deactive:function(){
            this.view.classList.remove('active')
        },       
    }
    controller.init(view)
}.call()
