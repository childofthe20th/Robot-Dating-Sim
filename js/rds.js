


$(()=>{

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////



    const $heartContainer = $('.heart-container');

    const heartPushP1 = ()=>{
        $heartContainer.append($("<img src='images/hearts/vectorstock_15134146.png'>").attr('class', 'heartP1'));
        if ($('.heartP1').eq(4).length) {
            console.log('Player 1 max hearts acheived!');
        }
    }

    const heartPopP1 = ()=>{
        $('.heartP1').eq(0).remove();
        if ($heartContainer.is(":empty")) {
            console.log('Player 1 loses.');
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const $heartContainer2 = $('.heart-container2');

    const heartPushP2 = ()=>{
        $heartContainer2.append($("<img src='images/hearts/purpleheart.png'>").attr('class', 'heartP2'));
        if ($('.heartP2').eq(4).length) {
            console.log('Player 2 max hearts acheived!');
        }
    }

    const heartPopP2 = ()=>{
        $('.heartP2').eq(0).remove();
        if ($heartContainer2.is(":empty")) {
            console.log('Player 2 loses.');
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const heartTally = ()=>{
        if ($('.heartP1').length > $('.heartP2').length) {
            console.log('Player 1 has more hearts and wins the date!');
        }
        if ($('.heartP2').length > $('.heartP1').length) {
            console.log('Player 2 has more hearts and wins the date!');
        }
        if ($('.heartP1').length === $('.heartP2').length) {
            console.log('It\'s a tie! Flip a coin.' );
        }
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////
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
        })
    })




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
        $dialogue.text("PLAYER ONE: INITIATE CONTACT...");
        $robot1.addClass('borderBlink');
        $letterA.append("<p>Wouldn't you rather be reading tonight?</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                sanguineGame2P()
            }, 1000)
        });
        $letterB.append("<p>Forgive me, I'm shy.</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                sanguineGame2P()
            }, 1000)
        });
        $letterC.append("<p>Have you been to any good shows lately?</p>").on('click', ()=>{
            $success();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                sanguineGame2P()
            }, 1000)
        });
    };

    const sanguineGameRound2 = ()=>{
        $clearChoices();
        $dialogue.text("PLAYER ONE");
        $robot2.removeClass('borderBlink');
        $robot1.addClass('borderBlink');
        $letterA.append("<p>I hate social events, but I like you!</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                sanguineGame2PRound2()
            }, 1000)
        });
        $letterB.append("<p>I find enthusiasm for existence to be priority.</p>").on('click', ()=>{
            $success();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                sanguineGame2PRound2();
            }, 1000)
        });
        $letterC.append("<p>You are quite forward, but that's OK... I guess.</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                sanguineGame2PRound2();
            }, 1000)
        });
    };

    const sanguineGameRound3 = ()=>{
        $clearChoices();
        $dialogue.text("PLAYER ONE");
        $robot2.removeClass('borderBlink');
        $robot1.addClass('borderBlink');
        $letterA.append("<p>Laziness is an overlooked pastime</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                sanguineGame2PRound3()
            }, 1000)
        });
        $letterB.append("<p>Maybe we can sit quietly somewhere?</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                sanguineGame2PRound3();
            }, 1000)
        });
        $letterC.append("<p>I am in the mood for something spontaneous!</p>").on('click', ()=>{
            $success();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                sanguineGame2PRound3();
            }, 1000)
        });
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const sanguineGame2P = ()=>{
        createPlayer2();
        $clearChoices();
        $dialogue.text(randomName2() + " has come to offer competition: PLAYER TWO INITIATES CONTACT...");
        $robot1.removeClass('borderBlink');
        $robot2.addClass('borderBlink');
        $letterA.append("<p>I could use some peace and quiet, you?</p>").on('click', ()=>{
            $malfunction();
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
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                sanguineGameRound2();
            }, 1000)
        });

    };

    const sanguineGame2PRound2 = ()=>{
        $clearChoices();
        $dialogue.text("PLAYER TWO");
        $robot1.removeClass('borderBlink');
        $robot2.addClass('borderBlink');
        $letterA.append("<p>Boredom is the worst, right?</p>").on('click', ()=>{
            $success();
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
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                sanguineGameRound3();
            }, 1000)
        });
        $letterC.append("<p>My patience for people is thin, except for with you.</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                sanguineGameRound3();
            }, 1000)
        });
    };

    const sanguineGame2PRound3 = ()=>{
        $clearChoices();
        $dialogue.text("PLAYER TWO");
        $robot1.removeClass('borderBlink');
        $robot2.addClass('borderBlink');
        $letterA.append("<p>Things move too fast in the city, right?</p>").on('click', ()=>{
            $malfunction();
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
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const cholericGame = ()=>{
        $dialogue.text("PLAYER ONE: INITIATE CONTACT...");
        $robot1.addClass('borderBlink');
        $letterA.append("<p>I need people to motivate me, you?</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                cholericGame2P()
            }, 1000)
        });
        $letterB.append("<p>I don't need anybody to make me feel happy.</p>").on('click', ()=>{
            $success();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                cholericGame2P();
            }, 1000)
        });
        $letterC.append("<p>My goals can wait, there's fun to be had tonight!</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                cholericGame2P();
            }, 1000)
        });
    };

    const cholericGameRound2 = ()=>{
        $clearChoices();
        $dialogue.text("PLAYER ONE");
        $robot2.removeClass('borderBlink');
        $robot1.addClass('borderBlink');
        $letterA.append("<p>I live in my maker's basement, it's quite cozy.</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                cholericGame2PRound2()
            }, 1000)
        });
        $letterB.append("<p>Not sure what tomorrow brings and I don't care!</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                cholericGame2PRound2();
            }, 1000)
        });
        $letterC.append("<p>Time to check in on my metrics... gotta stay fit!</p>").on('click', ()=>{
            $success();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                cholericGame2PRound2();
            }, 1000)
        });
    }

    const cholericGameRound3 = ()=>{
        $clearChoices();
        $dialogue.text("PLAYER ONE");
        $robot2.removeClass('borderBlink');
        $robot1.addClass('borderBlink');
        $letterA.append("<p>Organization is very important, right?</p>").on('click', ()=>{
            $success();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                cholericGame2PRound3()
            }, 1000)
        });
        $letterB.append("<p>I don't worry much about logistics, randomness is good.</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                cholericGame2PRound3();
            }, 1000)
        });
        $letterC.append("<p>I can never decide on what to do next, any ideas?</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                cholericGame2PRound3();
            }, 1000)
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const cholericGame2P = ()=>{
        createPlayer2();
        $clearChoices();
        $dialogue.text(randomName2() + " has come to offer competition: PLAYER TWO INITIATES CONTACT...");
        $robot1.removeClass('borderBlink');
        $robot2.addClass('borderBlink');
        $letterA.append("<p>I like to spend time wandering, let's wander!</p>").on('click', ()=>{
            $malfunction();
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
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                cholericGameRound2();
            }, 1000)
        });
    }

    const cholericGame2PRound2 = ()=>{
        $clearChoices();
        $dialogue.text("PLAYER TWO");
        $robot1.removeClass('borderBlink');
        $robot2.addClass('borderBlink');
        $letterA.append("<p>Today was busy, but I got a lot done. Yay me!</p>").on('click', ()=>{
            $success();
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
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                cholericGameRound3();
            }, 1000)
        });
    }

    const cholericGame2PRound3 = ()=>{
        $clearChoices();
        $dialogue.text("PLAYER TWO");
        $robot1.removeClass('borderBlink');
        $robot2.addClass('borderBlink');
        $letterA.append("<p>If we can't hang out, I'll just call it a night.</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                // tally points
                // end game
            }, 1000)
        });
        $letterB.append("<p>I love it when a cute robot acknowledges me! Wink wink.</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                // tally points
                // end game
            }, 1000)
        });
        $letterC.append("<p>Don't you love it when a plan comes together?</p>").on('click', ()=>{
            $success();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP2();
            setTimeout(()=>{
                // tally points
                // end game
            }, 1000)
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const melancholicGame = ()=>{
        $dialogue.text("PLAYER ONE: INITIATE CONTACT...");
        $robot1.addClass('borderBlink');
        $letterA.append("<p>No time to think, just to act, amiright?</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                melancholicGame2P()
            }, 1000)
        });
        $letterB.append("<p>Love to ponder existentialism, don't you?</p>").on('click', ()=>{
            $success();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                melancholicGame2P();
            }, 1000)
        });
        $letterC.append("<p>Lyrics? Not as important as a phat bassline.</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                melancholicGame2P();
            }, 1000)
        });
    };

    const melancholicGameRound2 = ()=>{
        $clearChoices();
        $dialogue.text("PLAYER ONE");
        $robot2.removeClass('borderBlink');
        $robot1.addClass('borderBlink');
        $letterA.append("<p>Overthinking is for meatbags, let's party!</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                melancholicGame2PRound2()
            }, 1000)
        });
        $letterB.append("<p>Not much on sensitivity, but I'm funny!</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                melancholicGame2PRound2();
            }, 1000)
        });
        $letterC.append("<p>Ever wonder what it is to be sentient?</p>").on('click', ()=>{
            $success();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                melancholicGame2PRound2();
            }, 1000)
        });
    }

    const melancholicGameRound3 = ()=>{
        $clearChoices();
        $dialogue.text("PLAYER ONE");
        $robot2.removeClass('borderBlink');
        $robot1.addClass('borderBlink');
        $letterA.append("<p>I don't spend much on detail, gitur done!</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                melancholicGame2PRound3()
            }, 1000)
        });
        $letterB.append("<p>Let's stop worrying about tomorrow, yes?</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                melancholicGame2PRound3();
            }, 1000)
        });
        $letterC.append("<p>You look cute when you're deep in thought.</p>").on('click', ()=>{
            $success();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                melancholicGame2PRound3();
            }, 1000)
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const melancholicGame2P = ()=>{
        createPlayer2();
        $clearChoices();
        $dialogue.text(randomName2() + " has come to offer competition: PLAYER TWO INITIATES CONTACT...");
        $robot1.removeClass('borderBlink');
        $robot2.addClass('borderBlink');
        $letterA.append("<p>I don't feel sad for very long.</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                melancholicGameRound2()
            }, 1000)
        });
        $letterB.append("<p>I almost overanalyzed my way out of this situation.</p>").on('click', ()=>{
            $success();
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
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                melancholicGameRound2();
            }, 1000)
        });
    }

    const melancholicGame2PRound2 = ()=>{
        $clearChoices();
        $dialogue.text("PLAYER TWO");
        $robot1.removeClass('borderBlink');
        $robot2.addClass('borderBlink');
        $letterA.append("<p>I spent too much time deciding what to wear tonight.</p>").on('click', ()=>{
            $success();
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
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            setTimeout(()=>{
                melancholicGameRound3();
            }, 1000)
        });
    }

    const melancholicGame2PRound3 = ()=>{
        $clearChoices();
        $dialogue.text("PLAYER TWO");
        $robot1.removeClass('borderBlink');
        $robot2.addClass('borderBlink');
        $letterA.append("<p>My favorite movies are Action movies.</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                // tally points
                // end game
            }, 1000)
        });
        $letterB.append("<p>Are you a worrywort like me?</p>").on('click', ()=>{
            $success();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP2();
            setTimeout(()=>{
                // tally points
                // end game
            }, 1000)
        });
        $letterC.append("<p>I saw the sappiest movie yesterday, ugh.</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                // tally points
                // end game
            }, 1000)
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const phlegmaticGame = ()=>{
        $dialogue.text("PLAYER ONE: INITIATE CONTACT...");
        $robot1.addClass('borderBlink');
        $letterA.append("<p>Not many people out tonight, nice and peaceful.</p>").on('click', ()=>{
            $success();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                phlegmaticGame2P()
            }, 1000)
        });
        $letterB.append("<p>HEY! WHATSUP!! YOU ROCK!!</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                phlegmaticGame2P();
            }, 1000)
        });
        $letterC.append("<p>Some people say I'm too hyperactive.</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                phlegmaticGame2P();
            }, 1000)
        });
    };

    const phlegmaticGameRound2 = ()=>{
        $clearChoices();
        $dialogue.text("PLAYER ONE");
        $robot2.removeClass('borderBlink');
        $robot1.addClass('borderBlink');
        $letterA.append("<p>I just can't stay still tonight, let's move!</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                phlegmaticGame2PRound2();
            }, 1000)
        });
        $letterB.append("<p>I have no problem confronting people.</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                phlegmaticGame2PRound2();
            }, 1000)
        });
        $letterC.append("<p>Sometimes, saying less is more.</p>").on('click', ()=>{
            $success();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                phlegmaticGame2PRound2();
            }, 1000)
        });
    }

    const phlegmaticGameRound3 = ()=>{
        $clearChoices();
        $dialogue.text("PLAYER ONE");
        $robot2.removeClass('borderBlink');
        $robot1.addClass('borderBlink');
        $letterA.append("<p>I just installed a trampoline in my living room.</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                phlegmaticGame2PRound3()
            }, 1000)
        });
        $letterB.append("<p>Netflix and chill?</p>").on('click', ()=>{
            $success();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP1();
            setTimeout(()=>{
                phlegmaticGame2PRound3();
            }, 1000)
        });
        $letterC.append("<p>It feels too quiet here, I need commotion.</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP1();
            setTimeout(()=>{
                phlegmaticGame2PRound3();
            }, 1000)
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const phlegmaticGame2P = ()=>{
        createPlayer2();
        $clearChoices();
        $dialogue.text(randomName2() + " has come to offer competition: PLAYER TWO INITIATES CONTACT...");
        $robot1.removeClass('borderBlink');
        $robot2.addClass('borderBlink');
        $letterA.append("<p>I'm a bartender who loves to party!</p>").on('click', ()=>{
            $malfunction();
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
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                phlegmaticGameRound2();
            }, 1000)
        });
    }

    const phlegmaticGame2PRound2 = ()=>{
        $clearChoices();
        $dialogue.text("PLAYER TWO");
        $robot1.removeClass('borderBlink');
        $robot2.addClass('borderBlink');
        $letterA.append("<p>You hear that music? Let's head that way!</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                phlegmaticGameRound3();
            }, 1000)
        });
        $letterB.append("<p>I'm a good public speaker, but a terrible listener.</p>").on('click', ()=>{
            $malfunction();
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
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP2();
            setTimeout(()=>{
                phlegmaticGameRound3();
            }, 1000)
        });
    }

    const phlegmaticGame2PRound3 = ()=>{
        $clearChoices();
        $dialogue.text("PLAYER TWO");
        $robot1.removeClass('borderBlink');
        $robot2.addClass('borderBlink');
        $letterA.append("<p>Yoga is a great way to keep my joints healthy.</p>").on('click', ()=>{
            $success();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPushP2();
            setTimeout(()=>{
                // tally points
                // end game
            }, 1000)
        });
        $letterB.append("<p>I can't stand a boring night in.</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                // tally points
                // end game
            }, 1000)
        });
        $letterC.append("<p>Something tells me you're into heavy metal.</p>").on('click', ()=>{
            $malfunction();
            $letterA.off('click');
            $letterB.off('click');
            $letterC.off('click');
            heartPopP2();
            setTimeout(()=>{
                // tally points
                // end game
            }, 1000)
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    createPlayer1();

});
