import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-repository-view',
  templateUrl: './repository-view.component.html',
  styleUrls: ['./repository-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoryViewComponent implements OnInit {
  @Input() repository;
  constructor() { }

  ngOnInit() {
  }

}
