function createPlatform(x, y, width, height) {
    platforms.push({ x, y, width, height });
}
createPlatform(600, 500, 200, 20); 
createPlatform(400, 400, 100, 10); 
createPlatform(300, 300, 50, 5); 
createPlatform(100, 200, 200, 20);
createPlatform(500, 100, 100, 10);
createCollectable("grace", 500, 50);
createCollectable("max", 500, 300); 
createCollectable("kennedi");
createCannon("left", 600, 1000);
createCannon("right", 600, 1000); 
createCannon("top", 600, 1000);
createCannon("bottom", 700, 1000);