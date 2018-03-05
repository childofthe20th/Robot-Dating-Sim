


$(()=>{








    // const createPlayer = ()=>{
    //     const player1 = $("<img src='images/robots/robot1.png' alt=''>")
    //     $("#robot1").append(player1);
    // }
    //
    // createPlayer();


    const robots = [];

    const $rob1 = $("<img src='images/robots/robot1.png' alt=''>");
    const $rob2 = $("<img src='images/robots/robot2.png' alt=''>");
    const $rob3 = $("<img src='images/robots/robot3.png' alt=''>");
    const $rob4 = $("<img src='images/robots/robot4.png' alt=''>");
    const $rob5 = $("<img src='images/robots/robot5.png' alt=''>");
    const $rob6 = $("<img src='images/robots/robot6.png' alt=''>");
    const $rob7 = $("<img src='images/robots/robot7.png' alt=''>");
    const $rob8 = $("<img src='images/robots/robot8.png' alt=''>");
    const $rob9 = $("<img src='images/robots/robot9.png' alt=''>");
    const $rob10 = $("<img src='images/robots/robot10.png' alt=''>");

    robots.push($rob1);
    robots.push($rob2);
    robots.push($rob3);
    robots.push($rob4);
    robots.push($rob5);
    robots.push($rob6);
    robots.push($rob7);
    robots.push($rob8);
    robots.push($rob9);
    robots.push($rob10);

    const createPlayer1 = ()=>{
        let player1 = robots[Math.floor(Math.random()*robots.length)];
        $("#robot1").append(player1);
    }

    const createPlayer2 = ()=>{
        let player2 = robots[Math.floor(Math.random()*robots.length)];
        $("#robot2").append(player2);
    }

    createPlayer1();
    // createPlayer2();





})
