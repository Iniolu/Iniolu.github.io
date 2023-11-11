document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    body.addEventListener("mousemove", function (e) {
        createSparkle(e.clientX, e.clientY);
    });

    function createSparkle(x, y) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.style.left = x + "px";
        sparkle.style.top = y + "px";
        body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 800);
    }
});
