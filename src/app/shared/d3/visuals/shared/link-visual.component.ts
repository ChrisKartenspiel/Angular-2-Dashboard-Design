import {Component, Input } from '@angular/core';
import {Link} from '../../';

@Component({
  selector: '[linkVisual]',
  template: `
    <svg:line
      [attr.x1]="link.source.x"
      [attr.y1]="link.source.y"
      [attr.x2]="link.target.x"
      [attr.y2]="link.target.y"
    ></svg:line>
  `,
  styles: [`
    .link {
      stroke-width: 0.25;
      stroke: rgb(222,237,250);
    }
  `]
})

export class LinkVisualComponent {
  @Input('linkVisual') link: Link;
}
