import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_BINDINGS} from 'angular2/http';

import {AppComponent} from './app.component';

import 'rxjs/add/operator/map';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_BINDINGS
]);