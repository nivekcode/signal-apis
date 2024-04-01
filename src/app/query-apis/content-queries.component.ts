import {
  afterRender,
  ChangeDetectionStrategy,
  Component,
  contentChild,
  contentChildren, Directive,
  OnInit,
  viewChild,
  viewChildren
} from "@angular/core";
import {OutputComponent} from "../outputs/output.component";

@Directive({
  standalone: true,
  selector: '[myButton]'
})
export class ButtonDirective {

}

@Component({
  standalone: true,
  selector: 'app-content-queries',
  template: `
    <ng-content/>
`,
  imports: [
    OutputComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentQueriesComponent {
  button = contentChild.required(ButtonDirective);
  buttons = contentChildren(ButtonDirective);

  constructor(){
    afterRender(() => {
      console.log(this.button());
      console.log(this.buttons());
    })
  }

}
