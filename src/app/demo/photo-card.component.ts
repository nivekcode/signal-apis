import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  input, model,
  output,
  viewChild
} from "@angular/core";

@Component({
  standalone: true,
  selector: 'photo-card',
  template: `
      <div #card class="card" tabindex="0">
          <div class="card-header">
              <h2>Title Goes Here</h2>
          </div>
          <div class="card-image" (click)="imageClick.emit()">
              <img [src]="imageUrl()" alt="Image description">
          </div>
          <div class="card-footer">
              <button (click)="handleLike()" class="like-button">Like</button>
          </div>
      </div>
  `,
  styleUrl: './photo-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoCardComponent {
  card = viewChild.required<ElementRef>('card');

  title = input('My cool photo');
  imageUrl = input.required<string>();

  liked = model<boolean>();

  imageClick = output<void>();

  public focus() {
    this.card().nativeElement.focus();
  }

  handleLike(){
    this.liked.update(v => !v);
  }
}
