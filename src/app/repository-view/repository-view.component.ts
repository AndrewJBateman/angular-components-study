import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

//template to show how component is rendered on the page.
//component will be notified when input repositories change.
@Component({
  selector: 'app-repository-view',
  templateUrl: './repository-view.component.html',
  styleUrls: ['./repository-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RepositoryViewComponent implements OnInit {
  @Input() repository: any;
  constructor() { }

  ngOnInit() {
  }

}
