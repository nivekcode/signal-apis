import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {InputsComponent} from "./inputs/inputs.component";
import {ModelComponent} from "./model/model.component";
import {OutputComponent} from "./outputs/output.component";
import {ViewQueriesComponent} from "./query-apis/view-queries.component";
import {ButtonDirective, ContentQueriesComponent} from "./query-apis/content-queries.component";
import {AppLifeCycleHooks} from "./life-cycle-hooks/life-cycle-hooks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputsComponent, ModelComponent, OutputComponent, ViewQueriesComponent, ContentQueriesComponent, ButtonDirective, AppLifeCycleHooks],
  template: `
      <app-life-cycle-hooks/>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  checked = signal(true);

  handleClick() {
    console.log('clicked')
  }
}
