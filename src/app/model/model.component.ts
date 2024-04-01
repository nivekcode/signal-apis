import {ChangeDetectionStrategy, Component, model} from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-model',
  template: `
    <div (click)="handleClick()">
        {{ checked() ? 'checked' : 'not checked' }}
    </div>
      `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModelComponent {
  checked = model();

  handleClick() {
    this.checked.update(v => !v)
  }
}
