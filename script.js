let areas = {
    a: null,
    b: null,
    c: null
};

document.querySelectorAll('.item').forEach(item=>{
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
    item.addEventListener('touchstart', touchStart);
    item.addEventListener('touchend', touchEnd);
})

document.querySelectorAll('.area').forEach(area=>{
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
    area.addEventListener('touchenter', touchEnter);
    area.addEventListener('touchleave', touchLeave);
    area.addEventListener('touchmove', touchMove);
})

//function item

function dragStart(e){
    e.currentTarget.classList.add('dragging');
}

function dragEnd(e){
    e.currentTarget.classList.remove('dragging');
}

function touchStart(e){
    e.preventDefault();
    e.currentTarget.classList.add('dragging');
}

function touchEnd(e){
    e.preventDefault();
    e.currentTarget.classList.remove('dragging');
}

//function area
function dragOver(e){    
    if(e.currentTarget.querySelector('.item') === null){
    e.preventDefault();
    e.currentTarget.classList.add('hover');
    }
}
function dragLeave(e){
    e.currentTarget.classList.remove('hover');

}

function drop(e){
    e.preventDefault();
    e.currentTarget.classList.remove('hover');
    let dragItem = document.querySelector('.item.dragging');
    if(e.currentTarget.querySelector('.item') === null){
        e.currentTarget.appendChild(dragItem);
        updateAreas();
    }
}

function touchEnter(e){
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}

function touchLeave(e){
    e.preventDefault();
    e.currentTarget.classList.remove('hover');
}

function touchMove(e){
    e.preventDefault();
}

//neutralarea

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);
document.querySelector('.neutralArea').addEventListener('touchenter', touchEnterNeutral);
document.querySelector('.neutralArea').addEventListener('touchleave', touchLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('touchmove', touchMoveNeutral);

//function neutral

function dragOverNeutral(e){    
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}
function dragLeaveNeutral(e){
    e.currentTarget.classList.remove('hover');
}

function dropNeutral(e){
    e.preventDefault();
    e.currentTarget.classList.remove('hover');
    let dragItem = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(dragItem);
    updateAreas();
}

function touchEnterNeutral(e){
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}

function touchLeaveNeutral(e){
    e.preventDefault();
    e.currentTarget.classList.remove('hover');
}

function touchMoveNeutral(e){
    e.preventDefault();
}

//logic functions

function updateAreas(){
    document.querySelectorAll('.area').forEach(area=>{
        let name = area.getAttribute('data-name');

        if(area.querySelector('.item') !== null){
            areas[name] = area.querySelector('.item').innerHTML;
        }else{
            areas[name] = null;
        }
    });
    if(areas.a === '1' && areas.b === '2' && areas.c ==='3'){
        document.querySelector('.areas').classList.add('correct');
    }else{
        document.querySelector('.areas').classList.remove('correct');
    }
}
