(() => {
    let upgrades = document.querySelectorAll('.icons-area img'),
        jet = document.querySelector('.jet-area');


    


    function allowDrag(event) {
        console.log('started draggin me');
        event.dataTransfer.setData('draggedEl', this.id);
    } 

    function allowDragOver(event) {
		event.preventDefault();
		console.log('started draggin over me');
	}

	function allowDrop(event) {
		event.preventDefault();
	}


    upgrades.forEach(icon => icon.addEventListener('dragstart',allowDrag));

    jet.addEventListener('dragover', allowDragOver);
    jet.addEventListener('drop', allowDrop);






})();