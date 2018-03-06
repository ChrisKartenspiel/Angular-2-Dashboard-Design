import {
  Component,
  Input,
  AfterViewInit,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostListener
} from '@angular/core';
import { D3Service, ForceDirectedGraph, Node} from '../../';

@Component({
  selector: 'app-d3-graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg #svg [attr.width]="_options.width" [attr.height]="_options.height">
      <g [zoomableOf]="svg">
        <g [linkVisual]="link" *ngFor="let link of links"></g>
        <g [nodeVisual]="node" *ngFor="let node of nodes"
            [draggableNode]="node" [draggableInGraph]="graph"></g>
      </g>
    </svg>
    `,
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit, AfterViewInit {
  @Input('nodes') nodes;
  @Input('links') links;

  graph: ForceDirectedGraph;

  @HostListener('window:resize', ['$event'])
  OnResize(event) {
    this.graph.initSimulation(this.options);
  }

  public _options: { width, height };

  constructor(private d3Service: D3Service,
              private ref: ChangeDetectorRef) {
    this._options = { width: 800, height: 600 };
  }

  ngOnInit() {
    // Receiving an intialized simulated graph from our custom d3 service
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
    this.graph.ticker.subscribe((d) => {
      this.ref.markForCheck();
    });
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
}
