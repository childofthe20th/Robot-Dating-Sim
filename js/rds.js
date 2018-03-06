








$(()=>{


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



    let sanguine = "SANGUINE";
    let choleric = "CHOLERIC";
    let meloncholic = "MELANCHOLIC";
    let phlegmatic = "PHLEGMATIC";

    const types = [sanguine, choleric, meloncholic, phlegmatic];

    const typeRandom = ()=>{
        let randomType = types[Math.floor(Math.random()*types.length)];
        return randomType;
    }

    // console.log(typeRandom());

    const createPlayer1 = ()=>{
        let $player1 = robots[Math.floor(Math.random()*robots.length)];
        $("#robot1").append($player1);
    }

    const createPlayer2 = ()=>{
        let $player2 = robots[Math.floor(Math.random()*robots.length)];
        $("#robot2").append($player2);
    }



    const $nextButton = $('.button');
    $nextButton.on('click', ()=>{
        $('.text').text('Type: ').append($nextButton);
        $nextButton.text(typeRandom);
        if ($nextButton.text() === "SANGUINE") {
            $nextButton.on('click', sanguineGame);
        }
        if ($nextButton.text() === "CHOLERIC") {
            $nextButton.on('click', cholericGame);
        }
        if ($nextButton.text() === "MELANCHOLIC") {
            $nextButton.on('click', melancholicGame);
        }
        if ($nextButton.text() === "PHLEGMATIC") {
            $nextButton.on('click', phlegmaticGame);
        }
    });

    const nums = [00, 14, 29, 3, 404, 15, 6, 67, 81, 90];

    const randomName = ()=>{
        let name = ("MX-" + nums[Math.floor(Math.random()*nums.length)] + nums[Math.floor(Math.random()*nums.length)]);
        return name;
    }

    const sanguineGame = ()=>{
        $('.text').text("Good evening... potential mate, BZZT. I am " + randomName() + ". I would like to assess our compatability... BEEP...");
        

    }

    const cholericGame = ()=>{
        $('.text').text("Good evening... potential mate, BZZT. I am " + randomName() + ". I would like to assess our compatability... BEEP...");
    }

    const melancholicGame = ()=>{
        $('.text').text("Good evening... potential mate, BZZT. I am " + randomName() + ". I would like to assess our compatability... BEEP...");
    }

    const phlegmaticGame = ()=>{
        $('.text').text("Good evening... potential mate, BZZT. I am " + randomName() + ". I would like to assess our compatability... BEEP...");
    }



    createPlayer1();
    // createPlayer2();

});
