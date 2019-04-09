import { Component, OnInit, Input, Output, ChangeDetectionStrategy } from '@angular/core';

// lists all items from the list - see repository-view.ts for list components (h1 and p)
@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepoListComponent implements OnInit {
  @Input() list: any[];

  constructor() { }

  ngOnInit() {
  }

}
