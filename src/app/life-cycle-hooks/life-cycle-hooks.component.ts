import {afterNextRender, afterRender, ChangeDetectionStrategy, Component, signal} from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-life-cycle-hooks',
  template: `<button (click)="handleClick()">Click me</button> {{ counter() }}`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLifeCycleHooks {
  counter = signal(0);

  constructor() {

    afterRender(() => {
      // Sync with view
      // Runs after each change detection cycle
      console.log('AfterRender')
    });

    afterNextRender(() => {
      // One time setups - ResizeObserver - third party libs
      // Runs once
      console.log('AfterNextRender')
    });

  }

  handleClick() {
    this.counter.update(v => v + 1)
  }

}
