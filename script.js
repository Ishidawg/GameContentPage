var content = document.getElementById("container");

const home = document.getElementById("home");
const tweaks = document.getElementById("tweaks");
const mods = document.getElementById("mods");

function renderLoad() {
    content.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./style/script.css">
        </head>
        <body>
            <main class="home-container">
                <article class="home-text-box">
                    <h1>Ishidaw Vault</h1>
                    <p>
                        This site have some purpose: Learn web dev and share my stuff</br>
                        Feel free to use it!</br>
                        Help if you can on github!
                    </p>
                </article>
                <section class="home-icons">
                    <a href="https://www.youtube.com/@ishidaw">
                        <img src="./image/youtube.svg" alt="Youtube" class="youtube">
                    </a>
                    <a href="https://www.twitch.tv/ishidaw">
                        <img src="./image/twitch.svg" alt="Twitch" class="twitch">
                    </a>
                    <a href="https://github.com/Ishidawg">
                        <img src="./image/github.svg" alt="Github" class="github">
                    </a>
                </section>
            </main>
        </body>
        </html>
    `;
}

home.addEventListener("click", () => {
    content.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./style/script.css">
        </head>
        <body>
            <main class="home-container">
                <article class="home-text-box">
                    <h1>Ishidaw Vault</h1>
                    <p>
                        This site have some porpuse: Learn web dev and share my stuff</br>
                        Feel free to use it!</br>
                        Help if you can on github!
                    </p>
                </article>
                <section class="home-icons">
                    <a href="https://www.youtube.com/@ishidaw">
                        <img src="./image/youtube.svg" alt="Youtube" class="youtube">
                    </a>
                    <a href="https://www.twitch.tv/ishidaw">
                        <img src="./image/twitch.svg" alt="Twitch" class="twitch">
                    </a>
                    <a href="https://github.com/Ishidawg">
                        <img src="./image/github.svg" alt="Github" class="github">
                    </a>
                </section>
            </main>
        </body>
        </html>
    `;
});

tweaks.addEventListener("click", () => {
    console.log("Test");
});

mods.addEventListener("click", () => {
    console.log("Test");
});
