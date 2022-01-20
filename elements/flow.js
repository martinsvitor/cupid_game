    const arrows =[] // Quiver (Array of arrows to limit shots)
    const targets =[] // All targets together
    const desireables = [] // Good Targets, earns you points for hitting
    const undesireables = new Array(10) // Bad Targets, takes away lifes for every hit
    let score = 0;
    
    // Creating targets
    function spawnTargets (){
       let imageId = Math.floor(Math.random()*5)
                desireables.push(new Desireables(1, imageId))
                    
    };

    // Creating animation
        
    function update() {
        
        if(startGame){
            ctx.clearRect(0,0, canvas.width, canvas.height);
            player.draw();
            
      
        arrows.forEach((arrow, arrowIndex) =>{
            arrow.traceShot()
            this.id = arrowIndex
        })
        undesireables.forEach((target, targetIndex) => {
            target.draw();
            target.move(1)
            
            arrows.forEach((arrow, arrowIndex) =>{
                if(distance(arrow,target) < arrow.height + target.height -15||distance(arrow,target) < arrow.width + target.width -15){
                    undesireables.splice(targetIndex, 1)
                    arrows.splice(arrowIndex,1)
                }
            })
        })
        desireables.forEach((target, targetIndex) => {
            
            target.draw();
            target.move(1);
            if(target.position.x > canvas.width + target.width || target.position.y > canvas.height + target.height){
                desireables.splice(targetIndex,1)
            }
            
           
            arrows.forEach((arrow, arrowIndex) =>{
                // console.log(distance(arrow,target))
                if(distance(arrow,target) < arrow.height + target.height/2 ||distance(arrow,target) < arrow.width + target.width/10 ){
                    score ++;
                    document.querySelector('#score').innerHTML= `Score is: ${score}`
                    desireables.splice(targetIndex, 1)
                    arrows.splice(arrowIndex,1)
                }
                if(arrow.x + arrow.width < 0 || arrow.x - arrow.width > canvas.width || arrow.y + arrow.height < 0 || arrow.y - arrow.height > canvas.height){
                    arrows.splice(arrowIndex,1)
                }
            })
        })
        // if(target.x > canvas.width || target.x < 0 || target.y > canvas.height || target.y < 0 ){
            // desireables.splice(target, 1)
                    // }
        
    }
    // console.log(desireables)
    requestAnimationFrame(update)
}
function shootArrows(x,y){
    arrows.push(new Projectile(player.x+ 18, player.y + 10, {
        x,y
    }, null))
   
}

addEventListener('click',(event)=>{
    const angle = Math.atan2(event.offsetY - player.y, event.offsetX - player.x)
    const directionX = Math.cos(angle) *4
    const directionY = Math.sin(angle) *4
    
    
    
    if (!startGame) {
        player.draw()
        setInterval(() => {
            spawnTargets()
        }, 1000)
        startGame = true
    }
    else{
        shootArrows(directionX, directionY)
        // arrows.push(new Projectile(player.x+ 18, player.y + 10, {
        //     x: directionX,
        //     y: directionY
        // }, null)) 
    }
})

let playerImgId = 0
addEventListener('keydown', (e)=>{
    
    switch(e.code){
        case 'ArrowUp':
        case 'KeyW':
            // changePlayerImg()
            player.image.src = imgArray[1]
            player.moveUp()
            break;
        case 'ArrowDown':
        case 'KeyS':
            // changePlayerImg()
            player.image.src = imgArray[0]
            player.moveDown()
            break;
        case 'ArrowLeft':
        case 'KeyA':
            // changePlayerImg()
            player.moveLeft()
            break;
        case 'ArrowRight':
        case 'KeyD':
            // changePlayerImg()
            player.moveRight()
            break;
        case 'Space':
            arrows.push(new Projectile(player.x+ 18, player.y, {
                x: Math.cos(-1.57) *4,
                y: Math.sin(-1.57) *4
            }, null)) 
            break;


}

})

update()
//         setInterval(() => {
//             spawnTargets()
//         }, 1000)