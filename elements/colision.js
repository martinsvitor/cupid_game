// Measuring distance for checking collision

const distance = (a, b) => Math.sqrt((a.position.x - b.position.x) ** 2 + (a.position.y - b.position.y) ** 2);

function checkHit(firstElement, secondElement, firstId, secondId){
    if(distance(firstElement,secondElement) < firstElement.height + secondElement.height -15||distance(firstElement,secondElement) < firstElement.width + secondElement.width -15){
        console.log('hit')
        // desireables.splice(targetIndex, 1)
        arrows.splice(arrowIndex,1)
    }
}