import { Component, OnInit } from '@angular/core';

declare var Treant: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nodeTree = {
    text: { name: '0' },
    children: [
      {
        text: { name: '00' },
        children: [
          {
            text: { name: '000'},
            children: [
              {
                text: { name: '0001'}
              },
              {
                text: { name: '0011'}
              }
            ]
          },
          {
            text: { name: '001'},
            children: [
              {
                text: { name: '0010'},
                children: [
                  {
                    text: { name: '00100'}
                  },
                  {
                    text: { name: '00100'}
                  }
                ]
              },
              {
                text: { name: '0011'}
              }
            ]
          }
        ]
      },
      {
        text: { name: '01' },
        children: [
          {
            text: { name: '010'}
          },
          {
            text: { name: '011'}
          }
        ]
      }
    ]
  };
  chart_config = {
    chart: {
      container: '#tree-simple',
      rootOrientation: 'NORTH',
      connectors: {
        type: 'step',
        style: {
          'arrow-end': 'classic-wide-long',
          'stroke-width': 2,
          'stroke': '#665B57'
        }
      }
    },
    nodeStructure: this.nodeTree
  };
  visualTree: any;
  windowHeight: number;
  windowWidth: number;

  ngOnInit() {
    this.windowHeight = window.innerHeight - 100;
    this.windowWidth = window.innerWidth - 100;
    this.initTreant();
    this.reloadTreant();
  }

  initTreant() {
    this.visualTree = new Treant(this.chart_config);
  }

  reloadTreant() {
    this.visualTree.tree.reload();
  }
}
