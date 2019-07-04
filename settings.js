// UTF-8
var settings = {
    "version": "0.11-alfa",
    "debug": false,
    "defaultCamera": "perspective", // orthogonal | perspective
    "tools": {
        "active": true // Stänger av verktygen i gränssnittet.  Kan även sättas i URL-parameter toolsDisable 1 = avaktiveras | 0 = aktiv. URL-parameter prioriteras.
    },
    "model": {
        "name": "Demodata",
        "totalDelayTime": 1000, // I millisekunder (modell laddar inte snabbare än följande tid)
        "obj": {
            "objFolderPath": "model/ikonbyggnader/citadellbadet/",
            "mtlFolderPath": "model/ikonbyggnader/citadellbadet/",
            "objFilePath": "sammanslagen.obj",
            "mtlFilePath": "materials.mtl"
            // "objFolderPath": "model/demodata/",
            // "mtlFolderPath": "model/demodata/",
            // "objFilePath": "test-demodata.obj",
            // "mtlFilePath": "test-demodata.mtl"
        },
        // Manuell positionerin EJ implementerad för kamera i perspektiv
        "position": {
            "x": "",
            "y": "",
            "z": ""
        },
        "rotation": {
            "x": "-90",
            "y": "",
            "z": ""
        }
    },
    "view": {
        // enableExtent = false EJ implementerad
        "enableExtent": true, // Ser till så att modell hamnar i fokus i fönstret. Delar av cameraInitial slås då ut.
        "autoRotate": false, // Kan även sättas i motsvarande URL-parameter 1 = true | 0 = false. URL-parameter prioriteras.
        "autoRotateSpeed": 1, // Roteringshastighet runt modell. Kan även sättas i motsvarande URL-parameter. 1 (standard) motsvarar en 60 s runda runt modellen i 60 fps. URL-parameter prioriteras.
        "defaultSize": { // Möjlighet att ge standardhöjd då bredd och höjd ej kan erhållas automatiskt
            "width": 300,
            "height": 150
        },
        "cameraInitial": {
            "fieldOfView": 45,
            "zoom": "", // Faktor. Sätts inget värde används 1
            "position": {
                "x": 0,
                "y": 100,
                "z": 50
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "near": 1,
            "far": 1000,
            "frustumSize": 300,
            "offsetFactor": 1.25
        }
    }
}