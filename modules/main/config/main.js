"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var route_component_1 = require('../routes/component/route.component');
var game_component_1 = require('../game/component/game.component');
var router_1 = require('@angular/router');
platform_browser_dynamic_1.bootstrap(route_component_1.RouteComponent, [
    router_1.ROUTER_PROVIDERS,
    game_component_1.GameComponent
]);
//# sourceMappingURL=main.js.map