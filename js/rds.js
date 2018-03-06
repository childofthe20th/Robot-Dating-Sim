


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

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    let sanguine = "SANGUINE";
    let choleric = "CHOLERIC";
    let meloncholic = "MELANCHOLIC";
    let phlegmatic = "PHLEGMATIC";

    const types = [sanguine, choleric, meloncholic, phlegmatic];

    const typeRandom = ()=>{
        let randomType = types[Math.floor(Math.random()*types.length)];
        return randomType;
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const createPlayer1 = ()=>{
        let $player1 = robots[Math.floor(Math.random()*robots.length)];
        if ($("#robot1").is(":empty")) {
            $("#robot1").append($player1);
        } else {return};
        // $("#interest2").hide();
    };

    const createPlayer2 = ()=>{
        let $player2 = robots[Math.floor(Math.random()*robots.length)];
        if ($("#robot2").is(":empty")) {
            $("#robot2").append($player2);
        } else {return};

        // $("#interest2").show();
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const $nextButton = $('.button');
    $nextButton.on('click', ()=>{
        $('.text').text('Type: ').append($nextButton);
        $nextButton.text(typeRandom);
        // createPlayer1();
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

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const nums = [00, 14, 29, 3, 404, 15, 6, 67, 81, 90];

    const randomName = ()=>{
        let name = ("MX-" + nums[Math.floor(Math.random()*nums.length)] + nums[Math.floor(Math.random()*nums.length)]);
        return name;
    };

    const randomName2 = ()=>{
        let name = ("LZ-" + nums[Math.floor(Math.random()*nums.length)] + nums[Math.floor(Math.random()*nums.length)]);
        return name;
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    // const interestP1 = ()=>{
    //     return interest1.value += 1;
    //     if (interest1.value === 5) {
    //         console.log("Player1 wins!");
    //     }
    // }
    //
    // const interestP2 = ()=>{
    //     return interest2.value += 1;
    //     if (interest2.value === 5) {
    //         console.log("Player2 wins!");
    //     }
    // }
    //
    // const disinterestP1 = ()=>{
    //     return interest1.value -= 1;
    //     if (interest1.value === 0) {
    //         console.log("Player1 loses!");
    //     }
    // }
    //
    // const disinterestP1Worse = ()=>{
    //     return interest1.value -= 2;
    //     if (interest1.value === 0) {
    //         console.log("Player1 loses!");
    //     }
    // }
    //
    // const disinterestP2 = ()=>{
    //     return interest2.value -= 1;
    //     if (interest2.value === 0) {
    //         console.log("Player2 loses!");
    //     }
    // }
    //
    // const disinterestP2Worse = ()=>{
    //     return interest2.value -= 2;
    //     if (interest2.value === 0) {
    //         console.log("Player2 loses!");
    //     }
    // }

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const $dialogue = $('.text');

    const $letterA = $('#a');
    const $letterB = $('#b');
    const $letterC = $('#c');

    const $buttonA = $('.first.choice');
    const $buttonB = $('.second.choice');
    const $buttonC = $('.third.choice');

    const $choiceBox = $('#bottom-main');

    const $success = ()=>{
        $dialogue.text("Target. seems. interested. Eureka!");
    };

    const $malfunction = ()=>{
        $dialogue.text("Malfunction... bzt, input error!");
    };

    const $clearChoices = ()=>{
        $letterA.text("").append($buttonA);
        $letterB.text("").append($buttonB);
        $letterC.text("").append($buttonC);
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const sanguineGame = ()=>{
        $dialogue.text("Good evening... potential mate, BZZT. I am " + randomName() + ". I would like to assess our compatability... BEEP. Player one turn...");
        $letterA.append("<p>Do you like to read?</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                sanguineGame2P()
            }, 2500)
        });
        $letterB.append("<p>Why so glum? Smile more!</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                sanguineGame2P()
            }, 2500)
        });
        $letterC.append("<p>Have you been to any... good shows lately?</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                sanguineGame2P()
            }, 2500)
        });
    };

    const sanguineGameRound2 = ()=>{
        $clearChoices();
        $dialogue.text("Player one turn...");
        $letterA.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                sanguineGame2PRound2()
            }, 2500)
        });
        $letterB.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                sanguineGame2PRound2();
            }, 2500)
        });
        $letterC.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                sanguineGame2PRound2();
            }, 2500)
        });
    };

    const sanguineGameRound3 = ()=>{
        $clearChoices();
        $dialogue.text("Player one turn...");
        $letterA.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                sanguineGame2PRound3()
            }, 2500)
        });
        $letterB.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                sanguineGame2PRound3();
            }, 2500)
        });
        $letterC.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                sanguineGame2PRound3();
            }, 2500)
        });
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const sanguineGame2P = ()=>{
        createPlayer2();
        $clearChoices();
        $dialogue.text("New challenger " + randomName2() + " has arrived! BLRRRP! Player two turn...");
        $letterA.append("<p>I love to talk about myself... care to join me?</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                sanguineGameRound2();
            }, 2500)
        });
        $letterB.append("<p>There is a place that serves the best motor oil in town... beep, care to join?</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                sanguineGameRound2();
            }, 2500)
        });
        $letterC.append("<p>I cannot stand the quantity of lifeforms around... let's get out of here.</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                sanguineGameRound2();
            }, 2500)
        });

    };

    const sanguineGame2PRound2 = ()=>{
        $clearChoices();
        $dialogue.text("Player two turn...");
        $letterA.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                sanguineGameRound3()
            }, 2500)
        });
        $letterB.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                sanguineGameRound3();
            }, 2500)
        });
        $letterC.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                sanguineGameRound3();
            }, 2500)
        });
    };

    const sanguineGame2PRound3 = ()=>{
        $clearChoices();
        $dialogue.text("Player two turn...");
        $letterA.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                // tally points
            }, 2500)
        });
        $letterB.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                // tally points
                // end game
            }, 2500)
        });
        $letterC.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                // tally points
                // end game
            }, 2500)
        });
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const cholericGame = ()=>{
        $dialogue.text("Good evening... potential mate, BZZT. I am " + randomName() + ". I would like to assess our compatability... BEEP. Player one turn...");
        $letterA.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                cholericGame2P()
            }, 2500)
        });
        $letterB.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                cholericGame2P();
            }, 2500)
        });
        $letterC.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                cholericGame2P();
            }, 2500)
        });
    };

    const cholericGameRound2 = ()=>{
        $clearChoices();
        $dialogue.text("Player one turn...");
        $letterA.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                cholericGame2PRound2()
            }, 2500)
        });
        $letterB.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                cholericGame2PRound2();
            }, 2500)
        });
        $letterC.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                cholericGame2PRound2();
            }, 2500)
        });
    }

    const cholericGameRound3 = ()=>{
        $clearChoices();
        $dialogue.text("Player one turn...");
        $letterA.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                cholericGame2PRound3()
            }, 2500)
        });
        $letterB.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                cholericGame2PRound3();
            }, 2500)
        });
        $letterC.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                cholericGame2PRound3();
            }, 2500)
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const cholericGame2P = ()=>{
        createPlayer2();
        $clearChoices();
        $dialogue.text("New challenger " + randomName2() + " has arrived! BLRRRP! Player two turn...");
        $letterA.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                cholericGameRound2()
            }, 2500)
        });
        $letterB.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                cholericGameRound2();
            }, 2500)
        });
        $letterC.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                cholericGameRound2();
            }, 2500)
        });
    }

    const cholericGame2PRound2 = ()=>{
        $clearChoices();
        $dialogue.text("Player two turn...");
        $letterA.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                cholericGameRound3()
            }, 2500)
        });
        $letterB.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                cholericGameRound3();
            }, 2500)
        });
        $letterC.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                cholericGameRound3();
            }, 2500)
        });
    }

    const cholericGame2PRound3 = ()=>{
        $clearChoices();
        $dialogue.text("Player two turn...");
        $letterA.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                // tally points
                // end game
            }, 2500)
        });
        $letterB.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                // tally points
                // end game
            }, 2500)
        });
        $letterC.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                // tally points
                // end game
            }, 2500)
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const melancholicGame = ()=>{
        $dialogue.text("Good evening... potential mate, BZZT. I am " + randomName() + ". I would like to assess our compatability... BEEP. Player one turn...");
        $letterA.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                melancholicGame2P()
            }, 2500)
        });
        $letterB.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                melancholicGame2P();
            }, 2500)
        });
        $letterC.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                melancholicGame2P();
            }, 2500)
        });
    };

    const melancholicGameRound2 = ()=>{
        $clearChoices();
        $dialogue.text("Player one turn...");
        $letterA.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                melancholicGame2PRound2()
            }, 2500)
        });
        $letterB.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                melancholicGame2PRound2();
            }, 2500)
        });
        $letterC.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                melancholicGame2PRound2();
            }, 2500)
        });
    }

    const melancholicGameRound3 = ()=>{
        $clearChoices();
        $dialogue.text("Player one turn...");
        $letterA.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                melancholicGame2PRound3()
            }, 2500)
        });
        $letterB.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                melancholicGame2PRound3();
            }, 2500)
        });
        $letterC.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                melancholicGame2PRound3();
            }, 2500)
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const melancholicGame2P = ()=>{
        createPlayer2();
        $clearChoices();
        $dialogue.text("New challenger " + randomName2() + " has arrived! BLRRRP! Player two turn...");
        $letterA.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                melancholicGameRound2()
            }, 2500)
        });
        $letterB.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                melancholicGameRound2();
            }, 2500)
        });
        $letterC.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                melancholicGameRound2();
            }, 2500)
        });
    }

    const melancholicGame2PRound2 = ()=>{
        $clearChoices();
        $dialogue.text("Player two turn...");
        $letterA.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                melancholicGameRound3()
            }, 2500)
        });
        $letterB.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                melancholicGameRound3();
            }, 2500)
        });
        $letterC.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                melancholicGameRound3();
            }, 2500)
        });
    }

    const melancholicGame2PRound3 = ()=>{
        $clearChoices();
        $dialogue.text("Player two turn...");
        $letterA.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                // tally points
                // end game
            }, 2500)
        });
        $letterB.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                // tally points
                // end game
            }, 2500)
        });
        $letterC.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                // tally points
                // end game
            }, 2500)
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const phlegmaticGame = ()=>{
        $dialogue.text("Good evening... potential mate, BZZT. I am " + randomName() + ". I would like to assess our compatability... BEEP. Player one turn...");
        $letterA.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                phlegmaticGame2P()
            }, 2500)
        });
        $letterB.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                phlegmaticGame2P();
            }, 2500)
        });
        $letterC.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                phlegmaticGame2P();
            }, 2500)
        });
    };

    const phlegmaticGameRound2 = ()=>{
        $clearChoices();
        $dialogue.text("Player one turn...");
        $letterA.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                phlegmaticGame2PRound2();
            }, 2500)
        });
        $letterB.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                phlegmaticGame2PRound2();
            }, 2500)
        });
        $letterC.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                phlegmaticGame2PRound2();
            }, 2500)
        });
    }

    const phlegmaticGameRound3 = ()=>{
        $clearChoices();
        $dialogue.text("Player one turn...");
        $letterA.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                phlegmaticGame2PRound3()
            }, 2500)
        });
        $letterB.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                phlegmaticGame2PRound3();
            }, 2500)
        });
        $letterC.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                phlegmaticGame2PRound3();
            }, 2500)
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const phlegmaticGame2P = ()=>{
        createPlayer2();
        $clearChoices();
        $dialogue.text("New challenger " + randomName2() + " has arrived! BLRRRP! Player two turn...");
        $letterA.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                phlegmaticGameRound2();
            }, 2500)
        });
        $letterB.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                phlegmaticGameRound2();
            }, 2500)
        });
        $letterC.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                phlegmaticGameRound2();
            }, 2500)
        });
    }

    const phlegmaticGame2PRound2 = ()=>{
        $clearChoices();
        $dialogue.text("Player two turn...");
        $letterA.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                phlegmaticGameRound3();
            }, 2500)
        });
        $letterB.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                phlegmaticGameRound3();
            }, 2500)
        });
        $letterC.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                phlegmaticGameRound3();
            }, 2500)
        });
    }

    const phlegmaticGame2PRound3 = ()=>{
        $clearChoices();
        $dialogue.text("Player two turn...");
        $letterA.append("<p>Test</p>").on('click', ()=>{
            $success();
            setTimeout(()=>{
                // tally points
                // end game
            }, 2500)
        });
        $letterB.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                // tally points
                // end game
            }, 2500)
        });
        $letterC.append("<p>Malfunction</p>").on('click', ()=>{
            $malfunction();
            setTimeout(()=>{
                // tally points
                // end game
            }, 2500)
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////


    createPlayer1();
    // createPlayer2();

});
