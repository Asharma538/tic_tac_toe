var board = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
var classFilled = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
var i=0;
function reinitiate(){
    document.getElementsByClassName("block1")[0].classList.toggle(classFilled[0][0]);
    document.getElementsByClassName("block2")[0].classList.toggle(classFilled[0][1]);
    document.getElementsByClassName("block3")[0].classList.toggle(classFilled[0][2]);
    document.getElementsByClassName("block4")[0].classList.toggle(classFilled[1][0]);
    document.getElementsByClassName("block5")[0].classList.toggle(classFilled[1][1]);
    document.getElementsByClassName("block6")[0].classList.toggle(classFilled[1][2]);
    document.getElementsByClassName("block7")[0].classList.toggle(classFilled[2][0]);
    document.getElementsByClassName("block8")[0].classList.toggle(classFilled[2][1]);
    document.getElementsByClassName("block9")[0].classList.toggle(classFilled[2][2]);
    board = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
    classFilled = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
    i = 0;
}

function winner(){
    if(
        (board[0][0]==0 && board[0][1]==0 && board[0][2]==0) || 
        (board[1][0]==0 && board[1][1]==0 && board[1][2]==0) || 
        (board[2][0]==0 && board[2][1]==0 && board[2][2]==0) || 
        (board[0][0]==0 && board[1][0]==0 && board[2][0]==0) || 
        (board[0][1]==0 && board[1][1]==0 && board[2][1]==0) || 
        (board[0][2]==0 && board[1][2]==0 && board[2][2]==0) || 
        (board[0][0]==0 && board[1][1]==0 && board[2][2]==0) || 
        (board[0][2]==0 && board[1][1]==0 && board[2][0]==0) ){
        return 0;
    }
    else if(
        (board[0][0]==1 && board[0][1]==1 && board[0][2]==1) || 
        (board[1][0]==1 && board[1][1]==1 && board[1][2]==1) || 
        (board[2][0]==1 && board[2][1]==1 && board[2][2]==1) || 
        (board[0][0]==1 && board[1][0]==1 && board[2][0]==1) || 
        (board[0][1]==1 && board[1][1]==1 && board[2][1]==1) || 
        (board[0][2]==1 && board[1][2]==1 && board[2][2]==1) || 
        (board[0][0]==1 && board[1][1]==1 && board[2][2]==1) || 
        (board[0][2]==1 && board[1][1]==1 && board[2][0]==1) ){
        return 1;
    }
    return -1;
}

function main(){
    var a = winner();
    if ( i<9 || a==1 || a==0 ){
        if (a==0){
            document.getElementById("wonWho").innerText = "Player-1 Won ! ";
            document.getElementsByClassName("gif")[0].classList.toggle("invisible");
            document.getElementById("tic-tac-toe").classList.toggle("invisible");
            document.getElementById("rabbie").src = "/Images/winner_gid.gif";
            setTimeout(hide_func1,4000);
            function hide_func1() {
                document.getElementById("tic-tac-toe").classList.toggle("invisible");
                document.getElementsByClassName("gif")[0].classList.toggle("invisible");
                var w = document.getElementsByClassName("w1")[0].innerText;
                w = parseInt(w,10);
                w = w+1
                document.getElementsByClassName("w1")[0].innerText = w;
                reinitiate();
            }
        }
        else if (a==1){
            document.getElementById("wonWho").innerText = "Player-2 Won !";
            document.getElementsByClassName("gif")[0].classList.toggle("invisible");
            document.getElementById("tic-tac-toe").classList.toggle("invisible");
            document.getElementById("rabbie").src = "/Images/winner_gid.gif";
            setTimeout(hide_func2,4000);
            function hide_func2() {
                document.getElementById("tic-tac-toe").classList.toggle("invisible");
                document.getElementsByClassName("gif")[0].classList.toggle("invisible");
                var w = document.getElementsByClassName("w2")[0].innerText;
                w = parseInt(w,10);
                w = w+1
                document.getElementsByClassName("w2")[0].innerText = w;
                reinitiate();
            }
        }
    }
    else{
        document.getElementById("wonWho").innerText = "Match draw !";
        document.getElementsByClassName("gif")[0].classList.toggle("invisible");
        document.getElementById("tic-tac-toe").classList.toggle("invisible");
        document.getElementById("rabbie").src = "/Images/draw_gif.png";
        setTimeout(hide_func3,4000);
            function hide_func3() {
                document.getElementById("tic-tac-toe").classList.toggle("invisible");
                document.getElementsByClassName("gif")[0].classList.toggle("invisible");
                reinitiate();
            }
    }

}

function toggle(a){
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
            classFilled[0][0] =cl;
            i++;
        }
    }
    else if (a==2){
        if (board[0][1]==-1){
            //console.log("working");
            var box = document.getElementsByClassName("block2");
            box[0].classList.toggle(cl);
            board[0][1] = player;
            classFilled[0][1] =cl;
            i++;
        }
    }
    else if (a==3){
        if (board[0][2]==-1){
            //console.log("working");
            var box = document.getElementsByClassName("block3");
            box[0].classList.toggle(cl);
            board[0][2] = player;
            classFilled[0][2] =cl;
            i++;
        }
    }
    else if (a==4){
        if (board[1][0]==-1){
            //console.log("working");
            var box = document.getElementsByClassName("block4");
            box[0].classList.toggle(cl);
            board[1][0] = player;
            classFilled[1][0]=cl;
            i++;
        }
    }
    else if (a==5){
        if (board[1][1]==-1){
            //console.log("working");
            var box = document.getElementsByClassName("block5");
            box[0].classList.toggle(cl);
            board[1][1] = player;
            classFilled[1][1]=cl;
            i++;
        }
    }
    else if (a==6){
        if (board[1][2]==-1){
            //console.log("working");
            var box = document.getElementsByClassName("block6");
            box[0].classList.toggle(cl);
            board[1][2] = player;
            classFilled[1][2]=cl;
            i++;
        }
    }
    else if (a==7){
        if (board[2][0]==-1){
            //console.log("working");
            var box = document.getElementsByClassName("block7");
            box[0].classList.toggle(cl);
            board[2][0] = player;
            classFilled[2][0]=cl;
            i++;
        }
    }
    else if (a==8){
        if (board[2][1]==-1){
            //console.log("working");
            var box = document.getElementsByClassName("block8");
            box[0].classList.toggle(cl);
            board[2][1] = player;
            classFilled[2][1]=cl;
            i++;
        }
    }
    else if (a==9){
        if (board[2][2]==-1){
            //console.log("working");
            var box = document.getElementsByClassName("block9");
            box[0].classList.toggle(cl);
            board[2][2] = player;
            classFilled[2][2]=cl;
            i++;
        }
    }
    main();
    // console.log(board);
}