import {ChangeDetectionStrategy, Component, output} from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-output',
  template: `
  <button (click)="emitOutput()">Click me</button>
      `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutputComponent {
  output = output<string>();

  emitOutput(){
    this.output.emit('Even from the child');
  }
}
