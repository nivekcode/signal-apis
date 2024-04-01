import {booleanAttribute, ChangeDetectionStrategy, Component, input} from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-inputs',
  template: `
      @if (showNames()) {
          <h1>{{ firstname() }} {{ name() }}</h1>
      }`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputsComponent {
  firstname = input.required<string>();
  name = input<string>('Bellingham', );
  showNames = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
    alias: 'show'
  });
}
