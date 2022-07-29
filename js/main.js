(() => {
    let upgrades = document.querySelectorAll('.icons-area img'),
        jet = document.querySelector('.jet-area svg'),
        jetItem = document.querySelectorAll('.jet-area g'),
        playBut = document.querySelector('#play-but'),
        pauseBut = document.querySelector('#pause-but'),
        resetBut = document.querySelector('#reset-but'),
        allAudio = document.querySelectorAll('audio'),
        earth = document.querySelector('#earth'),
        purple = document.querySelector('#purple'),
        planets = document.querySelectorAll('.planets img')
        ;
    
    
    

    allAudio.forEach(clip => {clip.volume = 0})

    
   /* function startStop () {
        document.querySelector("#body").classList.toggle("move-bg");
        document.querySelector(".fire").classList.toggle("hidden");
    }*/

    function start () {
        document.querySelector("#body").classList.add("move-bg");
        document.querySelector("#body").style.animationPlayState = "running";
        document.querySelector(".fire").classList.remove("hidden");
        
        
        allAudio.forEach(clip => {clip.play()});
        
        
        earth.classList.add('planetAn');
        purple.classList.add('planetAnLong');

        planets.forEach(planet => planet.style.animationPlayState = "running");
        //setInterval(setProperty, 20000);

        setInterval(setLeftShort, 15100);
        setInterval(setLeftLong, 35000);

    }

    function stop () {
        //document.querySelector("#body").classList.remove("move-bg");
        document.querySelector("#body").style.animationPlayState = "paused";
        document.querySelector(".fire").classList.add("hidden");
        allAudio.forEach(clip => {clip.pause()})

        //earth.classList.remove('planetAn');
        //purple.classList.remove('planetAnLong');

        planets.forEach(planet => planet.style.animationPlayState = "paused");

        setInterval(setLeftShort, 99999999999999);
        setInterval(setLeftLong, 99999999999999);
    }

    function reset () {
        location.reload()

    }








    function allowDrag(event) {
        console.log('started draggin me');
        event.dataTransfer.setData('draggedEl', this.alt);
    } 

    function allowDragOver(event) {
		event.preventDefault();
		console.log('started draggin over me');
	}

	function allowDrop(event) {
		event.preventDefault();
        let droppedElId = event.dataTransfer.getData('draggedEl');
        let current = document.querySelector(`#${droppedElId}`);
        current.classList.toggle("hidden");
        


        let currentAudio = document.querySelector(`#${droppedElId}-audio`);
        
        //currentAudio.defaultMuted = false;

        if (currentAudio.volume == 0) {currentAudio.volume = 1;
        } else {currentAudio.volume = 0;
        }

	}


    









    upgrades.forEach(icon => icon.addEventListener('dragstart',allowDrag));

    jet.addEventListener('dragover', allowDragOver);
    jet.addEventListener('drop', allowDrop);

    playBut.addEventListener('click',start);
    pauseBut.addEventListener('click',stop);
    resetBut.addEventListener('click',reset);


    //jetItem.forEach(item => item.addEventListener('click',hide));


    /*function setProperty() {
        earth.style.left = (`${getRandomBt(-50, 100)}vw`)
    }*/

    function getRandomBt (min, max) {
        return Math.random() * (max - min) + min;
    }

    function setLeftShort () {earth.style.left = (`${getRandomBt(-50, 100)}vw`);}

    function setLeftLong () {purple.style.left = (`${getRandomBt(-50, 100)}vw`);}

    //setInterval(setLeftshort, 15000);
    //setInterval(setLeftLong, 35000);





})();