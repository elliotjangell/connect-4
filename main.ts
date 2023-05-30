function clear_board () {
    for (let value of sprites.allOfKind(0)) {
        tiles.setWallAt(value.tilemapLocation(), false)
        sprites.destroy(value)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (canMove) {
        if (!(tiles.tileAtLocationIsWall(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom)))) {
            if (move == 0) {
                canMove = false
                move = 1
                mySprite.ay = 500
                pause(1000)
                tiles.setWallAt(mySprite.tilemapLocation(), true)
                make_piece()
                canMove = true
            }
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (canMove) {
        if (!(tiles.tileAtLocationIsWall(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom)))) {
            if (move == 1) {
                canMove = false
                move = 0
                mySprite.ay = 500
                pause(1000)
                tiles.setWallAt(mySprite.tilemapLocation(), true)
                make_piece()
                canMove = true
            }
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (move == 0) {
        if (canMove) {
            if (!(mySprite.tilemapLocation().column == 1)) {
                tiles.placeOnTile(mySprite, mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))
            }
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (move == 0) {
        if (canMove) {
            if (!(mySprite.tilemapLocation().column == 7)) {
                tiles.placeOnTile(mySprite, mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right))
            }
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (move == 1) {
        if (canMove) {
            if (!(mySprite.tilemapLocation().column == 7)) {
                tiles.placeOnTile(mySprite, mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right))
            }
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (move == 1) {
        if (canMove) {
            if (!(mySprite.tilemapLocation().column == 1)) {
                tiles.placeOnTile(mySprite, mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))
            }
        }
    }
})
function make_piece () {
    if (move == 0) {
        mySprite = sprites.create(img`
            . . . 4 4 4 4 4 4 4 4 4 4 . . . 
            . . 4 2 2 2 2 2 2 2 2 2 2 4 . . 
            . 4 2 2 2 2 2 2 2 2 2 2 2 2 4 . 
            4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
            4 2 2 2 4 4 4 2 2 2 4 4 2 2 2 e 
            4 2 2 2 4 4 4 2 2 2 4 4 2 2 2 e 
            4 2 2 2 4 4 4 2 2 2 4 4 2 2 2 e 
            4 2 2 2 4 4 4 2 2 2 4 4 2 2 2 e 
            4 2 2 2 4 4 4 4 4 4 4 4 2 2 2 e 
            4 2 2 2 4 4 4 4 4 4 4 4 2 2 2 e 
            4 2 2 2 2 2 2 2 2 2 4 4 2 2 2 e 
            4 2 2 2 2 2 2 2 2 2 4 4 2 2 2 e 
            4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
            . 4 2 2 2 2 2 2 2 2 2 2 2 2 e . 
            . . 4 2 2 2 2 2 2 2 2 2 2 e . . 
            . . . 4 e e e e e e e e e . . . 
            `, 0)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 0))
        mySprite.z = -50
    } else if (move == 1) {
        mySprite = sprites.create(img`
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 5 5 5 5 5 5 5 5 5 5 1 . . 
            . 1 5 5 5 5 5 5 5 5 5 5 5 5 1 . 
            1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 
            1 5 5 5 1 1 1 5 5 5 1 1 5 5 5 4 
            1 5 5 5 1 1 1 5 5 5 1 1 5 5 5 4 
            1 5 5 5 1 1 1 5 5 5 1 1 5 5 5 4 
            1 5 5 5 1 1 1 5 5 5 1 1 5 5 5 4 
            1 5 5 5 1 1 1 1 1 1 1 1 5 5 5 4 
            1 5 5 5 1 1 1 1 1 1 1 1 5 5 5 4 
            1 5 5 5 5 5 5 5 5 5 1 1 5 5 5 4 
            1 5 5 5 5 5 5 5 5 5 1 1 5 5 5 4 
            1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            . 1 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
            . . 1 5 5 5 5 5 5 5 5 5 5 4 . . 
            . . . 1 4 4 4 4 4 4 4 4 4 . . . 
            `, 0)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 0))
        mySprite.z = -50
    }
}
let mySprite: Sprite = null
let canMove = false
let move = 0
tiles.setCurrentTilemap(tilemap`level1`)
move = 0
make_piece()
canMove = true
