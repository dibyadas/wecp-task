import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { IdComponent } from './id/id.component';

const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: ':id', component: IdComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
