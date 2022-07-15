(() => {
    let upgrades = document.querySelectorAll('.icons-area img'),
        jet = document.querySelector('.jet-area svg'),
        jetItem = document.querySelectorAll('.jet-area g'),
        playBut = document.querySelector('#play-but'),
        pauseBut = document.querySelector('#pause-but');
    


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
	}

    function startStop () {
        document.querySelector("#body").classList.toggle("move-bg");
        document.querySelector(".fire").classList.toggle("hidden");
    }
    



    upgrades.forEach(icon => icon.addEventListener('dragstart',allowDrag));

    jet.addEventListener('dragover', allowDragOver);
    jet.addEventListener('drop', allowDrop);

    playBut.addEventListener('click',startStop);
    pauseBut.addEventListener('click',startStop);


    jetItem.forEach(item => item.addEventListener('click',hide));





})();