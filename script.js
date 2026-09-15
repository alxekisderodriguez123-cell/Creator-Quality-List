// ========================================
// DATOS DE LOS CREADORES
// ========================================
const creators = [

    {
        name: "Split72",
        score: 9.84,
        previousRank: 1,

        avatar: "https://via.placeholder.com/80",

        creatorPoints: 30,
        ratedLevels: 12,
        featuredLevels: 4,
        epicLevels: 2,
        legendaryLevels: 3,
        mythicLevels: 2,

        bestLevels: [
            {
                name: "Level Alpha",
                id: "12345678",
                rate: "Mythic",
                thumbnail: "https://via.placeholder.com/160x90"
            },
            {
                name: "Level Omega",
                id: "87654321",
                rate: "Legendary",
                thumbnail: "https://via.placeholder.com/160x90"
            }
        ]
    },


    {
        name: "YunHaSeu14",
        score: 9.71,
        previousRank: 2,

        avatar: "https://via.placeholder.com/80",

        creatorPoints: 24,
        ratedLevels: 9,
        featuredLevels: 3,
        epicLevels: 1,
        legendaryLevels: 2,
        mythicLevels: 1,

        bestLevels: [
            {
                name: "Dreamscape",
                id: "23456789",
                rate: "Legendary",
                thumbnail: "https://via.placeholder.com/160x90"
            },
            {
                name: "Astral",
                id: "34567890",
                rate: "Featured",
                thumbnail: "https://via.placeholder.com/160x90"
            }
        ]
    },


    {
        name: "robotchief",
        score: 9.63,
        previousRank: 3,

        avatar: "https://via.placeholder.com/80",

        creatorPoints: 21,
        ratedLevels: 8,
        featuredLevels: 2,
        epicLevels: 1,
        legendaryLevels: 2,
        mythicLevels: 1,

        bestLevels: [
            {
                name: "Neon Core",
                id: "45678901",
                rate: "Legendary",
                thumbnail: "https://via.placeholder.com/160x90"
            },
            {
                name: "Pulse",
                id: "56789012",
                rate: "Featured",
                thumbnail: "https://via.placeholder.com/160x90"
            }
        ]
    },


    {
        name: "SwtCyn",
        score: 9.52,
        previousRank: 4,

        avatar: "https://via.placeholder.com/80",

        creatorPoints: 18,
        ratedLevels: 7,
        featuredLevels: 3,
        epicLevels: 1,
        legendaryLevels: 1,
        mythicLevels: 0,

        bestLevels: [
            {
                name: "Afterlight",
                id: "67890123",
                rate: "Legendary",
                thumbnail: "https://via.placeholder.com/160x90"
            }
        ]
    },


    {
        name: "AleXins",
        score: 9.47,
        previousRank: 5,

        avatar: "https://via.placeholder.com/80",

        creatorPoints: 15,
        ratedLevels: 6,
        featuredLevels: 2,
        epicLevels: 1,
        legendaryLevels: 1,
        mythicLevels: 0,

        bestLevels: [
            {
                name: "Gravity",
                id: "78901234",
                rate: "Featured",
                thumbnail: "https://via.placeholder.com/160x90"
            }
        ]
    }

];


// ========================================
// NAVEGACIÓN
// ========================================

const buttons = document.querySelectorAll(".nav-button");
const sections = document.querySelectorAll(".page-section");

function showSection(sectionId) {

    sections.forEach(function (section) {
        section.classList.remove("active");
    });

    const section = document.getElementById(sectionId);

    if (section) {
        section.classList.add("active");
    }
}


buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        showSection(button.dataset.section);

    });

});


// ========================================
// BOTÓN DE HOME
// ========================================

const homeButton = document.querySelector(".home-button");

if (homeButton) {

    homeButton.addEventListener("click", function () {

        showSection(homeButton.dataset.section);

    });

}


// ========================================
// ELEMENTOS DEL RANKING
// ========================================

const creatorList = document.getElementById("creator-list");
const searchInput =
    document.getElementById("creator-search-input");


// ========================================
// RENDER DEL TOP 100
// ========================================

function renderCreators(searchText = "") {

    creatorList.innerHTML = "";


    // Ordenar por score
    const sortedCreators =
        [...creators].sort(function (a, b) {

            return b.score - a.score;

        });


    // Calcular rank y movimiento
    sortedCreators.forEach(function (creator, index) {

        const currentRank = index + 1;

        creator.rank = currentRank;


        if (creator.previousRank === undefined) {

            creator.movementText = "NEW";

        } else {

            const movement =
                creator.previousRank - currentRank;


            if (movement > 0) {

                creator.movementText =
                    "▲ +" + movement;

            } else if (movement < 0) {

                creator.movementText =
                    "▼ " + movement;

            } else {

                creator.movementText = "—";

            }

        }

    });


    // Filtrar por búsqueda
    const filteredCreators =
        sortedCreators.filter(function (creator) {

            return creator.name
                .toLowerCase()
                .includes(searchText.toLowerCase());

        });


    // Crear tarjetas
    filteredCreators.forEach(function (creator) {

        const card =
            document.createElement("div");

        card.classList.add("creator-card");


        card.innerHTML = `

            <div class="creator-avatar">

                <img
                    src="${creator.avatar}"
                    alt="${creator.name}"
                >

            </div>


            <div class="creator-main">

                <div class="creator-header">

                    <div>

                        <strong>
                            #${creator.rank} ${creator.name}
                        </strong>

                        <span class="creator-subtitle">
                            Creator Quality Score
                        </span>

                    </div>


                    <div class="creator-score">
                        ${creator.score}
                    </div>

                </div>


                <div class="creator-stats">

                    <span>
                        <b>CP</b>
                        ${creator.creatorPoints}
                    </span>

                    <span>
                        <b>Rated</b>
                        ${creator.ratedLevels}
                    </span>

                    <span>
                        <b>Featured</b>
                        ${creator.featuredLevels}
                    </span>

                    <span>
                        <b>Epic</b>
                        ${creator.epicLevels}
                    </span>

                    <span>
                        <b>Legendary</b>
                        ${creator.legendaryLevels}
                    </span>

                    <span>
                        <b>Mythic</b>
                        ${creator.mythicLevels}
                    </span>

                </div>


                <div class="creator-movement">

                    ${creator.movementText}

                </div>

            </div>

        `;


        // Abrir perfil
        card.addEventListener("click", function () {

            openCreatorProfile(creator);

        });


        creatorList.appendChild(card);

    });

}


// ========================================
// PERFIL DEL CREADOR
// ========================================

function openCreatorProfile(creator) {

    const profileContent =
        document.getElementById("profile-content");

    const movementText =
        creator.movementText || "—";


    const levelsHTML =
        creator.bestLevels.map(function (level) {

            return `

                <div class="profile-level">

                    <img
                        class="profile-level-thumbnail"
                        src="${level.thumbnail}"
                        alt="${level.name}"
                    >

                    <div class="profile-level-main">

                        <strong>
                            ${level.name}
                        </strong>

                        <span>
                            ID: ${level.id}
                        </span>

                    </div>

                    <span class="profile-level-rate">
                        ${level.rate}
                    </span>

                </div>

            `;

        }).join("");


    profileContent.innerHTML = `

        <div class="profile-header">

            <div class="profile-avatar">

                <img
                    src="${creator.avatar}"
                    alt="${creator.name}"
                >

            </div>


            <div class="profile-identity">

                <h2>
                    ${creator.name}
                </h2>

                <span class="profile-rank">
                    #${creator.rank}
                </span>

                <span class="profile-score">
                    ${creator.score} CQL Score
                </span>

                <span class="profile-movement">
                    ${movementText}
                </span>

            </div>


            <div class="profile-actions">

                <button id="edit-profile-button">
                    Edit Profile
                </button>

            </div>

        </div>


        <div class="profile-statistics">

            <div class="profile-stat">
                <strong>${creator.creatorPoints}</strong>
                <span>Creator Points</span>
            </div>

            <div class="profile-stat">
                <strong>${creator.ratedLevels}</strong>
                <span>Rated Levels</span>
            </div>

            <div class="profile-stat">
                <strong>${creator.featuredLevels}</strong>
                <span>Featured</span>
            </div>

            <div class="profile-stat">
                <strong>${creator.epicLevels}</strong>
                <span>Epic</span>
            </div>

            <div class="profile-stat">
                <strong>${creator.legendaryLevels}</strong>
                <span>Legendary</span>
            </div>

            <div class="profile-stat">
                <strong>${creator.mythicLevels}</strong>
                <span>Mythic</span>
            </div>

        </div>


        <div class="profile-section">

            <h3>
                Best Levels
            </h3>

            <div class="profile-levels">

                ${levelsHTML}

            </div>

        </div>

    `;


    setupEditProfile(creator);


    showSection("creator-profile");

}


// ========================================
// BOTÓN VOLVER
// ========================================

const backButton =
    document.getElementById("back-to-ranking");


if (backButton) {

    backButton.addEventListener("click", function () {

        showSection("top100");

    });

}


// ========================================
// BUSCADOR
// ========================================

if (searchInput) {

    searchInput.addEventListener("input", function () {

        renderCreators(searchInput.value);

    });

}
function setupEditProfile(creator) {

    const modal =
        document.getElementById("edit-profile-modal");

    const editButton =
        document.getElementById("edit-profile-button");

    const closeButton =
        document.getElementById("close-edit-profile");

    const cancelButton =
        document.getElementById("cancel-edit-profile");

    const saveButton =
        document.getElementById("save-edit-profile");

    const nameInput =
        document.getElementById("edit-name");

    const bioInput =
        document.getElementById("edit-bio");

    const linksInput =
        document.getElementById("edit-links");

    const avatarInput =
        document.getElementById("edit-avatar");

    const avatarPreview =
        document.getElementById("edit-avatar-preview");


    editButton.addEventListener("click", function () {

        nameInput.value =
            creator.name || "";

        bioInput.value =
            creator.bio || "";

        linksInput.value =
            creator.links || "";

        avatarPreview.src =
            creator.avatar || "";

        modal.classList.add("visible");

    });


    function closeModal() {

        modal.classList.remove("visible");

        avatarInput.value = "";

    }


    closeButton.addEventListener(
        "click",
        closeModal
    );


    cancelButton.addEventListener(
        "click",
        closeModal
    );


    avatarInput.addEventListener(
        "change",
        function () {

            const file =
                avatarInput.files[0];

            if (!file) {
                return;
            }


            const reader =
                new FileReader();


            reader.onload = function (event) {

                avatarPreview.src =
                    event.target.result;

            };


            reader.readAsDataURL(file);

        }
    );


    saveButton.addEventListener(
        "click",
        function () {

            creator.name =
                nameInput.value.trim() ||
                creator.name;


            creator.bio =
                bioInput.value.trim();


            creator.links =
                linksInput.value.trim();


            if (avatarPreview.src) {

                creator.avatar =
                    avatarPreview.src;

            }


            closeModal();


            renderCreators();


            openCreatorProfile(creator);

        }
    );

}

// ========================================
// INICIO
// ========================================

renderCreators();

showSection("home");