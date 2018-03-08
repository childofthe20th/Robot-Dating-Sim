


$(()=>{

    $('html').css('animation', 'fadein 4s');

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    // Modal //
    //////////////////////////////////////////////////////////////////////////////////////////////////////


    const $openBtn = $('#modal-button');
    const $modal = $('#modal');
    const $closeBtn = $('#close');

    const openModal = () =>{
        $modal.css('display', 'block');
    }

    const closeModal = () =>{
        $modal.css('display', 'none');
    }

    $openBtn.on('click', openModal);

    $closeBtn.on('click', closeModal);

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    // Heart Functions//
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const $heartContainer = $('.heart-container');

    const heartPushP1 = ()=>{
        $heartContainer.append($("<img src='images/hearts/vectorstock_15134146.png'>").attr('class', 'heartP1').css('animation', 'fadein 1s'));
        if ($('.heartP1').eq(4).length) {
            $dialogue.text("PLAYER ONE has achieved MAX hearts!")
        }
    }

    const heartPopP1 = ()=>{
        $('.heartP1').eq(0).css('animation', 'fadeout 1.5s');
        setTimeout(()=>{
            $('.heartP1').eq(0).remove()
        }, 1500)
        if ($heartContainer.is(":empty")) {
            heartTally();
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const $heartContainer2 = $('.heart-container2');

    const heartPushP2 = ()=>{
        $heartContainer2.append($("<img src='images/hearts/purpleheart.png'>").attr('class', 'heartP2').css('animation', 'fadein 1s'));
        if ($('.heartP2').eq(4).length) {
            $dialogue.text("PLAYER TWO has achieved MAX hearts!");
        }
    }

    const heartPopP2 = ()=>{
        $('.heartP2').eq(0).css('animation', 'fadeout 1.5s');
        setTimeout(()=>{
            $('.heartP2').eq(0).remove()
        }, 1500)
        if ($heartContainer2.is(":empty")) {
            heartTally();
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const heartTally = ()=>{
        if ($('.heartP1').length > $('.heartP2').length) {
            $heartContainer.css('animation', 'pulse 0.5s ease-in infinite');
            $('h2').css('animation', 'fadeout 3s');
            $('#modal-button').css('animation', 'fadeout 3s');
            $heartContainer2.css('animation', 'fadeout 3s');
            $choiceBox.css('animation', 'fadeout 3s');
            $robot2.css('animation', 'fadeout 3s');
            $dialogue.text("Congratulations PLAYER ONE! You win the date!");
            setTimeout(()=>{
                $('h2').hide();
                $('#modal-button').hide();
                $heartContainer2.hide();
                $choiceBox.hide();
                $robot2.hide();
            }, 3000);
        }
        if ($('.heartP2').length > $('.heartP1').length) {
            $heartContainer2.css('animation', 'pulse 0.5s ease-in infinite');
            $('h2').css('animation', 'fadeout 3s');
            $('#modal-button').css('animation', 'fadeout 3s');
            $heartContainer.css('animation', 'fadeout 3s');
            $choiceBox.css('animation', 'fadeout 3s');
            $robot1.css('animation', 'fadeout 3s');
            $dialogue.text("Congratulations PLAYER TWO! You win the date!");
            setTimeout(()=>{
                $('h2').hide();
                $('#modal-button').hide();
                $heartContainer.hide();
                $choiceBox.hide();
                $robot1.hide();
            }, 3000);
        }
        if ($('.heartP1').length === $('.heartP2').length) {
            $dialogue.text("It's a tie! Your potential date goes home and you hang out with each other.");
            $('h2').css('animation', 'fadeout 3s');
            $('#modal-button').css('animation', 'fadeout 3s');
            $heartContainer.css('animation', 'fadeout 3s');
            $heartContainer2.css('animation', 'fadeout 3s');
            $choiceBox.css('animation', 'fadeout 3s');
            $mainBot.css('animation', 'fadeout 3s');
            setTimeout(()=>{
                $('h2').hide();
                $('#modal-button').hide();
                $mainBot.hide();
                $heartContainer.hide();
                $heartContainer2.hide();
                $choiceBox.hide();
            }, 3000);
        }
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////
    // Robot Storage//
    //////////////////////////////////////////////////////////////////////////////////////////////////////

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

    const $mainRob = $("<img src='images/robots/robot11.png' alt=''>");

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
    // Personality Types Function//
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    let sanguine = "SANGUINE";
    let choleric = "CHOLERIC";
    let meloncholic = "MELANCHOLIC";
    let phlegmatic = "PHLEGMATIC";

    const types = [sanguine, choleric, meloncholic, phlegmatic];

    const typeRandom = ()=>{
        let randomType = types[Math.floor(Math.random()*types.length)];
        $('.path').text(randomType).css('color', '#DFD998').css('animation', 'fadein 5s');
        return randomType;
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    // Player Spawn Functions//
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const createPlayer1 = ()=>{
        let $player1 = robots[Math.floor(Math.random()*robots.length)];
        if ($("#robot1").is(":empty")) {
            $("#robot1").append($player1);
        } else {return};
        heartPushP1();
        heartPushP1();
    };

    const createPlayer2 = ()=>{
        let $player2 = robots[Math.floor(Math.random()*robots.length)];
        if ($("#robot2").is(":empty")) {
            $("#robot2").append($player2);
        } else {return};
        heartPushP2();
        heartPushP2();
    };

    const createLove = ()=>{
        $("#main-robot").append($mainRob);
    }

    const $robot1 = $("#robot1");
    const $robot2 = $("#robot2");
    const $mainBot = $("#main-robot");

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    // Game Dialogue Kickoff//
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const $nextButton = $('.button');
    const $dialogue = $('.text');
    $nextButton.on('click', ()=>{
        createLove();
        $dialogue.text("Oh, a potential partner has appeared! Let's see if they're compatible.");
        $nextButton.appendTo($dialogue);
        $nextButton.text('SCAN TARGET');
        $nextButton.on('click', ()=>{
            $dialogue.text("Target scan returns a preference for...")
            $nextButton.appendTo($dialogue);
            $nextButton.text('RESULT');
            $nextButton.on('click', ()=>{
                $dialogue.text('Type: ').append($nextButton);
                $nextButton.text(typeRandom);
                $('#main-robot').css('transform', 'scaleX(-1)');
                if ($nextButton.text() === "SANGUINE") {
                    $nextButton.on('click', ()=>{
                        sanguineGame();
                        $choiceBox.children().show();
                    });
                }
                if ($nextButton.text() === "CHOLERIC") {
                    $nextButton.on('click', ()=>{
                        cholericGame();
                        $choiceBox.children().show();
                    });
                }
                if ($nextButton.text() === "MELANCHOLIC") {
                    $nextButton.on('click', ()=>{
                        melancholicGame();
                        $choiceBox.children().show();
                    });
                }
                if ($nextButton.text() === "PHLEGMATIC") {
                    $nextButton.on('click', ()=>{
                        phlegmaticGame();
                        $choiceBox.children().show();
                    });
                }
            });
        })
    })




    //////////////////////////////////////////////////////////////////////////////////////////////////////
    // Random Robot Name Generator//
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
    // Variable Shortcuts and Clear Choice Function//
    //////////////////////////////////////////////////////////////////////////////////////////////////////


    const $letterA = $('#a');
    const $letterB = $('#b');
    const $letterC = $('#c');

    const $buttonA = $('.first.choice');
    const $buttonB = $('.second.choice');
    const $buttonC = $('.third.choice');

    const $choiceBox = $('#bottom-main');
    const $playerTurn = $('#player-turn');

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
    // Sanguine Tree Dialogue//
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const sanguineGame = ()=>{
        $dialogue.text("PLAYER ONE: INITIATE CONTACT...");
        $playerTurn.text("PLAYER ONE").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot1.css('animation', 'pop 1s');
        $letterA.append("<p>Wouldn't you rather be reading tonight?</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                sanguineGameP2()
            }, 1000)
        });
        $letterB.append("<p>Forgive me, I'm shy.</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                sanguineGameP2()
            }, 1000)
        });
        $letterC.append("<p>Have you been to any good shows lately?</p>").on('click', ()=>{
            $success();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                sanguineGameP2()
            }, 1000)
        });
    };

    const sanguineGameRound2 = ()=>{
        $clearChoices();
        $dialogue.text("");
        $playerTurn.text("PLAYER ONE").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot1.css('animation', 'pop 1s');
        $letterA.append("<p>I hate social events, but I like you!</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                sanguineGameP2Round2()
            }, 1000)
        });
        $letterB.append("<p>I find enthusiasm for existence to be priority.</p>").on('click', ()=>{
            $success();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                sanguineGameP2Round2();
            }, 1000)
        });
        $letterC.append("<p>You are quite forward, but that's OK... I guess.</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                sanguineGameP2Round2();
            }, 1000)
        });
    };

    const sanguineGameRound3 = ()=>{
        $clearChoices();
        $dialogue.text("");
        $playerTurn.text("PLAYER ONE").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot1.css('animation', 'pop 1s');
        $letterA.append("<p>Laziness is an overlooked pastime</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                sanguineGameP2Round3()
            }, 1000)
        });
        $letterB.append("<p>Maybe we can sit quietly somewhere?</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                sanguineGameP2Round3();
            }, 1000)
        });
        $letterC.append("<p>I am in the mood for something spontaneous!</p>").on('click', ()=>{
            $success();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                sanguineGameP2Round3();
            }, 1000)
        });
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const sanguineGameP2 = ()=>{
        createPlayer2();
        $clearChoices();
        $dialogue.text(randomName2() + " has come to offer competition: PLAYER TWO INITIATES CONTACT...");
        $playerTurn.text("PLAYER TWO").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot2.css('animation', 'pop 1s');
        $letterA.append("<p>I could use some peace and quiet, you?</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                sanguineGameRound2();
            }, 1000)
        });
        $letterB.append("<p>Let's go on an adventure!</p>").on('click', ()=>{
            $success();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP2();
            setTimeout(()=>{
                sanguineGameRound2();
            }, 1000)
        });
        $letterC.append("<p>I'd rather be in my charging pod tonight.</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                sanguineGameRound2();
            }, 1000)
        });

    };

    const sanguineGameP2Round2 = ()=>{
        $clearChoices();
        $dialogue.text("");
        $playerTurn.text("PLAYER TWO").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot2.css('animation', 'pop 1s');
        $letterA.append("<p>Boredom is the worst, right?</p>").on('click', ()=>{
            $success();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP2();
            setTimeout(()=>{
                sanguineGameRound3();
            }, 1000)
        });
        $letterB.append("<p>Can you lower your voice a bit?</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                sanguineGameRound3();
            }, 1000)
        });
        $letterC.append("<p>My patience runs low, except with you.</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                sanguineGameRound3();
            }, 1000)
        });
    };

    const sanguineGameP2Round3 = ()=>{
        $clearChoices();
        $dialogue.text("");
        $playerTurn.text("PLAYER TWO").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot2.css('animation', 'pop 1s');
        $letterA.append("<p>Things move too fast in the city, right?</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                heartTally();
            }, 1000)
        });
        $letterB.append("<p>My friends dragged me out... no gaming for me.</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                heartTally();
            }, 1000)
        });
        $letterC.append("<p>I love how many people are out tonight!</p>").on('click', ()=>{
            $success();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP2();
            setTimeout(()=>{
                heartTally();
            }, 1000)
        });
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    // Choleric Tree Dialogue//
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const cholericGame = ()=>{
        $dialogue.text("PLAYER ONE: INITIATE CONTACT...");
        $playerTurn.text("PLAYER ONE").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot1.css('animation', 'pop 1s');
        $letterA.append("<p>I need people to motivate me, you?</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                cholericGameP2()
            }, 1000)
        });
        $letterB.append("<p>I don't need anybody to make me feel happy.</p>").on('click', ()=>{
            $success();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                cholericGameP2();
            }, 1000)
        });
        $letterC.append("<p>My goals can wait, let's have fun tonight!</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                cholericGameP2();
            }, 1000)
        });
    };

    const cholericGameRound2 = ()=>{
        $clearChoices();
        $dialogue.text("");
        $playerTurn.text("PLAYER ONE").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot1.css('animation', 'pop 1s');
        $letterA.append("<p>I live in my maker's basement, it's quite cozy.</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                cholericGameP2Round2()
            }, 1000)
        });
        $letterB.append("<p>Not sure what tomorrow brings and I don't care!</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                cholericGameP2Round2();
            }, 1000)
        });
        $letterC.append("<p>One sec... gotta check my fitness metrics.</p>").on('click', ()=>{
            $success();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                cholericGameP2Round2();
            }, 1000)
        });
    }

    const cholericGameRound3 = ()=>{
        $clearChoices();
        $dialogue.text("");
        $playerTurn.text("PLAYER ONE").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot1.css('animation', 'pop 1s');
        $letterA.append("<p>Organization is very important, right?</p>").on('click', ()=>{
            $success();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                cholericGameP2Round3()
            }, 1000)
        });
        $letterB.append("<p>Logistics don't matter, randomness is good.</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                cholericGameP2Round3();
            }, 1000)
        });
        $letterC.append("<p>I never decide on what to do next, any ideas?</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                cholericGameP2Round3();
            }, 1000)
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const cholericGameP2 = ()=>{
        createPlayer2();
        $clearChoices();
        $dialogue.text(randomName2() + " has come to offer competition: PLAYER TWO INITIATES CONTACT...");
        $playerTurn.text("PLAYER TWO").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot2.css('animation', 'pop 1s');
        $letterA.append("<p>I like to spend time wandering, let's wander!</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                cholericGameRound2()
            }, 1000)
        });
        $letterB.append("<p>I'm organizing an event tonight, care to join?</p>").on('click', ()=>{
            $success();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP2();
            setTimeout(()=>{
                cholericGameRound2();
            }, 1000)
        });
        $letterC.append("<p>I don't like doing things alone, glad I met you!</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                cholericGameRound2();
            }, 1000)
        });
    }

    const cholericGameP2Round2 = ()=>{
        $clearChoices();
        $dialogue.text("");
        $playerTurn.text("PLAYER TWO").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot2.css('animation', 'pop 1s');
        $letterA.append("<p>Today was busy, but I got a lot done. Yay me!</p>").on('click', ()=>{
            $success();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP2();
            setTimeout(()=>{
                cholericGameRound3()
            }, 1000)
        });
        $letterB.append("<p>Being single is the worst! Let's fix that.</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                cholericGameRound3();
            }, 1000)
        });
        $letterC.append("<p>Can you give me validation? I'm sad.</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                cholericGameRound3();
            }, 1000)
        });
    }

    const cholericGameP2Round3 = ()=>{
        $clearChoices();
        $dialogue.text("");
        $playerTurn.text("PLAYER TWO").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot2.css('animation', 'pop 1s');
        $letterA.append("<p>If we can't hang, I'll just call it a night.</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                heartTally();
            }, 1000)
        });
        $letterB.append("<p>I love it when a cute robot acknowledges me!</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                heartTally();
            }, 1000)
        });
        $letterC.append("<p>Don't you love it when a plan comes together?</p>").on('click', ()=>{
            $success();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP2();
            setTimeout(()=>{
                heartTally();
            }, 1000)
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    // Melancholic Tree Dialogue//
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const melancholicGame = ()=>{
        $dialogue.text("PLAYER ONE: INITIATE CONTACT...");
        $playerTurn.text("PLAYER ONE").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot1.css('animation', 'pop 1s');
        $letterA.append("<p>No time to think, just to act, amiright?</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                melancholicGameP2()
            }, 1000)
        });
        $letterB.append("<p>Love to ponder existentialism, don't you?</p>").on('click', ()=>{
            $success();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                melancholicGameP2();
            }, 1000)
        });
        $letterC.append("<p>Lyrics? Not as important as a phat bassline.</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                melancholicGameP2();
            }, 1000)
        });
    };

    const melancholicGameRound2 = ()=>{
        $clearChoices();
        $dialogue.text("");
        $playerTurn.text("PLAYER ONE").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot1.css('animation', 'pop 1s');
        $letterA.append("<p>Overthinking is for meatbags, let's party!</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                melancholicGameP2Round2()
            }, 1000)
        });
        $letterB.append("<p>Not much on sensitivity, but I'm funny!</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                melancholicGameP2Round2();
            }, 1000)
        });
        $letterC.append("<p>Ever wonder what it is to be sentient?</p>").on('click', ()=>{
            $success();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                melancholicGameP2Round2();
            }, 1000)
        });
    }

    const melancholicGameRound3 = ()=>{
        $clearChoices();
        $dialogue.text("");
        $playerTurn.text("PLAYER ONE").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot1.css('animation', 'pop 1s');
        $letterA.append("<p>I don't spend much on detail, gitur done!</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                melancholicGameP2Round3()
            }, 1000)
        });
        $letterB.append("<p>Let's stop worrying about tomorrow, yes?</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                melancholicGameP2Round3();
            }, 1000)
        });
        $letterC.append("<p>You look cute when you're deep in thought.</p>").on('click', ()=>{
            $success();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                melancholicGameP2Round3();
            }, 1000)
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const melancholicGameP2 = ()=>{
        createPlayer2();
        $clearChoices();
        $dialogue.text(randomName2() + " has come to offer competition: PLAYER TWO INITIATES CONTACT...");
        $playerTurn.text("PLAYER TWO").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot2.css('animation', 'pop 1s');
        $letterA.append("<p>I don't feel sad for very long.</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                melancholicGameRound2()
            }, 1000)
        });
        $letterB.append("<p>Almost overanalyzed my way out of this situation.</p>").on('click', ()=>{
            $success();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP2();
            setTimeout(()=>{
                melancholicGameRound2();
            }, 1000)
        });
        $letterC.append("<p>I saw you and just HAD to come say hi!</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                melancholicGameRound2();
            }, 1000)
        });
    }

    const melancholicGameP2Round2 = ()=>{
        $clearChoices();
        $dialogue.text("");
        $playerTurn.text("PLAYER TWO").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot2.css('animation', 'pop 1s');
        $letterA.append("<p>I spent too much time deciding what to wear.</p>").on('click', ()=>{
            $success();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP2();
            setTimeout(()=>{
                melancholicGameRound3()
            }, 1000)
        });
        $letterB.append("<p>Flippancy isn't a bad trait, right?</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                melancholicGameRound3();
            }, 1000)
        });
        $letterC.append("<p>I don't care much for dramatic movies.</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            setTimeout(()=>{
                melancholicGameRound3();
            }, 1000)
        });
    }

    const melancholicGameP2Round3 = ()=>{
        $clearChoices();
        $dialogue.text("");
        $playerTurn.text("PLAYER TWO").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot2.css('animation', 'pop 1s');
        $letterA.append("<p>My favorite movies are Action movies.</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                heartTally();
            }, 1000)
        });
        $letterB.append("<p>Are you a worrywort like me?</p>").on('click', ()=>{
            $success();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP2();
            setTimeout(()=>{
                heartTally();
            }, 1000)
        });
        $letterC.append("<p>I saw the sappiest movie yesterday, ugh.</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                heartTally();
            }, 1000)
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    // Phlegmatic Tree Dialogue//
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const phlegmaticGame = ()=>{
        $dialogue.text("PLAYER ONE: INITIATE CONTACT...");
        $playerTurn.text("PLAYER ONE").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot1.css('animation', 'pop 1s');
        $letterA.append("<p>Not many people out tonight, nice and peaceful.</p>").on('click', ()=>{
            $success();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                phlegmaticGameP2()
            }, 1000)
        });
        $letterB.append("<p>HEY! WHATSUP!! YOU ROCK!!</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                phlegmaticGameP2();
            }, 1000)
        });
        $letterC.append("<p>Some people say I'm too hyperactive.</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                phlegmaticGameP2();
            }, 1000)
        });
    };

    const phlegmaticGameRound2 = ()=>{
        $clearChoices();
        $dialogue.text("");
        $playerTurn.text("PLAYER ONE").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot1.css('animation', 'pop 1s');
        $letterA.append("<p>I just can't stay still tonight, let's move!</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                phlegmaticGameP2Round2();
            }, 1000)
        });
        $letterB.append("<p>I have no problem confronting people.</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                phlegmaticGameP2Round2();
            }, 1000)
        });
        $letterC.append("<p>Sometimes, saying less is more.</p>").on('click', ()=>{
            $success();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                phlegmaticGameP2Round2();
            }, 1000)
        });
    }

    const phlegmaticGameRound3 = ()=>{
        $clearChoices();
        $dialogue.text("");
        $playerTurn.text("PLAYER ONE").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot1.css('animation', 'pop 1s');
        $letterA.append("<p>I just installed a trampoline in my living room.</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                phlegmaticGameP2Round3()
            }, 1000)
        });
        $letterB.append("<p>Netflix and chill?</p>").on('click', ()=>{
            $success();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                phlegmaticGameP2Round3();
            }, 1000)
        });
        $letterC.append("<p>It feels too quiet here, I need commotion.</p>").on('click', ()=>{
            $malfunction();
            $robot1.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                phlegmaticGameP2Round3();
            }, 1000)
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const phlegmaticGameP2 = ()=>{
        createPlayer2();
        $clearChoices();
        $dialogue.text(randomName2() + " has come to offer competition: PLAYER TWO INITIATES CONTACT...");
        $playerTurn.text("PLAYER TWO").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot2.css('animation', 'pop 1s');
        $letterA.append("<p>I'm a bartender who loves to party!</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                phlegmaticGameRound2();
            }, 1000)
        });
        $letterB.append("<p>I work from home, nothing better.</p>").on('click', ()=>{
            $success();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP2();
            setTimeout(()=>{
                phlegmaticGameRound2();
            }, 1000)
        });
        $letterC.append("<p>My friends find me fun, you should too!</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                phlegmaticGameRound2();
            }, 1000)
        });
    }

    const phlegmaticGameP2Round2 = ()=>{
        $clearChoices();
        $dialogue.text("");
        $playerTurn.text("PLAYER TWO").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot2.css('animation', 'pop 1s');
        $letterA.append("<p>You hear that music? Let's head that way!</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                phlegmaticGameRound3();
            }, 1000)
        });
        $letterB.append("<p>I'm good at talking, but a terrible listener.</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                phlegmaticGameRound3();
            }, 1000)
        });
        $letterC.append("<p>My place has a real Zen Garden feel to it.</p>").on('click', ()=>{
            $success();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP2();
            setTimeout(()=>{
                phlegmaticGameRound3();
            }, 1000)
        });
    }

    const phlegmaticGameP2Round3 = ()=>{
        $clearChoices();
        $dialogue.text("");
        $playerTurn.text("PLAYER TWO").css('animation', 'fadein 2s').css('animation', 'pulse 0.5s ease-in infinite');
        $robot2.css('animation', 'pop 1s');
        $letterA.append("<p>Yoga is a great way to keep my joints healthy.</p>").on('click', ()=>{
            $success();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP2();
            setTimeout(()=>{
                heartTally();
            }, 1000)
        });
        $letterB.append("<p>I can't stand a boring night in.</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                heartTally();
            }, 1000)
        });
        $letterC.append("<p>Something tells me you're into heavy metal.</p>").on('click', ()=>{
            $malfunction();
            $robot2.css('animation', '');
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                heartTally();
            }, 1000)
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    $choiceBox.children().hide();
    createPlayer1();

});
