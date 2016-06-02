"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var route_component_1 = require('../routes/component/route.component');
var route_state_1 = require('../routes/state/route.state');
var router_1 = require('@angular/router');
platform_browser_dynamic_1.bootstrap(route_component_1.RouteComponent, [
    router_1.ROUTER_PROVIDERS,
    route_state_1.RouteState
]);
//# sourceMappingURL=main.js.map