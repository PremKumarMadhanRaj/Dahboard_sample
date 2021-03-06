define(["require", "exports", "../../src/dashboard-layout/dashboard-layout"], function (require, exports, dashboard_layout_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ele;
    var portlet = new dashboard_layout_1.DashboardLayout({
        allowPushing: true,
        allowFloating: true,
        allowResizing: true,
        columns: 12,
        cellSpacing: [5, 5],
        change1: function(args) {
            // debugger;
             args.isHeightChange= true;
         },
         cellAspectRatio: 4,
        panels: [{ "sizeX": 1, "sizeY": 1, "row": 0, "col": 0, content: generateTemplate('0') },
            { "sizeX": 2, "sizeY": 2, "row": 0, "col": 1, content: generateTemplate('1') },
            { "sizeX": 1, "sizeY": 1, "row": 0, "col": 3, content: generateTemplate('2') },
            { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content: generateTemplate('3') },
            { "sizeX": 3, "sizeY": 1, "row": 0, "col": 5, content: generateTemplate('4') },
            { "sizeX": 1, "sizeY": 1, "row": 1, "col": 3, content: generateTemplate('5') },
            { "sizeX": 1, "sizeY": 2, "row": 1, "col": 0, content: generateTemplate('6') },
            { "sizeX": 2, "sizeY": 1, "row": 2, "col": 5, content: generateTemplate('7') },
            { "sizeX": 1, "sizeY": 1, "row": 2, "col": 7, content: generateTemplate('8') },
            { "sizeX": 1, "sizeY": 1, "row": 1, "col": 5, content: generateTemplate('9') },
            { "sizeX": 2, "sizeY": 1, "row": 1, "col": 6, content: generateTemplate('10') },
            { "sizeX": 1, "sizeY": 1, "row": 3, "col": 0, content: generateTemplate('11') },
            { "sizeX": 2, "sizeY": 1, "row": 2, "col": 2, content: generateTemplate('12') },
            { "sizeX": 4, "sizeY": 1, "row": 3, "col": 1, content: generateTemplate('13') },
            { "sizeX": 1, "sizeY": 1, "row": 2, "col": 1, content: generateTemplate('14') },
            { "sizeX": 3, "sizeY": 2, "row": 5, "col": 5, content: generateTemplate('15') },
            { "sizeX": 5, "sizeY": 1, "row": 5, "col": 0, content: generateTemplate('16') },
            { "sizeX": 1, "sizeY": 4, "row": 0, "col": 8, content: generateTemplate('17') },
            { "sizeX": 3, "sizeY": 3, "row": 0, "col": 9, content: generateTemplate('18') },
            { "sizeX": 2, "sizeY": 1, "row": 3, "col": 9, content: generateTemplate('19') },
            { "sizeX": 1, "sizeY": 2, "row": 3, "col": 11, content: generateTemplate('20') },
            { "sizeX": 3, "sizeY": 1, "row": 4, "col": 8, content: generateTemplate('21') },
        ]
    });
    portlet.appendTo('#portlet_default');
    function generateTemplate(content) {
        return '<div class="dialogContent"><span class="dialogText">' + content + '</span></div>';
    }
});
