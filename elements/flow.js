// const projectiles = new Projectile(1)
let projectiles = []

 // Creating animation
    
 function update() {
    if(startGame){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        player.draw();
        // enemies.draw();
        projectiles.forEach(projectile =>{
            projectile.draw()
        })
        enemies.forEach(enemy => {
            enemy.draw();
            enemy.move()
        })
        
    }
    
requestAnimationFrame(update)
}

addEventListener('click',(event)=>{
    console.log(event)
if (!startGame) {
    player.draw()
    startGame = true
}
else{
    projectiles.push(new Projectile(1, event.x, event.y))
    console.log(projectiles)
}

})
addEventListener('keydown', (e)=>{
    // if(e.key === 'ArrowUp'){
    //     player.moveUp()
    // }
    
switch(e.key){
        case 'ArrowUp':
        case 'w':
        case 'W':
            player.moveUp()
            console.log(player.speedX, player.speedY)
            break;
        case 'ArrowDown':
        case 's':
        case 'S':
            player.moveDown()
            console.log(player.speedX, player.speedY)
            break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
            player.moveLeft()
            console.log(player.speedX, player.speedY)
            break;
        case 'ArrowRight':
        case 'd':
        case 'D':
            player.moveRight()
            console.log(player.speedX, player.speedY)
        break;

}

})

// addEventListener('keydown', (e)=> {
//     if(e.key === 'ArrowLeft'){
//         player.moveLeft()
//     }
// })
update()