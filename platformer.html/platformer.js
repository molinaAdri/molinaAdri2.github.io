createPlatform(600, 500, 200, 20); // short but wide platform located 600 pixels from the left of the screen and 500 pixels from the top of the screen
createPlatform(400, 400, 100, 10); // short but wide platform located 500 pixels from the left of the screen and 400 pixels from the top of the screen
createPlatform(300, 300, 50, 5); // short but wide platform located 400 pixels from the left of the screen and 300 pixels from the top of the screen
createPlatform(100, 200, 200, 20); // short but wide platform located 200 pixels from the left of the screen and 200 pixels from the top of the screen
createPlatform(500, 100, 100, 10); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the top of the screen
createCollectable("grace", 500, 300, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
createCollectable("max", 500, 300); // creates a "max" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
createCollectable("kennedi");//creates a "kennedi" collectible at the coordinates (500, 300) falling with a high grafity of 10, and bouncing with 40% bounce
createCannon("left", 600, 1000); // cannon on left wall, 600px down, shooting once per second
createCannon("right", 600, 1000); // cannon on right wall, 600px down, shooting twice per second
createCannon("top", 600, 1000); // cannon on top wall, 600px down, shooting once three second
createCannon("bottom", 600, 1000); // cannon on bottom wall, 600px down, shooting four per second