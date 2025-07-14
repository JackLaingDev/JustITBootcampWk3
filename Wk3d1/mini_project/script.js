/*
This Project is to demonstrate a basic Tic Tac Toe game within JS made within 2 hours.

Overall System:
    * Game



Improvements:


*/

const gameElement = document.getElementById('game');
const winner = document.getElementById('winner');

 let turn = 0;

class Player{

    constructor(player){
        this.player = player;                                                   // represented as 0 or 1
    }
}

class Cell{

    constructor(cell){
        this.cellElement = cell;
        this.clicked = false;
        this.player = -1;                                                          // Default value before being clicked by a 
    }

    onClick(player){
        this.player = player;

        if(![0, 1].includes(player)){
            console.log(`ERROR: player id can either be 0 or 1, not ${player}`);
        } else if(player === 0 && !this.clicked){
            this.cellElement.classList.add('player1Cell');
        } else if(player === 1 && !this.clicked){
            this.cellElement.classList.add('player2Cell');

        }
        turn++;
        this.clicked = true;
    }

    getPlayer(){
        return this.player;
    }

    reset(){
        this.clicked = false;
        this.player = -1;  
        this.cellElement.classList.remove('player1Cell');
        this.cellElement.classList.remove('player2Cell');
    }
}

// Cells
const cell1 = new Cell(document.getElementById("1"));
const cell2 = new Cell(document.getElementById("2"));
const cell3 = new Cell(document.getElementById("3"));
const cell4 = new Cell(document.getElementById("4"));
const cell5 = new Cell(document.getElementById("5"));
const cell6 = new Cell(document.getElementById("6"));
const cell7 = new Cell(document.getElementById("7"));
const cell8 = new Cell(document.getElementById("8"));
const cell9 = new Cell(document.getElementById("9"));

const cells = [];
cells.push(cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9);

class Game{

    constructor(player1, player2){
        this.gameElement = gameElement;

        this.gameOver = false;

        this.player1 = player1;
        this.player2 = player2;


        this.players = [];
        this.players.push(player1);                                              // Player 1 at index 0
        this.players.push(player2);                                              // Player 2 at index 1

        this.board = [[cell1, cell2, cell3],
                      [cell4, cell5, cell6],
                      [cell7, cell8, cell9]]
    }

    getPlayerTurn(turn){
        const player = turn % 2;
        return this.players[player];
    }

    verifyLine(line){
        let player1count = 0;
        let player2count = 0;

        for(const cell of line){
            const player = cell.getPlayer();

            if(player === -1){break;}
            else if(player === 0){player1count++;}
            else if(player === 1){player2count++;}
        }

        if(player1count === 3){return 0;}
        if(player2count === 3){return 1;}
    }

    verifyWin(){

        // Define vertical lines
        const vLine1 = [cell1, cell4, cell7];
        const vLine2 = [cell2, cell5, cell8];
        const vLine3 = [cell3, cell6, cell9];

        // Define horizontal lines
        const hLine1 = this.board[0];
        const hLine2 = this.board[1];
        const hLine3 = this.board[2];

        // Define diagnol lines
        const dLine1 = [cell1, cell5, cell9];
        const dLine2 = [cell3, cell5, cell7];

        let lines = [];

        lines.push(vLine1, vLine2, vLine3, hLine1, hLine2, hLine3, dLine1, dLine2);

        for(const line of lines){
            if(this.verifyLine(line) === 0){
                winner.textContent = "Previous Winner: Player 1";
                this.gameOver = true;
                return
            }
            if(this.verifyLine(line) === 1){
                winner.textContent = "Previous Winner: Player 2";
                this.gameOver = true;
                return
            }
        }
    }

    run(){
        if(this.gameElement){
            this.gameElement.addEventListener('click', (event) =>{

                const clickedElement = event.target.closest('.gameCell');

                if(clickedElement){

                    // Gets the Id of the clicked element
                    const id = clickedElement.id;
                    const player = this.getPlayerTurn(turn).player;

                    switch(id){
                        case "1": cell1.onClick(player); break;
                        case "2": cell2.onClick(player); break;
                        case "3": cell3.onClick(player); break;
                        case "4": cell4.onClick(player); break;
                        case "5": cell5.onClick(player); break;
                        case "6": cell6.onClick(player); break;
                        case "7": cell7.onClick(player); break;
                        case "8": cell8.onClick(player); break;
                        case "9": cell9.onClick(player); break;
                    }
                }
                this.verifyWin();

                if(this.gameOver === true){
                // reset to default
                    turn = 0;
                    for(const cell of cells){
                        cell.reset();
                    }
                }
            })
        }
    }
}

const player1 = new Player(0);
const player2 = new Player(1);

const game = new Game(player1, player2);
game.run();

