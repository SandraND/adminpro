import { NgModule } from '@angular/core';
import { UiModule } from '../ui/ui.module';

import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphs1Component } from './graphs1/graphs1.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphs1Component,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphs1Component,
    PagesComponent
  ],
  imports: [
    UiModule,
    PAGES_ROUTES
  ],
  providers: [],
  bootstrap: []
})

export class PagesModule {}
