!function(){
    //let loadPage = document.getElementById('loading')
    let view = document.querySelector('nav.meau')

    let controller = {
        view: null,
        aMenus: null,
        aMeauTris: null,        
        init: function(view){
            this.view = view            
            this.initAnimate()
            this.bindEvens()           
        },
        initAnimate:function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        bindEvens: function () {
            let aMeauTris = this.view.getElementsByClassName('meauTrigger')
            let aMenus = this.view.querySelectorAll('.meau a')
            this.addAActive(aMeauTris)
            for (let i = 0; i < aMenus.length; i++) {
                aMenus[i].onclick =  (e) => {
                    e.preventDefault()
                    this.movToA(e)
                    this.view.classList.remove('active')
                }
            }
            this.view.onmouseenter = function (e) {
                e.currentTarget.classList.add('active')
            }
            this.view.onmouseleave = function (e) {
                e.currentTarget.classList.remove('active')
            }
        },
        addAActive: function(aMeauTris){
            for (let i = 0; i < aMeauTris.length; i++) {
                aMeauTris[i].onmouseenter = function (e) {
                    e.currentTarget.classList.add('active')
                }
                aMeauTris[i].onmouseleave = function (e) {
                    e.currentTarget.classList.remove('active')
                }
            }
        },
        movToA: function(e){
            let a = e.currentTarget
            let href = a.getAttribute('href')
            let element = document.querySelector(href)
            let top = element.offsetTop - 70
            var coords = { x: window.scrollY }; // Start at (0, 0)
            var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
                .to({ x: top }, 1000) // Move to (300, 200) in 1 second.
                .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
                .onUpdate(function () { // Called after tween.js updates 'coords'.
                    // Move 'box' to the position described by 'coords' with a CSS translation.
                    window.scrollTo(0, coords.x)
                })
                .start(); // Start the tween immediately.
        },
    }
    controller.init(view)
}.call()
