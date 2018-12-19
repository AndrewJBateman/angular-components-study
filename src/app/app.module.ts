import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { ViewReposComponent } from './view-repos/view-repos.component';
import { RepositoryViewComponent } from './repository-view/repository-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    ViewReposComponent,
    RepositoryViewComponent
  ],
  //HttpClientModule configures the dependency injector for HttpClient with 
  //supporting services for XSRF (Cross Site Request Forgery).
  //Provider HttpClient; { provide: HttpHandler, useClass: HttpInterceptingHandler }
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
