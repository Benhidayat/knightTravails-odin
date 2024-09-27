// Breadth first search
const knightMoves = (src, dst) => {

    const BOARD_SIZE = 8;
    const KNIGHT_MOVES =  [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ]

    const queue = [];
    const trails = [];  //to store all the path if we reach destination
    const visited = new Set(); // to store already visited square to avoid infinity loop

    //make sure our starting point and destination within 8 x 8 board
    if (src[0] >= 0 && src[0] < BOARD_SIZE && src[1] >= 0 && src[1] < BOARD_SIZE) {
        if (dst[0] >= 0 && dst[0] < BOARD_SIZE && dst[1] >= 0 && dst[1] < BOARD_SIZE) {
            queue.push(src);
            visited.add(src.toString());
        }
        console.log('destination must within 8 x 8 board range');
    } else {
        console.log('src must be within 8 x 8 board range');
    }

    while (queue.length) {
        const current = queue.shift();
        const[currentX, currentY] = current;
        trails.push(current);

        if (currentX === dst[0] && currentY === dst[1]) {
            trails.forEach(trail => {
                console.log(trail);
            })

            return true;
        }

        for (let move of KNIGHT_MOVES) {
            const [ moveX, moveY] = move;
            const nextX = moveX + currentX;
            const nextY = moveY + currentY;

            if (nextX >= 0 && nextX < BOARD_SIZE && nextY >= 0 && nextY < BOARD_SIZE) {
                if (!visited.has(nextX + ',' + nextY)) {
                    queue.push([nextX, nextY]);
                    visited.add(nextX + ',' + nextY);
                }
            } 
        }

    }
    return -1;
}

knightMoves([0,0], [3,3]);