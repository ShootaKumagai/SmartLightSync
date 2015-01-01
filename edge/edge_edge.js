/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'monitor',
                            type: 'rect',
                            rect: ['338px', '84px', '154px', '296px', 'auto', 'auto'],
                            fill: ["rgba(0,255,50,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'iphone_moc',
                            type: 'image',
                            rect: ['327px', '44px', '174px', '363px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"iphone_moc.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['67px', '189px', '175px', '52px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btnPlay',
                            type: 'text',
                            rect: ['68px', '189px', '175px', '52px', 'auto', 'auto'],
                            text: "PLAY",
                            align: "center",
                            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "700", "none", "", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800px', '450px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 3076,
                    autoPlay: false,
                    labels: {
                        "ラベル 1": 0
                    },
                    data: [
                        [
                            "eid2",
                            "background-color",
                            0,
                            2973,
                            "linear",
                            "${monitor}",
                            'rgba(0,196,255,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid9",
                            "background-color",
                            3076,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,0,1.00)',
                            'rgba(0,255,50,1.00)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("edge_edgeActions.js");
})("EDGE-28183762");
