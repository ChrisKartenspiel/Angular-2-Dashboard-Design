import {Component, Input} from '@angular/core';
import {Node} from '../../';

@Component({
  selector: '[nodeVisual]',
  template: `
    <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
      <svg:circle cx="0" cy="0" r="50">
        <svg:text>{{ node.id }}</svg:text>
      </svg:circle>
    </svg:g>
  `,
  styles: [
    `
    .node {
      cursor: pointer;
      transition: stroke-width 0.1s ease-out,
      fill 0.1s ease-out,
      stroke 0.1s ease-out;
      stroke: white;
      stroke-width: 0.25;
    }
    .node-name {
      font-family: 'Lato';
      text-anchor: middle;
      alignment-baseline: central;
      font-weight: 300;
      fill: white;
    }

    `
  ]
})

export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;
}
