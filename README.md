# Robot-Dating-Sim
Dating sim using HTML5/CSS3 and jQuery

How to play:

This game is all about choices. The object of the game is to gain the affection of the target robot, but only if you are their type. Your scan will return their type in the form of the four temperaments as proposed by the Greek physician Hippocrates (c. 460 – c. 370 BC).

Once the type is chosen... you, The Player, must choose dialogue that best matches that temperament to gain the favor of said love interest. You start the game off with two hearts and the correct dialogue will result in an extra heart to your heart container, and the wrong dialogue will lose you a heart.

This is a mandatory two player game, so you must take turns competing for the robot heart of the one in question. The first to end the dialogue tree with the most hearts (max of 5), wins the date! But be careful, the player that loses all their hearts forfeits the date to their opponent.

What was used to make it:

Heavy usage on jQuery and DOM manipulation to present the game as it is. Most of the code is taken up by four dialogue trees. Most of it functions on "if statements". I used no Classes or Objects. A few arrays were used, but only minimally. An empty array was used for the random characters. There are also random generator functions for which characters get loaded, name generation, and dialogue paths.

CSS was used a lot for stylizing the menu, and UI presentation. Animations were also used to give the game some life. The background is an animated .GIF file as well.

A modal was used for How to Play and introduction. Music is streamed for ambience during gameplay.
