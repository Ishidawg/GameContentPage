var content = document.getElementById("container");

//Tabs
const home = document.getElementById("home");
const tweaks = document.getElementById("tweaks");
const mods = document.getElementById("mods");

//Filter on Tweaks Settings
//let tweaksFilter = "All"

const homeAndLoad = `
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

const defaultTweaksPage = content.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">        
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style/script.css">
        </head>
        <body>
                <section class="tweaks-section">
                    <div class="tweaks-div">
                        <h2>Windows general tweaks</h2>
                        <div class="tweaks-content">
                            <article>
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio fugit optio autem deleniti consequatur eveniet, cumque suscipit enim debitis rerum quaerat aperiam voluptas rem illo ut unde nostrum ab.
                                Doloribus totam distinctio mollitia magni recusandae commodi dolorem, cumque dolorum iure pariatur optio maxime, eos eaque et deleniti obcaecati impedit dicta velit laboriosam neque! Rem officia excepturi animi soluta rerum?
                                Quidem maxime voluptatum tempore quae harum, omnis similique, et odio nesciunt assumenda veritatis in possimus dicta accusamus amet commodi earum architecto minus eaque quibusdam cumque quasi ducimus! Obcaecati, tempore animi?
                                Modi beatae eos expedita exercitationem delectus voluptate illo natus, eum omnis blanditiis odio id officia ea eius accusamus rerum vitae tempore similique hic quaerat. Quod, quis. Voluptate dolore non rem.
                                Rem asperiores sequi tenetur eius fugiat error totam optio vero voluptates. Molestiae quo soluta hic odio aut aliquam deserunt eum? Nisi neque cupiditate, voluptatibus harum unde animi nihil pariatur asperiores.
                                Quos minima mollitia dolore! Atque quos ab nam quasi possimus at earum officia! Velit amet possimus iste, excepturi necessitatibus hic quis rem deserunt alias nihil nobis quia quisquam ex distinctio.
                                Perspiciatis, voluptatem obcaecati? Numquam quam velit et debitis, error laudantium eum, deserunt non deleniti porro ut aliquid ullam eveniet accusantium? Nihil obcaecati voluptatem cupiditate hic minima in dolore ex accusamus!
                                Corrupti commodi, alias voluptate maiores praesentium sequi ipsam modi. Accusantium autem, exercitationem porro asperiores sint impedit, optio ea sapiente minus omnis officia doloremque quis molestias ad consectetur minima, blanditiis cumque!
                                Sapiente, porro impedit. Ipsa vitae repudiandae deserunt totam in? Quo tempore excepturi voluptate fugit delectus, provident, illum explicabo culpa aspernatur accusantium recusandae dignissimos dolor minima exercitationem numquam magnam vel cupiditate?
                                Natus architecto autem nemo ipsa officia repellat, praesentium explicabo. Recusandae, possimus? Eveniet eos fugiat ipsa accusamus expedita illum eaque dignissimos soluta veritatis ducimus dolores at consectetur quis, excepturi architecto repudiandae?
                                Error, unde. Aut aliquam quam corrupti neque assumenda illo architecto ea placeat harum, ut voluptates, magnam vel est perspiciatis atque modi, ex temporibus molestias cum adipisci eos. Minima, ratione aperiam!
                                Iusto molestiae officiis, ipsum repudiandae, consequuntur deserunt non vitae omnis commodi, deleniti et officia sint cumque ea! Voluptatibus incidunt enim reprehenderit fuga animi illo. Delectus tenetur porro facere laborum maiores!
                                Neque incidunt, at minus praesentium libero placeat iusto repellat! Magnam quod tempore earum accusamus sequi. Vitae facere corporis culpa rem eius. Ipsa expedita magni voluptatem, aut iste ducimus maiores et.
                                Sequi, sed. Veniam molestiae perferendis maxime quod totam commodi facere dolores, laboriosam tenetur eum minima dolorem modi corrupti unde veritatis. Quas aut vel consectetur dolor veniam vitae quidem delectus vero?
                                Ratione id suscipit adipisci. Magnam expedita delectus eveniet esse minus quaerat quis architecto aut laboriosam amet earum mollitia, deleniti tenetur exercitationem a cumque omnis eos voluptatum itaque quam obcaecati consequatur.
                                Repellendus unde similique saepe ipsam quam impedit, eligendi suscipit vero asperiores officiis cupiditate ratione temporibus animi dolor hic debitis eius iusto molestias eaque consequatur voluptates nulla? Et excepturi cupiditate mollitia.
                                Doloremque minima officiis a consequatur, esse culpa commodi mollitia ipsum distinctio beatae harum architecto ipsa facere est magni iure ea adipisci veniam error quas. Esse ea culpa qui aperiam omnis!
                                Quisquam maiores modi eius. Eligendi itaque sapiente quo alias. Tenetur, aperiam ratione. Tempora reiciendis magnam asperiores, quod, veritatis facilis necessitatibus iusto distinctio aliquam quaerat qui assumenda in nulla rerum aut!
                                Minima hic velit repudiandae alias modi quod maiores sapiente quidem voluptas qui sint, fuga architecto dolores reprehenderit adipisci iure, aut libero suscipit blanditiis laboriosam obcaecati sit aspernatur. Porro, ipsam vel!
                                A nihil soluta inventore at. Debitis saepe sunt accusantium? Adipisci cupiditate recusandae, possimus asperiores sint sapiente, quas quaerat eum animi a libero voluptas similique quae, ipsum ut iusto officiis praesentium!
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio fugit optio autem deleniti consequatur eveniet, cumque suscipit enim debitis rerum quaerat aperiam voluptas rem illo ut unde nostrum ab.
                                </p> 
                                <ul>
                                    <li>ITEM 1</li>
                                    <li>ITEM 2</li>
                                    <li>ITEM 3</li>
                                    <li>ITEM 4</li>
                                </ul>
                            </article>
                        </div>
                    </div>
                    <div class="tweaks-div">
                        <h2>Elden Ring</h2>
                        <div class="tweaks-content">
                            <article>
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio fugit optio autem deleniti consequatur eveniet, cumque suscipit enim debitis rerum quaerat aperiam voluptas rem illo ut unde nostrum ab.
                                Doloribus totam distinctio mollitia magni recusandae commodi dolorem, cumque dolorum iure pariatur optio maxime, eos eaque et deleniti obcaecati impedit dicta velit laboriosam neque! Rem officia excepturi animi soluta rerum?
                                Quidem maxime voluptatum tempore quae harum, omnis similique, et odio nesciunt assumenda veritatis in possimus dicta accusamus amet commodi earum architecto minus eaque quibusdam cumque quasi ducimus! Obcaecati, tempore animi?
                                Modi beatae eos expedita exercitationem delectus voluptate illo natus, eum omnis blanditiis odio id officia ea eius accusamus rerum vitae tempore similique hic quaerat. Quod, quis. Voluptate dolore non rem.
                                Quisquam maiores modi eius. Eligendi itaque sapiente quo alias. Tenetur, aperiam ratione. Tempora reiciendis magnam asperiores, quod, veritatis facilis necessitatibus iusto distinctio aliquam quaerat qui assumenda in nulla rerum aut!
                                Minima hic velit repudiandae alias modi quod maiores sapiente quidem voluptas qui sint, fuga architecto dolores reprehenderit adipisci iure, aut libero suscipit blanditiis laboriosam obcaecati sit aspernatur. Porro, ipsam vel!
                                A nihil soluta inventore at. Debitis saepe sunt accusantium? Adipisci cupiditate recusandae, possimus asperiores sint sapiente, quas quaerat eum animi a libero voluptas similique quae, ipsum ut iusto officiis praesentium!
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio fugit optio autem deleniti consequatur eveniet, cumque suscipit enim debitis rerum quaerat aperiam voluptas rem illo ut unde nostrum ab.
                                </p> 
                                <ul>
                                    <li>ITEM 1</li>
                                    <li>ITEM 2</li>
                                    <li>ITEM 3</li>
                                    <li>ITEM 4</li>
                                </ul>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
        </body>
        </html>
`;

const windowsTweaksContent = content.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">        
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style/script.css">
        </head>
        <body>
                <section class="tweaks-section">
                    <div class="tweaks-div">
                        <h2>Windows general tweaks</h2>
                        <div class="tweaks-content">
                            <article>
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio fugit optio autem deleniti consequatur eveniet, cumque suscipit enim debitis rerum quaerat aperiam voluptas rem illo ut unde nostrum ab.
                                Doloribus totam distinctio mollitia magni recusandae commodi dolorem, cumque dolorum iure pariatur optio maxime, eos eaque et deleniti obcaecati impedit dicta velit laboriosam neque! Rem officia excepturi animi soluta rerum?
                                Quidem maxime voluptatum tempore quae harum, omnis similique, et odio nesciunt assumenda veritatis in possimus dicta accusamus amet commodi earum architecto minus eaque quibusdam cumque quasi ducimus! Obcaecati, tempore animi?
                                Modi beatae eos expedita exercitationem delectus voluptate illo natus, eum omnis blanditiis odio id officia ea eius accusamus rerum vitae tempore similique hic quaerat. Quod, quis. Voluptate dolore non rem.
                                Rem asperiores sequi tenetur eius fugiat error totam optio vero voluptates. Molestiae quo soluta hic odio aut aliquam deserunt eum? Nisi neque cupiditate, voluptatibus harum unde animi nihil pariatur asperiores.
                                Quos minima mollitia dolore! Atque quos ab nam quasi possimus at earum officia! Velit amet possimus iste, excepturi necessitatibus hic quis rem deserunt alias nihil nobis quia quisquam ex distinctio.
                                Perspiciatis, voluptatem obcaecati? Numquam quam velit et debitis, error laudantium eum, deserunt non deleniti porro ut aliquid ullam eveniet accusantium? Nihil obcaecati voluptatem cupiditate hic minima in dolore ex accusamus!
                                Corrupti commodi, alias voluptate maiores praesentium sequi ipsam modi. Accusantium autem, exercitationem porro asperiores sint impedit, optio ea sapiente minus omnis officia doloremque quis molestias ad consectetur minima, blanditiis cumque!
                                Sapiente, porro impedit. Ipsa vitae repudiandae deserunt totam in? Quo tempore excepturi voluptate fugit delectus, provident, illum explicabo culpa aspernatur accusantium recusandae dignissimos dolor minima exercitationem numquam magnam vel cupiditate?
                                Natus architecto autem nemo ipsa officia repellat, praesentium explicabo. Recusandae, possimus? Eveniet eos fugiat ipsa accusamus expedita illum eaque dignissimos soluta veritatis ducimus dolores at consectetur quis, excepturi architecto repudiandae?
                                Error, unde. Aut aliquam quam corrupti neque assumenda illo architecto ea placeat harum, ut voluptates, magnam vel est perspiciatis atque modi, ex temporibus molestias cum adipisci eos. Minima, ratione aperiam!
                                Iusto molestiae officiis, ipsum repudiandae, consequuntur deserunt non vitae omnis commodi, deleniti et officia sint cumque ea! Voluptatibus incidunt enim reprehenderit fuga animi illo. Delectus tenetur porro facere laborum maiores!
                                Neque incidunt, at minus praesentium libero placeat iusto repellat! Magnam quod tempore earum accusamus sequi. Vitae facere corporis culpa rem eius. Ipsa expedita magni voluptatem, aut iste ducimus maiores et.
                                Sequi, sed. Veniam molestiae perferendis maxime quod totam commodi facere dolores, laboriosam tenetur eum minima dolorem modi corrupti unde veritatis. Quas aut vel consectetur dolor veniam vitae quidem delectus vero?
                                Ratione id suscipit adipisci. Magnam expedita delectus eveniet esse minus quaerat quis architecto aut laboriosam amet earum mollitia, deleniti tenetur exercitationem a cumque omnis eos voluptatum itaque quam obcaecati consequatur.
                                Repellendus unde similique saepe ipsam quam impedit, eligendi suscipit vero asperiores officiis cupiditate ratione temporibus animi dolor hic debitis eius iusto molestias eaque consequatur voluptates nulla? Et excepturi cupiditate mollitia.
                                Doloremque minima officiis a consequatur, esse culpa commodi mollitia ipsum distinctio beatae harum architecto ipsa facere est magni iure ea adipisci veniam error quas. Esse ea culpa qui aperiam omnis!
                                Quisquam maiores modi eius. Eligendi itaque sapiente quo alias. Tenetur, aperiam ratione. Tempora reiciendis magnam asperiores, quod, veritatis facilis necessitatibus iusto distinctio aliquam quaerat qui assumenda in nulla rerum aut!
                                Minima hic velit repudiandae alias modi quod maiores sapiente quidem voluptas qui sint, fuga architecto dolores reprehenderit adipisci iure, aut libero suscipit blanditiis laboriosam obcaecati sit aspernatur. Porro, ipsam vel!
                                A nihil soluta inventore at. Debitis saepe sunt accusantium? Adipisci cupiditate recusandae, possimus asperiores sint sapiente, quas quaerat eum animi a libero voluptas similique quae, ipsum ut iusto officiis praesentium!
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio fugit optio autem deleniti consequatur eveniet, cumque suscipit enim debitis rerum quaerat aperiam voluptas rem illo ut unde nostrum ab.
                                </p> 
                                <ul>
                                    <li>ITEM 1</li>
                                    <li>ITEM 2</li>
                                    <li>ITEM 3</li>
                                    <li>ITEM 4</li>
                                </ul>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
        </body>
        </html>
`;

let gamesTweaksContent =  content.innerHTML = `
<!DOCTYPE html>
<html lang="en">        
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./style/script.css">
</head>
<body>
<section class="tweaks-section">
    <div class="tweaks-div">
        <h2>Elden Ring</h2>
        <div class="tweaks-content">
            <article>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio fugit optio autem deleniti consequatur eveniet, cumque suscipit enim debitis rerum quaerat aperiam voluptas rem illo ut unde nostrum ab.
                Doloribus totam distinctio mollitia magni recusandae commodi dolorem, cumque dolorum iure pariatur optio maxime, eos eaque et deleniti obcaecati impedit dicta velit laboriosam neque! Rem officia excepturi animi soluta rerum?
                Quidem maxime voluptatum tempore quae harum, omnis similique, et odio nesciunt assumenda veritatis in possimus dicta accusamus amet commodi earum architecto minus eaque quibusdam cumque quasi ducimus! Obcaecati, tempore animi?
                Modi beatae eos expedita exercitationem delectus voluptate illo natus, eum omnis blanditiis odio id officia ea eius accusamus rerum vitae tempore similique hic quaerat. Quod, quis. Voluptate dolore non rem.
                Quisquam maiores modi eius. Eligendi itaque sapiente quo alias. Tenetur, aperiam ratione. Tempora reiciendis magnam asperiores, quod, veritatis facilis necessitatibus iusto distinctio aliquam quaerat qui assumenda in nulla rerum aut!
                Minima hic velit repudiandae alias modi quod maiores sapiente quidem voluptas qui sint, fuga architecto dolores reprehenderit adipisci iure, aut libero suscipit blanditiis laboriosam obcaecati sit aspernatur. Porro, ipsam vel!
                A nihil soluta inventore at. Debitis saepe sunt accusantium? Adipisci cupiditate recusandae, possimus asperiores sint sapiente, quas quaerat eum animi a libero voluptas similique quae, ipsum ut iusto officiis praesentium!
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio fugit optio autem deleniti consequatur eveniet, cumque suscipit enim debitis rerum quaerat aperiam voluptas rem illo ut unde nostrum ab.
                </p> 
                <ul>
                    <li>ITEM 1</li>
                    <li>ITEM 2</li>
                    <li>ITEM 3</li>
                    <li>ITEM 4</li>
                </ul>
            </article>
        </div>
    </div>
</section>
</main>
</body>
</html>
`;

let tweaksHeader = content.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style/script.css">
</head>
<body>
    <main class="tweaks-container">
        <article class="tweaks-text-box">
            <h1>Tweaks Section</h1>
            <p>
                Here you'll find some tweakd that can make you games run better. I took some tweaks from <a href="https://www.pcgamingwiki.com/wiki/Home" class="link" target="_blank">PCGW!</a></br>
            </p>
            <p>
                Tweaks are mostly on .ini game files, nvidia control panel and/or nvidia inspector and minor windows.
            </p>
        </article>
        <div class="filters">
            <span>Filters</span>
            <div class="buttons filter-buttons">
                <input id="filter-btn-1" class="teste" type="button" value="All" onClick="allFilter()" />
                <input id="filter-btn-2" type="button" value="Windows" onClick="windowsFilter()" />
                <input id="filter-btn-3" type="button" value="Games" onClick="gamesFilter()"/>
            </div>
        </div>
`;

document.addEventListener("DOMContentLoaded", () => {
    content.innerHTML = homeAndLoad;
});

home.addEventListener("click", () => {
    content.innerHTML = homeAndLoad;
});

tweaks.addEventListener("click", () => {
    //let filterValue = "All"

    content.innerHTML = "";
    content.innerHTML = tweaksHeader;
    content.innerHTML += defaultTweaksPage;

    // allButton.addEventListener("click", () => {

        

});

function allFilter() {
    content.innerHTML = "";
    content.innerHTML = tweaksHeader;
    content.innerHTML += defaultTweaksPage;
}

function windowsFilter() {

    content.innerHTML = "";
    content.innerHTML = tweaksHeader;
    content.innerHTML += windowsTweaksContent;
}

function gamesFilter() {

    content.innerHTML = "";
    content.innerHTML = tweaksHeader;
    content.innerHTML += gamesTweaksContent;
}

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
                        Some mods that you'll find here, are also on <a href="https://www.nexusmods.com/" class="link" target="_blank">Nexus Mods!</a></br>
                    </p>
                    <p>
                        All authors is credit on README file 💙
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
                    <div class="mods-div">
                        <h2>Dark Souls 3</h2>
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
                    <!-- <hr class="mods-line"></hr> -->
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
                    <!-- <hr class="mods-line"></hr> -->
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
                    <div class="mods-div">
                        <h2>Dragon's Dogma: Dark Arisen</h2>
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
                    <div class="mods-div">
                        <h2>Dragon's Dogma 2</h2>
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
                    <div class="mods-div">
                        <h2>Fallout 76</h2>
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
