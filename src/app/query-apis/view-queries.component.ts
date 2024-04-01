import {ChangeDetectionStrategy, Component, OnInit, viewChild, viewChildren} from "@angular/core";
import {OutputComponent} from "../outputs/output.component";

@Component({
standalone: true,
selector: 'app-view-queries',
template: `
    @if(renderIt){
    <div #el>My element</div>
    }

    <p #par>First paragraph</p>
    <p #par>Second paragraph</p>

    <ng-template #tpl>My template</ng-template>
    <app-output/>
`,
imports: [
  OutputComponent
],
changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewQueriesComponent implements OnInit {
renderIt = true;

divEl = viewChild.required<HTMLDivElement>('el');
paragraphs = viewChildren('par');

constructor() {
}

ngOnInit(): void {
  console.log(this.paragraphs());
  }

}
