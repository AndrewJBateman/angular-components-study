# :zap: Angular Tutorial App

* App to study differences between dumb (presentational and portable) components and smart components (that can have logic, trigger change detection and manage data/services).

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* This app uses the following Angular concepts: components, data & property binding etc.

## :camera: Screenshots

![Example screenshot](./img/list-angular-repos.png).

## :signal_strength: Technologies

* [Angular v8.0.0](https://angular.io/)
* [Angular CLI v8.0.1](https://cli.angular.io/)
* [RxJS Library v6.5.2](https://angular.io/guide/rx-library) used to handle datastreams and propagation of change using observables.
* [Angular Augury Chrome Extension](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd) v1.23.0 used for debugging.
* [Angular ChangeDetectionStrategy](https://angular.io/api/core/ChangeDetectionStrategy).

## :floppy_disk: Setup

* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## :computer: Code Examples

* _view-repos component that gets API repo data from github_

```typescript
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-repos',
  templateUrl: './view-repos.component.html',
  styleUrls: ['./view-repos.component.css']
})

//smart component - loads API data from the internet,
//the data from this ViewReposComponent is consumed by the 'app-repo-list'
//in the app-repository-view component.
export class ViewReposComponent implements OnInit {
  list: Observable<any[]>

  constructor(http: HttpClient) {
    const path = 'https://api.github.com/search/repositories?q=angular';
    this.list = http.get<{items: any[]}>(path)
      .pipe(
        map(data => data.items),
      );
  }

  ngOnInit() {
  }
}

```

## :cool: Features

* View list of Github repos using the keyword search 'angular in the url'.  

## :clipboard: Status & To-Do List

* Status: simple working app.
* To-Do: Document code and add functionality - such as a input field for url search item.

## :clap: Inspiration

* [Youtube video by 'Demos with Angular': The Difference Between Smart and Dumb Components](https://www.youtube.com/watch?v=r9vhfsnOb9o)

## :envelope: Contact

* Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
