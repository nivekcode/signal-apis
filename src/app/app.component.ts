import {afterNextRender, afterRender, Component, signal, viewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {InputsComponent} from "./inputs/inputs.component";
import {ModelComponent} from "./model/model.component";
import {OutputComponent} from "./outputs/output.component";
import {ViewQueriesComponent} from "./query-apis/view-queries.component";
import {ButtonDirective, ContentQueriesComponent} from "./query-apis/content-queries.component";
import {AppLifeCycleHooks} from "./life-cycle-hooks/life-cycle-hooks.component";
import {PhotoCardComponent} from "./demo/photo-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputsComponent, ModelComponent, OutputComponent, ViewQueriesComponent, ContentQueriesComponent, ButtonDirective, AppLifeCycleHooks, PhotoCardComponent],
  template: `
      <photo-card [(liked)]="liked"
                  imageUrl="https://elevation.alpsinsight.com/wp-content/uploads/2018/01/16EN0414.jpg"/>
      <div class="container">
          <span>Liked: {{ liked() }}</span>
          <button class="button" (click)="focus()">Focus card</button>
      </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  photoCard = viewChild.required(PhotoCardComponent);
  liked = signal(false);

  focus() {
    this.photoCard().focus();
  }

}
