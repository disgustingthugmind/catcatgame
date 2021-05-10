 var cat = document.querySelector('.sprite')
        var arrowLeft = document.querySelector('.btn1')
        var arrowRight = document.querySelector('.btn2')
        var arrowUp = document.querySelector('.btn3')
        var arrowDown = document.querySelector('.btn4')
        var posLeft = 0
        var posTop = 0
        arrowLeft.onmousedown = function() {
            posLeft = posLeft - 100
            cat.style.marginLeft = posLeft + 'px'
        }
        arrowRight.onmousedown = function() {
            posLeft = posLeft + 100
            cat.style.marginLeft = posLeft + 'px'
        }
        arrowUp.onmousedown = function() {
            posTop = posTop - 100
            cat.style.marginTop = posTop + 'px'
        }
        arrowDown.onmousedown = function() {
            posTop = posTop + 100
            cat.style.marginTop = posTop + 'px'
        }
        document.onkeydown = function(event) {
            console.log(event)
            if (event.keyCode == 37) {
                posLeft = posLeft - 100
                cat.style.marginLeft = posLeft + 'px'
            }
            if (event.keyCode == 39) {
                posLeft = posLeft + 100
                cat.style.marginLeft = posLeft + 'px'
            }
            if (event.keyCode == 38) {
                posTop = posTop - 100
                cat.style.marginTop = posTop + 'px'
            }
            if (event.keyCode == 40) {
                posTop = posTop + 100
                cat.style.marginTop = posTop + 'px'
            }



        }
