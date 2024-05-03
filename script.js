var content = document.getElementById("container");

const home = document.getElementById("home");
const tweaks = document.getElementById("tweaks");
const mods = document.getElementById("mods");

document.addEventListener("DOMContentLoaded", () => {
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
                        <strong>This site have two porpuse:</strong> Learn web dev and share my stuff.</br>
                        Feel free to use it!</br>
                        Help if you can on <a href="https://github.com/Ishidawg/GameContentPage" class="link">Github!</a>
                    </p>
                </article>
                <section class="home-icons">
                    <a href="https://www.youtube.com/@ishidaw" target="_blank">
                        <img src="./image/youtube.svg" alt="Youtube" class="youtube">
                    </a>
                    <a href="https://www.twitch.tv/ishidaw" target="_blank">
                        <img src="./image/twitch.svg" alt="Twitch" class="twitch">
                    </a>
                    <a href="https://github.com/Ishidawg" target="_blank">
                        <img src="./image/github.svg" alt="Github" class="github">
                    </a>
                </section>
            </main>
        </body>
        </html>
    `;
});

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
                        <strong>This site have two porpuse:</strong> Learn web dev and share my stuff.</br>
                        Feel free to use it!</br>
                        Help if you can on <a href="https://github.com/Ishidawg/GameContentPage" class="link">Github!</a>
                    </p>
                </article>
                <section class="home-icons">
                    <a href="https://www.youtube.com/@ishidaw" target="_blank">
                        <img src="./image/youtube.svg" alt="Youtube" class="youtube">
                    </a>
                    <a href="https://www.twitch.tv/ishidaw" target="_blank">
                        <img src="./image/twitch.svg" alt="Twitch" class="twitch">
                    </a>
                    <a href="https://github.com/Ishidawg" target="_blank">
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
    content.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./style/script.css">
        </head>
        <body>
            <main class="mods-container">
                <article class="mods-text-box">
                    <h1>Mods Section</h1>
                    <p>
                        Mods you'll find here, also are on <a href="https://www.nexusmods.com/" class="link" target="_blank">Nexus Mods!</a></br>
                    </p>
                </article>
                <section class="mods-section">
                    <div class="mods-div">
                        <h2>Dark Souls 2</h2>
                        <div class="mods-content">
                            <h2>HUD</h2>
                            <div class="mods-links">
                                <a href="https://www.nexusmods.com/darksouls2/mods/1126?tab=files&file_id=3454" target="_blank">
                                    Simple HUD
                                </a>
                                <a href="https://www.nexusmods.com/darksouls2/mods/1126?tab=files&file_id=3450" target="_blank">
                                    Grayscale HUD
                                </a>
                                <a href="https://www.nexusmods.com/darksouls2/mods/1126?tab=files" target="_blank">
                                    Nexus for more info
                                </a>
                            </div>
                            <h2>RESHADE</h2>
                            <div class="mods-links">
                                <a href="https://www.nexusmods.com/darksouls2/mods/1125?tab=files" target="_blank">
                                    Cinematic
                                </a>
                                <a href="https://drive.google.com/file/d/1uVrXCMiG5KV7TDAU2jM2xl7ipbCiLsNt/view?usp=share_link" target="_blank">
                                    Clarity
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr class="mods-line"></hr>
                    <div class="mods-div">
                        <h2>Payday 2</h2>
                        <div class="mods-content">
                            <h2>ALL</h2>
                            <div class="mods-links">
                                <a href="https://drive.google.com/u/1/uc?id=1DR7ibnn6rgQzMotnBNcTJzu38uPpPDeA&export=download" target="_blank">
                                    Package
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr class="mods-line"></hr>
                    <div class="mods-div">
                        <h2>Monster Hunter: World</h2>
                        <div class="mods-content">
                            <h2>ALL</h2>
                            <div class="mods-links">
                                <a href="https://drive.google.com/file/d/1ATnylHOLFCVbaYPn_MCwE00Fj1OcVJDV/view?usp=share_link" target="_blank">
                                    Package
                                </a>
                            </div>
                            <h2>RESHADE</h2>
                            <div class="mods-links">
                                <a href="https://drive.google.com/file/d/1v0p8omwWJldHDu_8w_msA9X-Lra__YiJ/view?usp=share_link" target="_blank">
                                    Injector DX12
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </body>
        </html>
    `;
});
