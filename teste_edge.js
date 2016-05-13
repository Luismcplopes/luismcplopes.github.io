/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['cabin-sketch, sans-serif']='<script src=\"http://use.edgefonts.net/cabin-sketch:n4,n7:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'mancha',
                display: 'block',
                type: 'image',
                rect: ['-2191px', '-1530px','4904px','3471px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mancha.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: '_3t',
                type: 'image',
                rect: ['-2275px', '-1596px','5112px','3618px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3t.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: '_2t',
                type: 'image',
                rect: ['-2182px', '-1531px','4904px','3471px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2t.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: '_1t',
                type: 'image',
                rect: ['-2005px', '-1376px','4490px','3178px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1t.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['234px', '262px','62px','29px','auto', 'auto'],
                text: "2016",
                font: ['cabin-sketch, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "800", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['157px', '222px','349px','45px','auto', 'auto'],
                text: "10 e 11 de Junho",
                align: "left",
                font: ['cabin-sketch, sans-serif', 24, "rgba(0,0,0,1.00)", "800", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['21.5%', '46.9%','367px','39px','auto', 'auto'],
                text: "Travessia da Serra De Sico",
                align: "left",
                font: ['cabin-sketch, sans-serif', 26, "rgba(255,255,255,1.00)", "800", "none", "normal"],
                transform: [[],['-4']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__1t}": [
                ["style", "top", '-1376px'],
                ["style", "height", '3178px'],
                ["style", "opacity", '0'],
                ["style", "left", '-2005px'],
                ["style", "width", '4490px']
            ],
            "${_mancha}": [
                ["style", "display", 'block'],
                ["style", "height", '3471px'],
                ["style", "opacity", '0'],
                ["style", "width", '4904px']
            ],
            "${_Text2}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '157px'],
                ["style", "font-size", '26px'],
                ["style", "top", '222px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '29px'],
                ["transform", "scaleX", '1'],
                ["style", "width", '215px']
            ],
            "${_mancha2}": [
                ["style", "left", '-3763px'],
                ["style", "top", '-2650px']
            ],
            "${_Text}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '234px'],
                ["style", "width", '62px'],
                ["style", "top", '262px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "font-size", '24px'],
                ["style", "font-weight", '800']
            ],
            "${_Text3}": [
                ["transform", "rotateZ", '-4deg'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '21.49%'],
                ["style", "width", '337px'],
                ["style", "top", '46.94%'],
                ["transform", "scaleY", '1'],
                ["style", "height", '29px'],
                ["transform", "scaleX", '1'],
                ["style", "font-size", '26px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '550px']
            ],
            "${__2t}": [
                ["style", "top", '-1531px'],
                ["style", "height", '3471px'],
                ["style", "opacity", '0'],
                ["style", "left", '-2182px'],
                ["style", "width", '4904px']
            ],
            "${__3t}": [
                ["style", "top", '-1596px'],
                ["style", "height", '3618px'],
                ["style", "opacity", '0'],
                ["style", "left", '-2275px'],
                ["style", "width", '5112px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3912,
            autoPlay: true,
            timeline: [
                { id: "eid39", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '0'}], position: 3350, duration: 0, easing: "easeInQuint" },
                { id: "eid38", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 3473, duration: 0, easing: "easeInQuint" },
                { id: "eid45", tween: [ "style", "${_Text2}", "height", '29px', { fromValue: '29px'}], position: 0, duration: 0, easing: "easeInQuint" },
                { id: "eid78", tween: [ "color", "${_Text3}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0, easing: "easeInQuint" },
                { id: "eid63", tween: [ "color", "${_Text3}", "color", 'rgba(7,7,7,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3346, duration: 0, easing: "easeInQuint" },
                { id: "eid12", tween: [ "style", "${_mancha}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 30, easing: "easeInQuint" },
                { id: "eid11", tween: [ "style", "${_mancha}", "opacity", '0', { fromValue: '1'}], position: 2614, duration: 890, easing: "easeInQuint" },
                { id: "eid70", tween: [ "style", "${_Text3}", "height", '29px', { fromValue: '29px'}], position: 3474, duration: 0, easing: "easeInQuint" },
                { id: "eid65", tween: [ "style", "${_Text3}", "left", '21.49%', { fromValue: '21.49%'}], position: 3347, duration: 0, easing: "easeInQuint" },
                { id: "eid72", tween: [ "style", "${_Text3}", "left", '16.36%', { fromValue: '21.49%'}], position: 3475, duration: 0, easing: "easeInQuint" },
                { id: "eid76", tween: [ "style", "${_Text3}", "width", '337px', { fromValue: '337px'}], position: 3475, duration: 0, easing: "easeInQuint" },
                { id: "eid80", tween: [ "transform", "${_Text3}", "scaleY", '1', { fromValue: '1'}], position: 1155, duration: 0, easing: "easeInQuint" },
                { id: "eid75", tween: [ "transform", "${_Text3}", "scaleY", '1.19', { fromValue: '1'}], position: 3799, duration: 0, easing: "easeInQuint" },
                { id: "eid4", tween: [ "style", "${_mancha}", "height", '3471px', { fromValue: '3471px'}], position: 118, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuint" },
                { id: "eid56", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 1154, duration: 0, easing: "easeInQuint" },
                { id: "eid62", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 3476, duration: 0, easing: "easeInQuint" },
                { id: "eid46", tween: [ "style", "${_Text2}", "width", '215px', { fromValue: '215px'}], position: 0, duration: 0, easing: "easeInQuint" },
                { id: "eid34", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '1'}], position: 1639, duration: 0, easing: "easeInQuint" },
                { id: "eid48", tween: [ "transform", "${_Text2}", "scaleY", '1', { fromValue: '1'}], position: 3647, duration: 0, easing: "easeInQuint" },
                { id: "eid53", tween: [ "transform", "${_Text2}", "scaleY", '1.35', { fromValue: '1'}], position: 3797, duration: 0, easing: "easeInQuint" },
                { id: "eid19", tween: [ "style", "${__2t}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuint" },
                { id: "eid24", tween: [ "style", "${__2t}", "opacity", '1', { fromValue: '0'}], position: 983, duration: 0, easing: "easeInQuint" },
                { id: "eid14", tween: [ "style", "${__2t}", "opacity", '1', { fromValue: '1'}], position: 2030, duration: 0, easing: "easeInQuint" },
                { id: "eid68", tween: [ "transform", "${_Text3}", "rotateZ", '-4deg', { fromValue: '-4deg'}], position: 3347, duration: 0, easing: "easeInQuint" },
                { id: "eid67", tween: [ "transform", "${_Text3}", "rotateZ", '0deg', { fromValue: '-4deg'}], position: 3475, duration: 0, easing: "easeInQuint" },
                { id: "eid50", tween: [ "transform", "${_Text2}", "scaleX", '1', { fromValue: '1'}], position: 3647, duration: 0, easing: "easeInQuint" },
                { id: "eid52", tween: [ "transform", "${_Text2}", "scaleX", '1.35', { fromValue: '1'}], position: 3797, duration: 0, easing: "easeInQuint" },
                { id: "eid5", tween: [ "style", "${_mancha}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid79", tween: [ "transform", "${_Text3}", "scaleX", '1', { fromValue: '1'}], position: 1155, duration: 0, easing: "easeInQuint" },
                { id: "eid74", tween: [ "transform", "${_Text3}", "scaleX", '1.19', { fromValue: '1'}], position: 3799, duration: 0, easing: "easeInQuint" },
                { id: "eid35", tween: [ "color", "${_Text}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 2541, duration: 0, easing: "easeInQuint" },
                { id: "eid36", tween: [ "color", "${_Text}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3345, duration: 0, easing: "easeInQuint" },
                { id: "eid37", tween: [ "color", "${_Text}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 3912, duration: 0, easing: "easeInQuint" },
                { id: "eid20", tween: [ "style", "${__3t}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuint" },
                { id: "eid25", tween: [ "style", "${__3t}", "opacity", '1', { fromValue: '0'}], position: 455, duration: 0, easing: "easeInQuint" },
                { id: "eid13", tween: [ "style", "${__3t}", "opacity", '1', { fromValue: '1'}], position: 2030, duration: 0, easing: "easeInQuint" },
                { id: "eid41", tween: [ "style", "${_Text}", "font-size", '24px', { fromValue: '24px'}], position: 3489, duration: 0, easing: "easeInQuint" },
                { id: "eid3", tween: [ "style", "${_mancha}", "width", '4904px', { fromValue: '4904px'}], position: 118, duration: 0 },
                { id: "eid51", tween: [ "transform", "${_Text}", "scaleX", '1', { fromValue: '1'}], position: 3647, duration: 0, easing: "easeInQuint" },
                { id: "eid54", tween: [ "transform", "${_Text}", "scaleX", '1.35', { fromValue: '1'}], position: 3798, duration: 0, easing: "easeInQuint" },
                { id: "eid66", tween: [ "style", "${_Text3}", "top", '46.94%', { fromValue: '46.94%'}], position: 3347, duration: 0, easing: "easeInQuint" },
                { id: "eid73", tween: [ "style", "${_Text3}", "top", '45.25%', { fromValue: '46.94%'}], position: 3476, duration: 0, easing: "easeInQuint" },
                { id: "eid18", tween: [ "style", "${__1t}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuint" },
                { id: "eid23", tween: [ "style", "${__1t}", "opacity", '1', { fromValue: '0'}], position: 762, duration: 0, easing: "easeInQuint" },
                { id: "eid15", tween: [ "style", "${__1t}", "opacity", '1', { fromValue: '1'}], position: 2030, duration: 0, easing: "easeInQuint" },
                { id: "eid49", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '1'}], position: 3647, duration: 0, easing: "easeInQuint" },
                { id: "eid55", tween: [ "transform", "${_Text}", "scaleY", '1.35', { fromValue: '1'}], position: 3798, duration: 0, easing: "easeInQuint" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-12190429");
