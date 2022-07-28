(() => {
    let upgrades = document.querySelectorAll('.icons-area img'),
        jet = document.querySelector('.jet-area svg'),
        jetItem = document.querySelectorAll('.jet-area g'),
        playBut = document.querySelector('#play-but'),
        pauseBut = document.querySelector('#pause-but'),
        allAudio = document.querySelectorAll('audio')
        ;
    
    
    

    allAudio.forEach(clip => {clip.volume = 0})

    
    function startStop () {
        document.querySelector("#body").classList.toggle("move-bg");
        document.querySelector(".fire").classList.toggle("hidden");
    }

    function start () {
        document.querySelector("#body").classList.add("move-bg");
        document.querySelector(".fire").classList.remove("hidden");
        allAudio.forEach(clip => {clip.play()})
    }

    function stop () {
        document.querySelector("#body").classList.remove("move-bg");
        document.querySelector(".fire").classList.add("hidden");
        allAudio.forEach(clip => {clip.pause()})
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

        start()
	}


    



    upgrades.forEach(icon => icon.addEventListener('dragstart',allowDrag));

    jet.addEventListener('dragover', allowDragOver);
    jet.addEventListener('drop', allowDrop);

    playBut.addEventListener('click',start);
    pauseBut.addEventListener('click',stop);


    //jetItem.forEach(item => item.addEventListener('click',hide));



})();