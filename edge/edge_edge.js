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
                            display: 'block',
                            type: 'rect',
                            rect: ['111px', '10px', '800px', '450px', 'auto', 'auto'],
                            fill: ["rgba(255,225,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['90'],[],['4.4','4.4']]
                        },
                        {
                            id: 'TriMotion',
                            symbolName: 'TriMotion',
                            type: 'rect',
                            rect: ['-46px', '-24px', '802', '451', 'auto', 'auto'],
                            opacity: '0.34285714285714',
                            transform: [[],[],[],['0.88704','0.88704']]
                        },
                        {
                            id: 'Text3',
                            display: 'none',
                            type: 'text',
                            rect: ['224px', '203px', 'auto', 'auto', 'auto', 'auto'],
                            text: "What is this?",
                            align: "left",
                            font: ['\'Lucida Console\', Monaco, monospace', [43, "px"], "rgba(255,255,255,1)", "700", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'btnPlay',
                            display: 'block',
                            type: 'text',
                            rect: ['68px', '189px', '175px', '52px', 'auto', 'auto'],
                            text: "PLAY",
                            align: "center",
                            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "700", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'bgm',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"bgm.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'Text',
                            display: 'none',
                            type: 'text',
                            rect: ['266px', '293px', '268px', '32px', 'auto', 'auto'],
                            text: "SMART SYNC SYSTEM",
                            align: "center",
                            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif', [18, "px"], "rgba(0,168,156,0.99)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'logo_bg_only',
                            display: 'none',
                            type: 'image',
                            rect: ['264px', '89px', '272px', '272px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo_bg_only.svg",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'logo_only',
                            display: 'none',
                            type: 'image',
                            rect: ['264px', '89px', '272px', '272px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo_only.svg",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'Rectangle3',
                            display: 'block',
                            type: 'rect',
                            rect: ['908px', '77px', '160px', '299px', 'auto', 'auto'],
                            fill: ["rgba(0,169,157,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'phone',
                            symbolName: 'phone',
                            type: 'rect',
                            rect: ['899px', '55px', '176', '341', 'auto', 'auto'],
                            transform: [[],['90'],[],['4.7','4.7']]
                        },
                        {
                            id: 'Text4',
                            display: 'none',
                            type: 'text',
                            rect: ['290px', '131px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Can control colors of <br>smart phone's monitor <br>in real time!",
                            align: "left",
                            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif', [38, "px"], "rgba(0,168,156,0.99)", "700", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "48px", ""]
                        },
                        {
                            id: 'logo_only2',
                            display: 'block',
                            type: 'image',
                            rect: ['940px', '176px', '97px', '97px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo_only.svg",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            display: 'none',
                            type: 'text',
                            rect: ['121px', '191px', '580px', '235px', 'auto', 'auto'],
                            text: "and also can control<br>LED Light with DMX512",
                            align: "left",
                            font: ['Lucida Console, Monaco, monospace', [43, "px"], "rgba(255,255,255,1.00)", "700", "none solid rgba(0, 168, 156, 0.992157)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "58px", ""]
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
                    duration: 63143.625,
                    autoPlay: false,
                    labels: {
                        "ラベル 1": 0
                    },
                    data: [
                        [
                            "eid115",
                            "left",
                            12750,
                            498,
                            "linear",
                            "${Text3}",
                            '224px',
                            '-576px'
                        ],
                        [
                            "eid123",
                            "display",
                            27530,
                            0,
                            "linear",
                            "${logo_only2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid74",
                            "left",
                            12750,
                            498,
                            "linear",
                            "${Rectangle3}",
                            '908px',
                            '108px'
                        ],
                        [
                            "eid66",
                            "left",
                            11000,
                            441,
                            "linear",
                            "${logo_bg_only}",
                            '264px',
                            '-536px'
                        ],
                        [
                            "eid65",
                            "left",
                            11000,
                            441,
                            "linear",
                            "${Text}",
                            '266px',
                            '-534px'
                        ],
                        [
                            "eid116",
                            "display",
                            13248,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid128",
                            "display",
                            27530,
                            0,
                            "linear",
                            "${Text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid64",
                            "left",
                            11000,
                            441,
                            "linear",
                            "${logo_only}",
                            '264px',
                            '-536px'
                        ],
                        [
                            "eid101",
                            "scaleX",
                            27530,
                            1000,
                            "linear",
                            "${phone}",
                            '1',
                            '4.7'
                        ],
                        [
                            "eid465",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${TriMotion}",
                            '0.88704',
                            '0.88704'
                        ],
                        [
                            "eid50",
                            "scaleY",
                            7450,
                            0,
                            "linear",
                            "${logo_only}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid24",
                            "display",
                            1,
                            0,
                            "linear",
                            "${btnPlay}",
                            'block',
                            'none'
                        ],
                        [
                            "eid118",
                            "color",
                            13248,
                            0,
                            "linear",
                            "${Text4}",
                            'rgba(0,168,156,0.9922)',
                            'rgba(0,168,156,0.9922)'
                        ],
                        [
                            "eid126",
                            "color",
                            14654,
                            0,
                            "linear",
                            "${Text4}",
                            'rgba(0,168,156,0.9922)',
                            'rgba(252,112,0,0.99)'
                        ],
                        [
                            "eid127",
                            "color",
                            22000,
                            0,
                            "linear",
                            "${Text4}",
                            'rgba(252,112,0,0.99)',
                            'rgba(68,0,252,0.99)'
                        ],
                        [
                            "eid51",
                            "display",
                            7186,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid41",
                            "scaleY",
                            7186,
                            0,
                            "linear",
                            "${monitor}",
                            '1',
                            '1'
                        ],
                        [
                            "eid80",
                            "scaleY",
                            13248,
                            0,
                            "linear",
                            "${monitor}",
                            '1',
                            '1'
                        ],
                        [
                            "eid105",
                            "scaleY",
                            27530,
                            1000,
                            "linear",
                            "${monitor}",
                            '1',
                            '4.4'
                        ],
                        [
                            "eid467",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TriMotion}",
                            '-24px',
                            '-24px'
                        ],
                        [
                            "eid466",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TriMotion}",
                            '-46px',
                            '-46px'
                        ],
                        [
                            "eid27",
                            "color",
                            0,
                            0,
                            "linear",
                            "${btnPlay}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid72",
                            "left",
                            12750,
                            498,
                            "linear",
                            "${phone}",
                            '899px',
                            '100px'
                        ],
                        [
                            "eid88",
                            "left",
                            27530,
                            0,
                            "linear",
                            "${phone}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid29",
                            "top",
                            0,
                            0,
                            "linear",
                            "${monitor}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid82",
                            "top",
                            13248,
                            61,
                            "linear",
                            "${monitor}",
                            '0px',
                            '63px'
                        ],
                        [
                            "eid247",
                            "top",
                            27530,
                            8382,
                            "linear",
                            "${monitor}",
                            '63px',
                            '10px'
                        ],
                        [
                            "eid107",
                            "rotateZ",
                            27530,
                            1000,
                            "linear",
                            "${Text2}",
                            '-90deg',
                            '0deg'
                        ],
                        [
                            "eid102",
                            "scaleY",
                            27530,
                            1000,
                            "linear",
                            "${phone}",
                            '1',
                            '4.7'
                        ],
                        [
                            "eid32",
                            "height",
                            0,
                            0,
                            "linear",
                            "${monitor}",
                            '450px',
                            '450px'
                        ],
                        [
                            "eid84",
                            "height",
                            13248,
                            61,
                            "linear",
                            "${monitor}",
                            '450px',
                            '313px'
                        ],
                        [
                            "eid93",
                            "height",
                            27530,
                            0,
                            "linear",
                            "${monitor}",
                            '313px',
                            '313px'
                        ],
                        [
                            "eid122",
                            "left",
                            12750,
                            498,
                            "linear",
                            "${logo_only2}",
                            '940px',
                            '140px'
                        ],
                        [
                            "eid464",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${TriMotion}",
                            '0.88704',
                            '0.88704'
                        ],
                        [
                            "eid49",
                            "scaleX",
                            7450,
                            0,
                            "linear",
                            "${logo_only}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid56",
                            "left",
                            7186,
                            264,
                            "linear",
                            "${monitor}",
                            '0px',
                            '800px'
                        ],
                        [
                            "eid67",
                            "left",
                            11000,
                            441,
                            "linear",
                            "${monitor}",
                            '800px',
                            '0px'
                        ],
                        [
                            "eid68",
                            "left",
                            12750,
                            498,
                            "linear",
                            "${monitor}",
                            '0px',
                            '-800px'
                        ],
                        [
                            "eid81",
                            "left",
                            13248,
                            61,
                            "linear",
                            "${monitor}",
                            '-800px',
                            '100px'
                        ],
                        [
                            "eid248",
                            "left",
                            27530,
                            8382,
                            "linear",
                            "${monitor}",
                            '100px',
                            '111px'
                        ],
                        [
                            "eid103",
                            "rotateZ",
                            27530,
                            1000,
                            "linear",
                            "${monitor}",
                            '0deg',
                            '90deg'
                        ],
                        [
                            "eid48",
                            "scaleY",
                            7186,
                            264,
                            "linear",
                            "${logo_bg_only}",
                            '4.18',
                            '0.5'
                        ],
                        [
                            "eid470",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TriMotion}",
                            '0.34285714285714',
                            '0.34285714285714'
                        ],
                        [
                            "eid112",
                            "display",
                            11441,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid243",
                            "display",
                            11608,
                            0,
                            "linear",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid244",
                            "display",
                            11750,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid245",
                            "display",
                            11916,
                            0,
                            "linear",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid246",
                            "display",
                            12079,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid85",
                            "display",
                            13309,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid47",
                            "scaleX",
                            7186,
                            264,
                            "linear",
                            "${logo_bg_only}",
                            '4.18',
                            '0.5'
                        ],
                        [
                            "eid40",
                            "scaleX",
                            7186,
                            0,
                            "linear",
                            "${monitor}",
                            '1',
                            '1'
                        ],
                        [
                            "eid124",
                            "scaleX",
                            13248,
                            9002,
                            "linear",
                            "${monitor}",
                            '1',
                            '0.98'
                        ],
                        [
                            "eid125",
                            "scaleX",
                            22250,
                            5280,
                            "linear",
                            "${monitor}",
                            '0.98',
                            '1'
                        ],
                        [
                            "eid104",
                            "scaleX",
                            27530,
                            1000,
                            "linear",
                            "${monitor}",
                            '1',
                            '4.4'
                        ],
                        [
                            "eid35",
                            "display",
                            7186,
                            0,
                            "linear",
                            "${logo_bg_only}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "display",
                            7186,
                            0,
                            "linear",
                            "${monitor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            7450,
                            0,
                            "linear",
                            "${monitor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid86",
                            "display",
                            13248,
                            0,
                            "linear",
                            "${monitor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid87",
                            "display",
                            13309,
                            0,
                            "linear",
                            "${monitor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid33",
                            "width",
                            0,
                            0,
                            "linear",
                            "${monitor}",
                            '800px',
                            '800px'
                        ],
                        [
                            "eid83",
                            "width",
                            13248,
                            61,
                            "linear",
                            "${monitor}",
                            '800px',
                            '176px'
                        ],
                        [
                            "eid92",
                            "width",
                            27530,
                            0,
                            "linear",
                            "${monitor}",
                            '176px',
                            '176px'
                        ],
                        [
                            "eid99",
                            "rotateZ",
                            27530,
                            1000,
                            "linear",
                            "${phone}",
                            '0deg',
                            '90deg'
                        ],
                        [
                            "eid2",
                            "background-color",
                            0,
                            7186,
                            "linear",
                            "${monitor}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,169,157,1.00)'
                        ],
                        [
                            "eid18",
                            "background-color",
                            14654,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,169,157,1.00)',
                            'rgba(255,115,0,1.00)'
                        ],
                        [
                            "eid19",
                            "background-color",
                            22000,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,115,0,1.00)',
                            'rgba(68,0,255,1)'
                        ],
                        [
                            "eid20",
                            "background-color",
                            27530,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(68,0,255,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid22",
                            "background-color",
                            29546,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,0,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid225",
                            "background-color",
                            30451,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid229",
                            "background-color",
                            31379,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,225,0,1.00)'
                        ],
                        [
                            "eid230",
                            "background-color",
                            32284,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,225,0,1.00)',
                            'rgba(255,0,242,1.00)'
                        ],
                        [
                            "eid231",
                            "background-color",
                            33174,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,242,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid232",
                            "background-color",
                            34079,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid233",
                            "background-color",
                            35007,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,225,0,1.00)'
                        ],
                        [
                            "eid234",
                            "background-color",
                            35912,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,225,0,1.00)',
                            'rgba(255,0,242,1.00)'
                        ],
                        [
                            "eid235",
                            "background-color",
                            36750,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,242,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid236",
                            "background-color",
                            37655,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid237",
                            "background-color",
                            38583,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,225,0,1.00)'
                        ],
                        [
                            "eid238",
                            "background-color",
                            39488,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,225,0,1.00)',
                            'rgba(255,0,242,1.00)'
                        ],
                        [
                            "eid239",
                            "background-color",
                            40500,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,242,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid240",
                            "background-color",
                            41405,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid241",
                            "background-color",
                            42333,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,225,0,1.00)'
                        ],
                        [
                            "eid242",
                            "background-color",
                            43238,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,225,0,1.00)',
                            'rgba(255,0,242,1.00)'
                        ],
                        [
                            "eid193",
                            "background-color",
                            44312,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,242,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid194",
                            "background-color",
                            44766,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid195",
                            "background-color",
                            45217,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,228,0,1.00)'
                        ],
                        [
                            "eid196",
                            "background-color",
                            45688,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,228,0,1.00)',
                            'rgba(255,0,241,1.00)'
                        ],
                        [
                            "eid197",
                            "background-color",
                            46145,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,241,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid198",
                            "background-color",
                            46599,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid199",
                            "background-color",
                            47050,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,228,0,1.00)'
                        ],
                        [
                            "eid200",
                            "background-color",
                            47521,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,228,0,1.00)',
                            'rgba(255,0,241,1.00)'
                        ],
                        [
                            "eid201",
                            "background-color",
                            48006,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,241,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid202",
                            "background-color",
                            48460,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid203",
                            "background-color",
                            48911,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,228,0,1.00)'
                        ],
                        [
                            "eid204",
                            "background-color",
                            49382,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,228,0,1.00)',
                            'rgba(255,0,241,1.00)'
                        ],
                        [
                            "eid205",
                            "background-color",
                            49797,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,241,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid206",
                            "background-color",
                            50250,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid207",
                            "background-color",
                            50701,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,228,0,1.00)'
                        ],
                        [
                            "eid208",
                            "background-color",
                            51172,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,228,0,1.00)',
                            'rgba(255,0,241,1.00)'
                        ],
                        [
                            "eid209",
                            "background-color",
                            51766,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,241,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid210",
                            "background-color",
                            52220,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid211",
                            "background-color",
                            52671,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,228,0,1.00)'
                        ],
                        [
                            "eid212",
                            "background-color",
                            53142,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,228,0,1.00)',
                            'rgba(255,0,241,1.00)'
                        ],
                        [
                            "eid213",
                            "background-color",
                            53599,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,241,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid214",
                            "background-color",
                            54053,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid215",
                            "background-color",
                            54504,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,228,0,1.00)'
                        ],
                        [
                            "eid216",
                            "background-color",
                            54975,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,228,0,1.00)',
                            'rgba(255,0,241,1.00)'
                        ],
                        [
                            "eid217",
                            "background-color",
                            55460,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,241,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid218",
                            "background-color",
                            55914,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid219",
                            "background-color",
                            56365,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,228,0,1.00)'
                        ],
                        [
                            "eid220",
                            "background-color",
                            56836,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,228,0,1.00)',
                            'rgba(255,0,241,1.00)'
                        ],
                        [
                            "eid221",
                            "background-color",
                            57250,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,0,241,1.00)',
                            'rgba(0,222,255,1.00)'
                        ],
                        [
                            "eid222",
                            "background-color",
                            57704,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(0,222,255,1.00)',
                            'rgba(72,255,0,1.00)'
                        ],
                        [
                            "eid223",
                            "background-color",
                            58155,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(72,255,0,1.00)',
                            'rgba(255,228,0,1.00)'
                        ],
                        [
                            "eid224",
                            "background-color",
                            58626,
                            0,
                            "linear",
                            "${monitor}",
                            'rgba(255,228,0,1.00)',
                            'rgba(255,0,241,1.00)'
                        ],
                        [
                            "eid36",
                            "display",
                            6569,
                            0,
                            "linear",
                            "${logo_only}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "display",
                            6750,
                            0,
                            "linear",
                            "${logo_only}",
                            'block',
                            'none'
                        ],
                        [
                            "eid38",
                            "display",
                            6857,
                            0,
                            "linear",
                            "${logo_only}",
                            'none',
                            'block'
                        ],
                        [
                            "eid39",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${logo_only}",
                            'block',
                            'none'
                        ],
                        [
                            "eid34",
                            "display",
                            7186,
                            0,
                            "linear",
                            "${logo_only}",
                            'none',
                            'block'
                        ],
                        [
                            "eid109",
                            "display",
                            28530,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid110",
                            "display",
                            28780,
                            0,
                            "linear",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid111",
                            "display",
                            29030,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid70",
                            "top",
                            13248,
                            0,
                            "linear",
                            "${phone}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid89",
                            "top",
                            27530,
                            0,
                            "linear",
                            "${phone}",
                            '55px',
                            '55px'
                        ],
                            [ "eid11", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${bgm}', [] ] ],
                            [ "eid468", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${TriMotion}', [] ] ]
                    ]
                }
            },
            "phone": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '152px', '317px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [12, 'rgb(0, 0, 0)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,169,157,0.00)']
                        },
                        {
                            rect: ['10px', '300px', '161px', '32px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['10px', '8px', '161px', '32px', 'auto', 'auto'],
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '176px', '341px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "triangle": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'triangle',
                            type: 'image',
                            rect: ['0px', '0px', '169px', '169px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/triangle.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '169px', '169px']
                        }
                    }
                },
                timeline: {
                    duration: 1846,
                    autoPlay: false,
                    data: [
                        [
                            "eid251",
                            "rotateZ",
                            673,
                            250,
                            "linear",
                            "${triangle}",
                            '0deg',
                            '60deg'
                        ],
                        [
                            "eid255",
                            "rotateZ",
                            1596,
                            250,
                            "linear",
                            "${triangle}",
                            '60deg',
                            '120deg'
                        ]
                    ]
                }
            },
            "TriMotion": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['2px', '1px', '800px', '450px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            id: 'TriMotion1Row',
                            symbolName: 'TriMotion1Row',
                            rect: ['-132', '0px', '1194', '169', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'TriMotion1RowCopy2',
                            symbolName: 'TriMotion1Row',
                            rect: ['-132', '253px', '1194', '169', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'TriMotion1RowCopy3',
                            symbolName: 'TriMotion1Row',
                            rect: ['-204px', '379px', '1194', '169', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'TriMotion1RowCopy',
                            symbolName: 'TriMotion1Row',
                            rect: ['-57px', '126px', '1194', '169', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'TriMotion1RowCopy4',
                            symbolName: 'TriMotion1Row',
                            rect: ['-57px', '-126px', '1194', '169', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '802px', '451px']
                        }
                    }
                },
                timeline: {
                    duration: 1848,
                    autoPlay: false,
                    data: [
                        [
                            "eid461",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TriMotion1RowCopy3}",
                            '379px',
                            '379px'
                        ],
                        [
                            "eid462",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid480",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TriMotion1RowCopy4}",
                            '-126px',
                            '-126px'
                        ],
                        [
                            "eid459",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TriMotion1RowCopy2}",
                            '253px',
                            '253px'
                        ],
                        [
                            "eid478",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TriMotion1RowCopy4}",
                            '-57px',
                            '-57px'
                        ],
                        [
                            "eid476",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TriMotion1RowCopy3}",
                            '-204px',
                            '-204px'
                        ],
                        [
                            "eid456",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TriMotion1RowCopy}",
                            '126px',
                            '126px'
                        ],
                        [
                            "eid475",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TriMotion1RowCopy}",
                            '-57px',
                            '-57px'
                        ],
                            [ "eid482", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${TriMotion1Row}', [] ] ],
                            [ "eid483", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${TriMotion1RowCopy4}', [] ] ],
                            [ "eid484", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${TriMotion1RowCopy}', [] ] ],
                            [ "eid485", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${TriMotion1RowCopy3}', [] ] ],
                            [ "eid486", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${TriMotion1RowCopy2}', [] ] ],
                            [ "eid481", "trigger", 1, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${TriMotion1RowCopy4}', [] ] ],
                            [ "eid472", "trigger", 1, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${TriMotion1RowCopy2}', [] ] ],
                            [ "eid474", "trigger", 1, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${TriMotion1Row}', [] ] ],
                            [ "eid473", "trigger", 1, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${TriMotion1RowCopy3}', [] ] ],
                            [ "eid471", "trigger", 1, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${TriMotion1RowCopy}', [] ] ]
                    ]
                }
            },
            "TriMotion1Row": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'triangle2',
                            symbolName: 'triangle',
                            userClass: 'tri',
                            rect: ['0px', '0px', '169', '169', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'triangle2Copy15',
                            symbolName: 'triangle',
                            userClass: 'tri',
                            rect: ['177px', '0px', '169', '169', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'triangle2Copy17',
                            symbolName: 'triangle',
                            userClass: 'tri',
                            rect: ['292px', '0px', '169', '169', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'triangle2Copy16',
                            symbolName: 'triangle',
                            userClass: 'tri',
                            rect: ['438px', '0px', '169', '169', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'triangle2Copy19',
                            symbolName: 'triangle',
                            userClass: 'tri',
                            rect: ['584px', '0px', '169', '169', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'triangle2Copy18',
                            symbolName: 'triangle',
                            userClass: 'tri',
                            rect: ['730px', '0px', '169', '169', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'triangle2Copy21',
                            symbolName: 'triangle',
                            userClass: 'tri',
                            rect: ['923px', '0px', '169', '169', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'triangle2Copy20',
                            symbolName: 'triangle',
                            userClass: 'tri',
                            rect: ['1069px', '0px', '169', '169', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1194px', '169px']
                        }
                    }
                },
                timeline: {
                    duration: 1847,
                    autoPlay: false,
                    data: [
                        [
                            "eid317",
                            "left",
                            1847,
                            0,
                            "linear",
                            "${triangle2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid436",
                            "left",
                            0,
                            0,
                            "linear",
                            "${triangle2Copy20}",
                            '1025px',
                            '1025px'
                        ],
                        [
                            "eid438",
                            "left",
                            0,
                            0,
                            "linear",
                            "${triangle2Copy21}",
                            '879px',
                            '879px'
                        ],
                        [
                            "eid428",
                            "left",
                            0,
                            0,
                            "linear",
                            "${triangle2Copy19}",
                            '586px',
                            '586px'
                        ],
                        [
                            "eid426",
                            "left",
                            0,
                            0,
                            "linear",
                            "${triangle2Copy18}",
                            '732px',
                            '732px'
                        ],
                        [
                            "eid411",
                            "left",
                            0,
                            0,
                            "linear",
                            "${triangle2Copy15}",
                            '146px',
                            '146px'
                        ],
                            [ "eid445", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${triangle2Copy15}', [] ] ],
                            [ "eid446", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${triangle2Copy20}', [] ] ],
                            [ "eid442", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${triangle2Copy18}', [] ] ],
                            [ "eid256", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${triangle2}', [] ] ],
                            [ "eid441", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${triangle2Copy21}', [] ] ],
                            [ "eid444", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${triangle2Copy19}', [] ] ],
                            [ "eid443", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${triangle2Copy16}', [] ] ],
                            [ "eid447", "trigger", 1, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${triangle2Copy20}', [] ] ],
                            [ "eid257", "trigger", 1, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${triangle2}', [] ] ],
                            [ "eid453", "trigger", 1, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${triangle2Copy21}', [] ] ],
                            [ "eid451", "trigger", 1, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${triangle2Copy18}', [] ] ],
                            [ "eid450", "trigger", 1, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${triangle2Copy16}', [] ] ],
                            [ "eid448", "trigger", 1, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${triangle2Copy19}', [] ] ],
                            [ "eid452", "trigger", 1, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${triangle2Copy15}', [] ] ],
                            [ "eid469", "trigger", 1, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${triangle2Copy17}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("edge_edgeActions.js");
})("EDGE-28183762");
