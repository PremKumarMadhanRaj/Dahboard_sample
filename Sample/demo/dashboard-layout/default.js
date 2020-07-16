define(["require", "exports", "../../src/dashboard-layout/dashboard-layout"], function (require, exports, dashboard_layout_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var portlet = new dashboard_layout_1.DashboardLayout({
        columns: 10,
        allowDragging: true,
        showGridLines: true,
        allowFloating: false,
        change1: function(args) {
           // debugger;
            args.isHeightChange= true;
        },
        cellAspectRatio: 2,
        panels: [{ "sizeX": 1, "sizeY": 1, "row": 0, "col": 0, content: "<div>1</div>" },
            { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content: "<div>2</div>" },
            { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content: "<div>3</div>" },
            { "sizeX": 1, "sizeY": 1, "row": 1, "col": 0, content: "<div>4</div>" },
            { "sizeX": 2, "sizeY": 1, "row": 2, "col": 0, content: "<div>5</div>" },
            { "sizeX": 1, "sizeY": 1, "row": 2, "col": 2, content: "<div>6</div>" },
            { "sizeX": 1, "sizeY": 1, "row": 2, "col": 3, content: "<div>7</div>" },
            { "sizeX": 4, "sizeY": 1, "row": 3, "col": 0, content: "<div>8</div>" }
        ]
    });
    portlet.appendTo('#portlet_default');
});
