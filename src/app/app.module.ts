import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { IdComponent } from './id/id.component';
import { FetchService } from './fetch.service';

const appRoutes: Routes = [
  { path: ':id', component: IdComponent },
  { path: ':id/admin', component: AdminComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    IdComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
