// ========================================
// CREATOR QUALITY LIST
// SCRIPT.JS
// ========================================


// ========================================
// DATOS DE LOS CREADORES
// ========================================
//
// Para agregar o modificar un creador,
// solamente cambia los datos dentro de
// su objeto.
//
// El ranking se ordena automáticamente
// según "score".
//

const creators = [

    {
        name: "Split72",
        score: 9.84,
        previousRank: 1,
        avatar: "images/avatars/Split72.png",
        creatorPoints: 30,
        ratedLevels: 12,
        featuredLevels: 4,
        epicLevels: 2,
        legendaryLevels: 3,
        mythicLevels: 2,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: [
            {
                name: "Level Alpha",
                id: "12345678",
                rate: "Mythic",
                thumbnail: "https://via.placeholder.com/320x180"
            },
            {
                name: "Level Omega",
                id: "87654321",
                rate: "Legendary",
                thumbnail: "https://via.placeholder.com/320x180"
            }
        ]
    },

    {
        name: "YunHaSeu14",
        score: 9.71,
        previousRank: 2,
        avatar: "images/avatars/YunHaSeu14.png",
        creatorPoints: 24,
        ratedLevels: 9,
        featuredLevels: 3,
        epicLevels: 1,
        legendaryLevels: 2,
        mythicLevels: 1,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: [
            {
                name: "Dreamscape",
                id: "23456789",
                rate: "Legendary",
                thumbnail: "https://via.placeholder.com/320x180"
            },
            {
                name: "Astral",
                id: "34567890",
                rate: "Featured",
                thumbnail: "https://via.placeholder.com/320x180"
            }
        ]
    },

    {
        name: "robotchief",
        score: 9.63,
        previousRank: 3,
        avatar: "images/avatars/robotchief.png",
        creatorPoints: 21,
        ratedLevels: 8,
        featuredLevels: 2,
        epicLevels: 1,
        legendaryLevels: 2,
        mythicLevels: 1,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: [
            {
                name: "Neon Core",
                id: "45678901",
                rate: "Legendary",
                thumbnail: "https://via.placeholder.com/320x180"
            },
            {
                name: "Pulse",
                id: "56789012",
                rate: "Featured",
                thumbnail: "https://via.placeholder.com/320x180"
            }
        ]
    },

    {
        name: "SwtCyn",
        score: 9.52,
        previousRank: 4,
        avatar: "images/avatars/SwtCyn.png",
        creatorPoints: 18,
        ratedLevels: 7,
        featuredLevels: 3,
        epicLevels: 1,
        legendaryLevels: 1,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: [
            {
                name: "Afterlight",
                id: "67890123",
                rate: "Legendary",
                thumbnail: "https://via.placeholder.com/320x180"
            }
        ]
    },

    {
        name: "AleXins",
        score: 9.47,
        previousRank: 5,
        avatar: "images/avatars/AleXins.png",
        creatorPoints: 15,
        ratedLevels: 6,
        featuredLevels: 2,
        epicLevels: 1,
        legendaryLevels: 1,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: [
            {
                name: "Gravity",
                id: "78901234",
                rate: "Featured",
                thumbnail: "https://via.placeholder.com/320x180"
            }
        ]
    },

    {
        name: "NeonPulse",
        score: 9.39,
        previousRank: 6,
        avatar: "images/avatars/NeonPulse.png",
        creatorPoints: 14,
        ratedLevels: 6,
        featuredLevels: 2,
        epicLevels: 1,
        legendaryLevels: 1,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "VoidMaker",
        score: 9.32,
        previousRank: 7,
        avatar: "images/avatars/VoidMaker.png",
        creatorPoints: 13,
        ratedLevels: 6,
        featuredLevels: 2,
        epicLevels: 1,
        legendaryLevels: 1,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "Kryptex",
        score: 9.27,
        previousRank: 8,
        avatar: "images/avatars/Kryptex.png",
        creatorPoints: 12,
        ratedLevels: 5,
        featuredLevels: 2,
        epicLevels: 1,
        legendaryLevels: 1,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "LunarGD",
        score: 9.21,
        previousRank: 9,
        avatar: "images/avatars/LunarGD.png",
        creatorPoints: 11,
        ratedLevels: 5,
        featuredLevels: 2,
        epicLevels: 1,
        legendaryLevels: 1,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "Arctix",
        score: 9.16,
        previousRank: 10,
        avatar: "images/avatars/Arctix.png",
        creatorPoints: 10,
        ratedLevels: 5,
        featuredLevels: 2,
        epicLevels: 1,
        legendaryLevels: 1,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "PixelRush",
        score: 9.11,
        previousRank: 11,
        avatar: "images/avatars/PixelRush.png",
        creatorPoints: 10,
        ratedLevels: 5,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 1,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "Xenon",
        score: 9.06,
        previousRank: 12,
        avatar: "images/avatars/Xenon.png",
        creatorPoints: 9,
        ratedLevels: 5,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 1,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "MellowGD",
        score: 9.01,
        previousRank: 13,
        avatar: "images/avatars/MellowGD.png",
        creatorPoints: 9,
        ratedLevels: 5,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 1,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "AstralCore",
        score: 8.96,
        previousRank: 14,
        avatar: "images/avatars/AstralCore.png",
        creatorPoints: 9,
        ratedLevels: 4,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 1,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "QuantumGD",
        score: 8.91,
        previousRank: 15,
        avatar: "images/avatars/QuantumGD.png",
        creatorPoints: 8,
        ratedLevels: 4,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "DarkNova",
        score: 8.86,
        previousRank: 16,
        avatar: "images/avatars/DarkNova.png",
        creatorPoints: 8,
        ratedLevels: 4,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "GlitchWave",
        score: 8.81,
        previousRank: 17,
        avatar: "images/avatars/GlitchWave.png",
        creatorPoints: 8,
        ratedLevels: 4,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "Nexor",
        score: 8.76,
        previousRank: 18,
        avatar: "images/avatars/Nexor.png",
        creatorPoints: 7,
        ratedLevels: 4,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "FrostByte",
        score: 8.71,
        previousRank: 19,
        avatar: "images/avatars/FrostByte.png",
        creatorPoints: 7,
        ratedLevels: 4,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "RavenGD",
        score: 8.66,
        previousRank: 20,
        avatar: "images/avatars/RavenGD.png",
        creatorPoints: 7,
        ratedLevels: 4,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "BlueOrbit",
        score: 8.61,
        previousRank: 21,
        avatar: "images/avatars/BlueOrbit.png",
        creatorPoints: 7,
        ratedLevels: 4,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "CyberDust",
        score: 8.56,
        previousRank: 22,
        avatar: "images/avatars/CyberDust.png",
        creatorPoints: 6,
        ratedLevels: 4,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "NightPixel",
        score: 8.51,
        previousRank: 23,
        avatar: "images/avatars/NightPixel.png",
        creatorPoints: 6,
        ratedLevels: 4,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "Solaris",
        score: 8.46,
        previousRank: 24,
        avatar: "images/avatars/Solaris.png",
        creatorPoints: 6,
        ratedLevels: 4,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "PulseMaker",
        score: 8.41,
        previousRank: 25,
        avatar: "images/avatars/PulseMaker.png",
        creatorPoints: 6,
        ratedLevels: 4,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "EchoGD",
        score: 8.36,
        previousRank: 26,
        avatar: "images/avatars/EchoGD.png",
        creatorPoints: 5,
        ratedLevels: 4,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "HyperVoid",
        score: 8.31,
        previousRank: 27,
        avatar: "images/avatars/HyperVoid.png",
        creatorPoints: 5,
        ratedLevels: 4,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "CrimsonGD",
        score: 8.26,
        previousRank: 28,
        avatar: "images/avatars/CrimsonGD.png",
        creatorPoints: 5,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "OrbitX",
        score: 8.21,
        previousRank: 29,
        avatar: "images/avatars/OrbitX.png",
        creatorPoints: 5,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "Zenith",
        score: 8.16,
        previousRank: 30,
        avatar: "images/avatars/Zenith.png",
        creatorPoints: 5,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "StaticGD",
        score: 8.11,
        previousRank: 31,
        avatar: "images/avatars/StaticGD.png",
        creatorPoints: 4,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "NovaRush",
        score: 8.06,
        previousRank: 32,
        avatar: "images/avatars/NovaRush.png",
        creatorPoints: 4,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "VortexGD",
        score: 8.01,
        previousRank: 33,
        avatar: "images/avatars/VortexGD.png",
        creatorPoints: 4,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "MistWave",
        score: 7.96,
        previousRank: 34,
        avatar: "images/avatars/MistWave.png",
        creatorPoints: 4,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "RedShift",
        score: 7.91,
        previousRank: 35,
        avatar: "images/avatars/RedShift.png",
        creatorPoints: 4,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "AetherGD",
        score: 7.86,
        previousRank: 36,
        avatar: "images/avatars/AetherGD.png",
        creatorPoints: 4,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

           {
        name: "DarkPulse",
        score: 7.81,
        previousRank: 37,
        avatar: "images/avatars/DarkPulse.png",
        creatorPoints: 4,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "Lumix",
        score: 7.76,
        previousRank: 38,
        avatar: "images/avatars/Lumix.png",
        creatorPoints: 3,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "CoreShift",
        score: 7.71,
        previousRank: 39,
        avatar: "images/avatars/CoreShift.png",
        creatorPoints: 3,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "FlashOrbit",
        score: 7.66,
        previousRank: 40,
        avatar: "images/avatars/FlashOrbit.png",
        creatorPoints: 3,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "GhostPixel",
        score: 7.61,
        previousRank: 41,
        avatar: "images/avatars/GhostPixel.png",
        creatorPoints: 3,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "IonGD",
        score: 7.56,
        previousRank: 42,
        avatar: "images/avatars/IonGD.png",
        creatorPoints: 3,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "StormByte",
        score: 7.51,
        previousRank: 43,
        avatar: "images/avatars/StormByte.png",
        creatorPoints: 3,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "CrystalGD",
        score: 7.46,
        previousRank: 44,
        avatar: "images/avatars/CrystalGD.png",
        creatorPoints: 3,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "Velocity",
        score: 7.41,
        previousRank: 45,
        avatar: "images/avatars/Velocity.png",
        creatorPoints: 3,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "SkylineGD",
        score: 7.36,
        previousRank: 46,
        avatar: "images/avatars/SkylineGD.png",
        creatorPoints: 3,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "RiftMaker",
        score: 7.31,
        previousRank: 47,
        avatar: "images/avatars/RiftMaker.png",
        creatorPoints: 3,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "ZeroGravity",
        score: 7.26,
        previousRank: 48,
        avatar: "images/avatars/ZeroGravity.png",
        creatorPoints: 2,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "NeonGhost",
        score: 7.21,
        previousRank: 49,
        avatar: "images/avatars/NeonGhost.png",
        creatorPoints: 2,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "CyberNova",
        score: 7.16,
        previousRank: 50,
        avatar: "images/avatars/CyberNova.png",
        creatorPoints: 2,
        ratedLevels: 3,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "AfterGlow",
        score: 7.11,
        previousRank: 51,
        avatar: "images/avatars/AfterGlow.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "DarkMatter",
        score: 7.06,
        previousRank: 52,
        avatar: "images/avatars/DarkMatter.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "FrostGD",
        score: 7.01,
        previousRank: 53,
        avatar: "images/avatars/FrostGD.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "MoonCore",
        score: 6.96,
        previousRank: 54,
        avatar: "images/avatars/MoonCore.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "StaticWave",
        score: 6.91,
        previousRank: 55,
        avatar: "images/avatars/StaticWave.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "BlueShift",
        score: 6.86,
        previousRank: 56,
        avatar: "images/avatars/BlueShift.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "RedNova",
        score: 6.81,
        previousRank: 57,
        avatar: "images/avatars/RedNova.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "AeroGD",
        score: 6.76,
        previousRank: 58,
        avatar: "images/avatars/AeroGD.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "NovaPixel",
        score: 6.71,
        previousRank: 59,
        avatar: "images/avatars/NovaPixel.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "VoidPulse",
        score: 6.66,
        previousRank: 60,
        avatar: "images/avatars/VoidPulse.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "EchoNova",
        score: 6.61,
        previousRank: 61,
        avatar: "images/avatars/EchoNova.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "GlitchCore",
        score: 6.56,
        previousRank: 62,
        avatar: "images/avatars/GlitchCore.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "PixelVoid",
        score: 6.51,
        previousRank: 63,
        avatar: "images/avatars/PixelVoid.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "LunarShift",
        score: 6.46,
        previousRank: 64,
        avatar: "images/avatars/LunarShift.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "CyberRift",
        score: 6.41,
        previousRank: 65,
        avatar: "images/avatars/CyberRift.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "StormGD",
        score: 6.36,
        previousRank: 66,
        avatar: "images/avatars/StormGD.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "AbyssMaker",
        score: 6.31,
        previousRank: 67,
        avatar: "images/avatars/AbyssMaker.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "OrbitGD",
        score: 6.26,
        previousRank: 68,
        avatar: "images/avatars/OrbitGD.png",
        creatorPoints: 2,
        ratedLevels: 2,
        epicLevels: 1,
        featuredLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

        {
        name: "NeonRift",
        score: 6.21,
        previousRank: 69,
        avatar: "images/avatars/NeonRift.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "FrostNova",
        score: 6.16,
        previousRank: 70,
        avatar: "images/avatars/FrostNova.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "DarkOrbit",
        score: 6.11,
        previousRank: 71,
        avatar: "images/avatars/DarkOrbit.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "PulseGD",
        score: 6.06,
        previousRank: 72,
        avatar: "images/avatars/PulseGD.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "AetherWave",
        score: 6.01,
        previousRank: 73,
        avatar: "images/avatars/AetherWave.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "ShadowPixel",
        score: 5.96,
        previousRank: 74,
        avatar: "images/avatars/ShadowPixel.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "VortexCore",
        score: 5.91,
        previousRank: 75,
        avatar: "images/avatars/VortexCore.png",
        creatorPoints: 2,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "GlowingGD",
        score: 5.86,
        previousRank: 76,
        avatar: "images/avatars/GlowingGD.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "NightCore",
        score: 5.81,
        previousRank: 77,
        avatar: "images/avatars/NightCore.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "ZeroPulse",
        score: 5.76,
        previousRank: 78,
        avatar: "images/avatars/ZeroPulse.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "SkyCore",
        score: 5.71,
        previousRank: 79,
        avatar: "images/avatars/SkyCore.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "RedPixel",
        score: 5.66,
        previousRank: 80,
        avatar: "images/avatars/RedPixel.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "BlueCore",
        score: 5.61,
        previousRank: 81,
        avatar: "images/avatars/BlueCore.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "VoidRush",
        score: 5.56,
        previousRank: 82,
        avatar: "images/avatars/VoidRush.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "PixelStorm",
        score: 5.51,
        previousRank: 83,
        avatar: "images/avatars/PixelStorm.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "NovaCore",
        score: 5.46,
        previousRank: 84,
        avatar: "images/avatars/NovaCore.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "DarkWave",
        score: 5.41,
        previousRank: 85,
        avatar: "images/avatars/DarkWave.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "LunarPixel",
        score: 5.36,
        previousRank: 86,
        avatar: "images/avatars/LunarPixel.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "EchoCore",
        score: 5.31,
        previousRank: 87,
        avatar: "images/avatars/EchoCore.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "StormCore",
        score: 5.26,
        previousRank: 88,
        avatar: "images/avatars/StormCore.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "NeonCore",
        score: 5.21,
        previousRank: 89,
        avatar: "images/avatars/NeonCore.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "RiftGD",
        score: 5.16,
        previousRank: 90,
        avatar: "images/avatars/RiftGD.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "AbyssGD",
        score: 5.11,
        previousRank: 91,
        avatar: "images/avatars/AbyssGD.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "QuantumCore",
        score: 5.06,
        previousRank: 92,
        avatar: "images/avatars/QuantumCore.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "FrostCore",
        score: 5.01,
        previousRank: 93,
        avatar: "images/avatars/FrostCore.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "ShadowGD",
        score: 4.96,
        previousRank: 94,
        avatar: "images/avatars/ShadowGD.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "NovaVoid",
        score: 4.91,
        previousRank: 95,
        avatar: "images/avatars/NovaVoid.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "CyberPulse",
        score: 4.86,
        previousRank: 96,
        avatar: "images/avatars/CyberPulse.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "DarkCore",
        score: 4.81,
        previousRank: 97,
        avatar: "images/avatars/DarkCore.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "GhostGD",
        score: 4.76,
        previousRank: 98,
        avatar: "images/avatars/GhostGD.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "FinalWave",
        score: 4.71,
        previousRank: 99,
        avatar: "images/avatars/FinalWave.png",
        creatorPoints: 1,
        ratedLevels: 2,
        featuredLevels: 1,
        epicLevels: 1,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    },

    {
        name: "LastCreator",
        score: 4.66,
        previousRank: 100,
        avatar: "images/avatars/LastCreator.png",
        creatorPoints: 1,
        ratedLevels: 1,
        featuredLevels: 0,
        epicLevels: 0,
        legendaryLevels: 0,
        mythicLevels: 0,
        bio: "Geometry Dash creator.",
        links: "",
        bestLevels: []
    }


// ========================================
// ELEMENTOS
// ========================================

const buttons = document.querySelectorAll(".nav-button");

const sections = document.querySelectorAll(".page-section");

const creatorList = document.getElementById("creator-list");

const searchInput = document.getElementById("creator-search-input");


// ========================================
// NAVEGACIÓN
// ========================================

function showSection(sectionId) {

    sections.forEach(function(section) {

        section.classList.remove("active");

    });


    const section = document.getElementById(sectionId);


    if (section) {

        section.classList.add("active");

    }

}


buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        showSection(button.dataset.section);

    });

});


// ========================================
// HOME → TOP 100
// ========================================

const homeButton = document.querySelector(".home-button");


if (homeButton) {

    homeButton.addEventListener("click", function() {

        showSection(homeButton.dataset.section);

    });

}


// ========================================
// MOVIMIENTO DEL RANKING
// ========================================

function calculateMovement(creator, currentRank) {

    if (creator.previousRank === undefined) {

        return "NEW";

    }


    const movement = creator.previousRank - currentRank;


    if (movement > 0) {

        return "▲ +" + movement;

    }


    if (movement < 0) {

        return "▼ " + Math.abs(movement);

    }


    return "—";

}


// ========================================
// RENDER TOP 100
// ========================================

function renderCreators(searchText = "") {

    creatorList.innerHTML = "";


    const sortedCreators = [...creators].sort(function(a, b) {

        return b.score - a.score;

    });


    sortedCreators.forEach(function(creator, index) {

        creator.rank = index + 1;

        creator.movementText =
            calculateMovement(
                creator,
                creator.rank
            );

    });


    const filteredCreators = sortedCreators.filter(function(creator) {

        return creator.name
            .toLowerCase()
            .includes(searchText.toLowerCase());

    });


    filteredCreators.forEach(function(creator) {

        const card = document.createElement("div");

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
                        ${creator.score.toFixed(2)}
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


        card.addEventListener("click", function() {

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


    let levelsHTML = "";


    if (creator.bestLevels && creator.bestLevels.length > 0) {

        levelsHTML = creator.bestLevels.map(function(level) {

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

    } else {

        levelsHTML = `

            <p style="
                color: var(--text-light);
                font-size: 13px;
            ">
                No rated levels have been added yet.
            </p>

        `;

    }


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
                    ${creator.score.toFixed(2)} CQL Score
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

                <strong>
                    ${creator.creatorPoints}
                </strong>

                <span>
                    Creator Points
                </span>

            </div>


            <div class="profile-stat">

                <strong>
                    ${creator.ratedLevels}
                </strong>

                <span>
                    Rated Levels
                </span>

            </div>


            <div class="profile-stat">

                <strong>
                    ${creator.featuredLevels}
                </strong>

                <span>
                    Featured
                </span>

            </div>


            <div class="profile-stat">

                <strong>
                    ${creator.epicLevels}
                </strong>

                <span>
                    Epic
                </span>

            </div>


            <div class="profile-stat">

                <strong>
                    ${creator.legendaryLevels}
                </strong>

                <span>
                    Legendary
                </span>

            </div>


            <div class="profile-stat">

                <strong>
                    ${creator.mythicLevels}
                </strong>

                <span>
                    Mythic
                </span>

            </div>


        </div>


        <div class="profile-section">

            <h3>
                About
            </h3>

            <p style="
                color: var(--text-soft);
                font-size: 13px;
            ">
                ${creator.bio || "No biography available."}
            </p>

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
// BOTÓN BACK
// ========================================

const backButton =
    document.getElementById("back-to-ranking");


if (backButton) {

    backButton.addEventListener("click", function() {

        showSection("top100");

    });

}


// ========================================
// SEARCH
// ========================================

if (searchInput) {

    searchInput.addEventListener("input", function() {

        renderCreators(searchInput.value);

    });

}


// ========================================
// EDIT PROFILE
// ========================================

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


    if (!editButton) return;


    editButton.addEventListener("click", function() {

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
        function() {

            const file =
                avatarInput.files[0];


            if (!file) return;


            const reader =
                new FileReader();


            reader.onload =
                function(event) {

                    avatarPreview.src =
                        event.target.result;

                };


            reader.readAsDataURL(file);

        }
    );


    saveButton.addEventListener(
        "click",
        function() {

            creator.name =
                nameInput.value.trim()
                || creator.name;


            creator.bio =
                bioInput.value.trim();


            creator.links =
                linksInput.value.trim();


            if (
                avatarPreview.src &&
                avatarPreview.src !==
                window.location.href
            ) {

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
