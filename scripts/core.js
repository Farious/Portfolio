class PortfolioProject {
    constructor(_title, _urlref, _imgref, _imghoverref, _description, _type) {
        this.title = _title;
        this.urlref = _urlref;
        this.imgref = _imgref;
        this.imghoverref = _imghoverref;
        this.description = _description;
        this.type = _type;
    }

    SerializeAsMain() {
        return "<a href='" + this.urlref + "' onclick='return clickableProject(this)' target='_blank'> \
        <div class='pBorder'> \
            <article style='background-image:url(" + this.imgref + ")'> \
                <div class='description'> \
                    <h4>" + this.title + "</h4> \
                    <div><p>" + this.description + "</p></div> \
                    <p class='team'>" + this.type + "</p> \
                </div> \
                <div style='background-image:url(" + this.imghoverref + ")' class='hov'></div> \
            </article> \
        </div> \
    </a>";
    }

    SerializeAsRelease() {
        return `<a href=`+ this.urlref + `onclick="return clickableProject(this)" target="_blank">
        <div class="pBorder">
            <article style="background-image:url(` + this.imgref + `)">
                <div class="description">
                    <h4>` + this.title + `</h4>
                    <div>
                        <p>` + this.description + `</p>
                    </div>
                    <p class="team">` + this.type + `</p>
                </div>
                <div style="background-image:url(` + this.imghoverref + `)" class="hov"></div>
            </article>
        </div>
    </a>`;
    }
};

var mainProjects = [
    new PortfolioProject(
        "Centauri Rising",
        "https://centauri-rising.com/",
        "img/projects/centauri_rising_random.png",
        "img/projects/centauri_rising_hover.png",
        "Centauri Rising is a real time tactics single-player game. Being developed in Unreal Engine 4. I'm the lead developer.",
        "Personal Project"),
    new PortfolioProject(
        "QDD Engine",
        "https://www.youtube.com/playlist?list=PLFj4C8c4afUD_RuxM2HDzsAPOzYVRA4Nr",
        "img/projects/qdd_engine_normal.jpg",
        "img/projects/qdd_engine_hover.jpg",
        "Simple cross-platform 3D engine written from scratch.\
        This is my programming-sandbox where I try my best at: architecture design; real-time rendering features;\
        Being developed in C++ and OpenGL - CMake and SDL2.\
        I'm the only developer.",
        "Personal Project"),
    new PortfolioProject(
        "Blockimals",
        "https://www.youtube.com/playlist?list=PLFj4C8c4afUAJlzBDYULUipbnpBjqvR5g",
        "img/projects/blockimals_normal.jpg",
        "img/projects/blockimals_hover.jpg",
        `Match-3 game for mobile, created the main gameplay mechanics - Level system; Over-world; Menu system;
        Developed using Unity with a big focus in allowing the game designer to create any board layout.
        I'm the only developer.`,
        "Personal Project"),
    new PortfolioProject(
        "Core Tech Lead",
        "https://play.google.com/store/apps/dev?id=5933611429942957630",
        "img/projects/miniclip_normal.png",
        "img/projects/miniclip_normal.png",
        `Leading Miniclip's core technology client's stack.
        Internal C++/Objective-C engine and internal UI/UX editor.
        Internal Unity modules, enabling sharing technical features/vision.
        User tracking module - internal and external.
        Maintainer of our CI/CD stack - Internal\External Games; Technology modules.`,
        "Miniclip - Leading 7 devs")
];

var releasedProjects = [
    new PortfolioProject(
        "Soccer Stars Mobile",
        "https://play.google.com/store/apps/details?id=com.miniclip.soccerstars",
        "img/projects/soccer_stars_random.png",
        "img/projects/soccer_stars_hover.png",
        `Turn based multiplayer PvP soccer/subbuteo inspired game for Android and iOS.
        <b>Lead Developer</b>.`,
        "Miniclip - Leading 3 devs"
    ),
    new PortfolioProject(
        "Top Down Golf",
        "https://support.miniclip.com/hc/en-us/articles/360043191174-Top-Down-Golf",
        "img/projects/topdowngolf_normal.jpg",
        "img/projects/topdowngolf_hover.jpg",
        `Turn based and real-time multiplayer mini golf for Android and iOS.
        <b>Lead Developer</b>.`,
        "Miniclip - Leading 4 devs"
    ),
    new PortfolioProject(
        "Carrom",
        "https://play.google.com/store/apps/details?id=com.miniclip.carrom",
        "img/projects/carrom_normal.png",
        "img/projects/carrom_hover.png",
        `Turn based PvP Carrom game for Android and iOS.
        Auxiliary <b>Lead Developer</b>.`,
        "Miniclip - Leading 3 devs"
    ),
    new PortfolioProject(
        "Hockey Stars",
        "https://play.google.com/store/apps/details?id=com.miniclip.hockeystars",
        "img/projects/hockey_normal.png",
        "img/projects/hockey_hover.png",
        `Turn based PvP hockey game for Android and iOS (skin of Soccer Stars)
        Auxiliary <b>Developer</b>.`,
        "Miniclip - Developer"
    ),
    new PortfolioProject(
        "Spaceone.io",
        "#portfolio",
        "img/projects/spaceoneio_normal.jpg",
        "img/projects/spaceoneio_hover.jpg",
        `Real-time multiplayer 2D space shooter (Asteroids + Agar.io)
        Full-stack developer during prototype and initial production phase.
        C/C++ and Emscripten`,
        "Miniclip - Developer"
    )
];

var otherProjects = [
    new PortfolioProject(
        "TreeLema",
        "https://ldjam.com/events/ludum-dare/38/$26669",
        "img/projects/treelemma_normal.jpg",
        "img/projects/treelemma_hover.jpg",
        `Exploratory game - Ludum Dare #38
        Unity - Sole Developer - 4h`,
        "Ludum Dare"
    ),
    new PortfolioProject(
        "Elon Musk Simulator",
        "https://ldjam.com/events/ludum-dare/43/elon-musk-simulator",
        "img/projects/elon_normal.png",
        "img/projects/elon_hover.png",
        `Space defend your ship where sacrificing your crew members is the only way to survive - Ludum Dare #43
        Unreal Engine 4 - Sole Developer - 4h`,
        "Ludum Dare"
    ),
    new PortfolioProject(
        "Bubble Hit",
        "https://www.youtube.com/playlist?list=PLFj4C8c4afUBAll8_BDAuAAL_uDGahc8r",
        "img/projects/bubble_hit_normal.jpg",
        "img/projects/bubble_hit_hover.jpg",
        `A Bubble Hit port from Flash to Haxe targetting mobile browsers
        Haxe - Kha - 40h (Menu system; Optimizations - 60fps on a Nexus S)`,
        "Contract Work"
    ),
    new PortfolioProject(
        "Gem Breaker",
        "https://github.com/Farious/GemBreaker",
        "img/projects/gem_breaker_normal.jpg",
        "img/projects/gem_breaker_normal.jpg",
        `Predecessor to Blockimals
        Ores and Match-3 game implemented in C++.
        Ores version available freely; Complete version by request.`,
        "Personal Project"
    ),
    new PortfolioProject(
        "",
        "https://www.shadertoy.com/user/farious",
        "img/projects/shader_toy_normal.jpg",
        "img/projects/shader_toy_hover.jpg",
        `My collection of experiments in shader toy.
        Experimenting with multiple techniques.`,
        "Personal Project"
    )
];


function insertMainProjects() {
    mainProjects.forEach(project => {
        var portfolioSection = document.getElementById("portfolioProjects");
        portfolioSection.innerHTML += project.SerializeAsMain();
    });
}

function insertReleasedProjects() {
    releasedProjects.forEach(project => {
        var portfolioSection = document.getElementById("releasedProjectsSection");
        portfolioSection.innerHTML += project.SerializeAsMain();
    });
}

function insertOtherProjects() {
    otherProjects.forEach(project => {
        var portfolioSection = document.getElementById("otherProjectsSection");
        portfolioSection.innerHTML += project.SerializeAsMain();
    });
}

window.addEventListener("load", window => {
    insertMainProjects();
    insertReleasedProjects();
    insertOtherProjects();
}, false);