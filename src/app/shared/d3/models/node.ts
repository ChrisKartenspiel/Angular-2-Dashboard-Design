
// Implementing SimulationNodeDatum Interface into our custom node class
export class Node implements d3.SimulationNodeDatum {

  // Optional
  // Defining Optional Implementation Properties - required for relevant typing
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: string;
  linkCount: number;
  config: any;
  constructor(id) {
    this.config = {
      enn: 100,
      SPECTRUM: [
        // "rgb(222,237,250)"
        'rgb(176,212,243)',
        'rgb(128,186,236)',
        'rgb(77,158,228)',
        'rgb(38,137,223)',
        'rgb(0,116,217)',
        'rgb(0,106,197)'
        // "rgb(0,94,176)"
        // "rgb(0,82,154)"
        // "rgb(0,60,113)"
      ]
    };
    this.linkCount = 0;
    this.id = id;
  }

  normal = () => {
    return Math.sqrt(this.linkCount / this.config.enn);
  }

  get r() {
    return 50 * this.normal() + 10;
  }

  get fontSize() {
    return (30 * this.normal() + 10) + 'px';
  }

  get color() {
    let index = Math.floor(this.config.SPECTRUM.length * this.normal());
    return this.config.SPECTRUM[index];
  }
}
