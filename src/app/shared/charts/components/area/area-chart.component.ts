import {
  Component,
  OnChanges,
  AfterViewInit,
  Input,
  ElementRef,
  ViewChild
} from '@angular/core';
import * as D3 from 'd3';
import * as Moment from 'moment';

import {AreaChartConfig} from '../../chart-config';


@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})

export class AreaChartComponent implements OnChanges, AfterViewInit {

  @Input() config: Array<AreaChartConfig>;
  @ViewChild('container') element: ElementRef;

  private host;
  private svg;
  private margin;
  private width;
  private height;
  private xScale;
  private yScale;
  private xAxis;
  private yAxis;
  private htmlElement: HTMLElement;

  // We request angular for the element reference
  // and then we create a D3 wrapper for our host element

  constructor() {}

  ngAfterViewInit() {
   this.htmlElement = this.element.nativeElement;
   this.host = D3.select(this.htmlElement);
   this.setup();
  }

  // Everytime the @Input is Updated, we build the chart
  ngOnChanges() {
    if (!this.config || this.config.length === 0 || !this.host) return;
    this.setup();
    this.buildSVG();
    this.populate();
    this.drawXAxis();
    this.drawYAxis();
  }

  // Basically we get the dom element size and build the container configs
  // Also we create the xScale and yScale ranges depending on Calculations
  private setup(): void {
    this.margin = { top: 20, right: 20, bottom: 40, left: 40};
    this.width = this.htmlElement.clientWidth - this.margin.left - this.margin.right;
    this.height = this.width * 0.5 - this.margin.top - this.margin.bottom;
    this.xScale = D3.scaleTime().rangeRound([0, this.width]);
    this.yScale = D3.scaleLinear().rangeRound([this.height, 0]);
  }

  // We can now build our SVG element using the configurations we created
  private buildSVG(): void {
    this.host.html('');
    this.svg = this.host.append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  // Return the MAX Value in any dataset inserted so we use it
  // Later for the maximum number in the y Axis
  private getMaxY(): number {
    let maxValuesOfAreas = [];
    this.config.forEach(data => maxValuesOfAreas.push(Math.max.apply(Math, data.dataset.map(d => d.y))));
    return Math.max(...maxValuesOfAreas);
  }

  // Populate our dataset mapping the x and y values
  // Into the x and y domains, also we set the interpolation so we decide
  // how the chart is plotted
  private populate(): void {
    this.config.forEach((area: any) => {
      this.xScale.domain(D3.extent(area.dataset, (d: any) => d.x));
      this.yScale.domain([0, D3.max(area.dataset, (d: any) => d.y)]);
      this.svg.append('path')
        .datum(area.dataset)
        .attr('class', 'area')
        .style('fill', area.settings.fill)
        .attr('d', D3.area()
          .x((d: any) => this.xScale(d.x))
          .y0(this.height)
          .y1((d: any) => this.yScale(d.y))
        );
    });
  }

  // Method to create the x Axis will use month as tick date format
  // Also assing some classes for Css Styling
  private drawXAxis(): void {
    this.xAxis = D3.axisBottom(this.xScale)
      .tickFormat( t => Moment(t).format('MMM').toUpperCase())
      .tickPadding(15);

    this.svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(this.xAxis);
  }

  // Method to create the u Axis will use month as tick date format
  // Also assing some classes for Css Styling
  private drawYAxis(): void {
    this.yAxis = D3.axisLeft(this.yScale).tickPadding(10);

    this.svg.append('g')
      .attr('class', 'y axis')
      .call(this.yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)');
  }
}
