const board = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
var i=0;
function reinitiate(){
    board = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
    i = 0;
}

function winner(){
    if((board[0][0] ==0 && board[0][1] ==0 && board[0][2] == 0) || (board[1][0] ==0 && board[1][1] ==0 && board[1][2] == 0) || (board[2][0] ==0 && board[2][1] ==0 && board[2][2] == 0) || (board[0][0] =0 && board[1][0] ==0 && board[2][0] == 0) || (board[0][1] ==0 && board[1][1] ==0 && board[2][1] == 0) || (board[0][2] ==0 && board[1][2] ==0 && board[2][2] == 0) || (board[0][0] ==0 && board[1][1] ==0 && board[2][2] == 0) || (board[0][2] ==0 && board[1][1] ==0 && board[2][0] == 0)){
        return 0;
    }
    else if((board[0][0] ==1 && board[0][1] ==1 && board[0][2] == 1) || (board[1][0] ==1 && board[1][1] ==1 && board[1][2] == 1) || (board[2][0] ==1 && board[2][1] ==1 && board[2][2] == 1) || (board[0][0] =1 && board[1][0] ==1 && board[2][0] == 1) || (board[0][1] ==1 && board[1][1] ==1 && board[2][1] == 1) || (board[0][2] ==1 && board[1][2] ==1 && board[2][2] ==1) || (board[0][0] ==1 && board[1][1] ==1 && board[2][2] == 1) || (board[0][2] ==1 && board[1][1] ==1 && board[2][0] == 1)){
        return 1;
    }
    return -1;
}


function main(){
    if (i<9){
        var a = winner();
        if (a==0){
            console.log("Player 1 won");
        }
        else if (a==1){
            console.log("Player 2 won");
        }
        i++;
    }
    else{
        console.log("Draw!");
    }
}

function toggle(a){
    //console.log("working");
    var cl = "";
    player = -1;
    if (i%2==0){
        var cl = "x";
        player = 0;
    }
    else{
        var cl = "o";
        player = 1;
    }
    if (a==1){
        if (board[0][0]==-1){
            //console.log("working");
            var box = document.getElementsByClassName("block1");
            box[0].classList.toggle(cl);
            board[0][0] = player;
        }
    }
    else if (a==2){
        if (board[0][1]==-1){
            //console.log("working");
            var box = document.getElementsByClassName("block2");
            box[0].classList.toggle(cl);
            board[0][1] = player;
        }
    }
    else if (a==3){
        if (board[0][2]==-1){
            //console.log("working");
            var box = document.getElementsByClassName("block3");
            box[0].classList.toggle(cl);
            board[0][2] = player;
        }
    }
    else if (a==4){
        if (board[1][0]==-1){
            //console.log("working");
            var box = document.getElementsByClassName("block4");
            box[0].classList.toggle(cl);
            board[1][0] = player;
        }
    }
    else if (a==5){
        if (board[1][1]==-1){
            //console.log("working");
            var box = document.getElementsByClassName("block5");
            box[0].classList.toggle(cl);
            board[1][1] = player;
        }
    }
    else if (a==6){
        if (board[1][2]==-1){
            //console.log("working");
            var box = document.getElementsByClassName("block6");
            box[0].classList.toggle(cl);
            board[1][2] = player;
        }
    }
    else if (a==7){
        if (board[2][0]==-1){
            //console.log("working");
            var box = document.getElementsByClassName("block7");
            box[0].classList.toggle(cl);
            board[2][0] = player;
        }
    }
    else if (a==8){
        if (board[2][1]==-1){
            //console.log("working");
            var box = document.getElementsByClassName("block8");
            box[0].classList.toggle(cl);
            board[2][1] = player;
        }
    }
    else {
        if (board[2][2]==-1){
            //console.log("working");
            var box = document.getElementsByClassName("block9");
            box[0].classList.toggle(cl);
            board[2][2] = player;
        }
    }
    main();
    // console.log(board);
}