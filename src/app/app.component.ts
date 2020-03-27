import { Component,OnInit } from '@angular/core';
import { Chart, Highcharts } from 'angular-highcharts';
import GanttModule from 'highcharts/modules/gantt';

GanttModule(Highcharts);


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
  taskChart: Chart;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.ganttChart();

    }, 500);
  }
  name = 'Angular';

  ganttChart() {
    let strData = [
      {"start":1585180800000,"end":1585440000000,"name":"Prototype","id":"prototype","y":0},
      {"start":1585526400000,"name":"Prototype done","milestone":true,"dependency":"prototype","id":"proto_done","y":0},
      {"start":1585612800000,"end":1585958400000,"name":"Testing","dependency":"proto_done","y":0},
      {"start":1585440000000,"end":1585699200000,"name":"Product pages","y":1},{"start":1585785600000,"end":1585872000000,"name":"Newsletter","y":1},{"start":1585785600000,"end":1585958400000,"name":"Licensing","id":"testing","y":2},{"start":1586001600000,"end":1586088000000,"name":"Publish","dependency":"testing","y":2}]
    var today = new Date(),
      day = 1000 * 60 * 60 * 24;
    // each = Highcharts.each;
    // reduce = Highcharts.reduce;
    // Highcharts.ganttChart()
    this.taskChart = new Chart({
      // Create the chart
      // var chart = Highcharts.ganttChart('gnttcontainer', {

      chart: {
        // type: 'heatmap',
        type: 'gantt',
        spacingLeft: 1,
        
      },

      title: {
        text: 'Interactive Gantt Chart'
      },

      subtitle: {
        text: 'Drag and drop points to edit'
      },

      plotOptions: {
        series: {
          animation: false, // Do not animate dependency connectors
          // dragDrop: {
          //   draggableX: true,
          //   draggableY: true,
          //   dragMinY: 0,
          //   dragMaxY: 2,
          //   dragPrecisionX: day / 3 // Snap to eight hours
          // },
          dataLabels: {
            enabled: true,
            format: '{point.name}',
            style: {
              cursor: 'default',
              // pointerEvents: 'none'
            }
          },
          allowPointSelect: true,
          // point: {
          //   events: {
          //     select: updateRemoveButtonStatus,
          //     unselect: updateRemoveButtonStatus,
          //     remove: updateRemoveButtonStatus
          //   }
          // }
        }
      },

      yAxis: {
        type: 'category',
        categories: ['Tech', 'Marketing', 'Sales'],
        min: 0,
        max: 2
      },

      xAxis: <any>{
        currentDateIndicator: true
      },

      tooltip: {
        xDateFormat: '%a %b %d, %H:%M'
      },

      series: [{
        name: 'Project 1',
        // data: [{
        //   start: today + 2 * day,
        //   end: today + day * 5,
        //   name: 'Prototype',
        //   id: 'prototype',
        //   y: 0
        // }, {
        //   start: today + day * 6,
        //   name: 'Prototype done',
        //   milestone: true,
        //   dependency: 'prototype',
        //   id: 'proto_done',
        //   y: 0
        // }, {
        //   start: today + day * 7,
        //   end: today + day * 11,
        //   name: 'Testing',
        //   dependency: 'proto_done',
        //   y: 0
        // }, {
        //   start: today + day * 5,
        //   end: today + day * 8,
        //   name: 'Product pages',
        //   y: 1
        // }, {
        //   start: today + day * 9,
        //   end: today + day * 10,
        //   name: 'Newsletter',
        //   y: 1
        // }, {
        //   start: today + day * 9,
        //   end: today + day * 11,
        //   name: 'Licensing',
        //   id: 'testing',
        //   y: 2
        // }, {
        //   start: today + day * 11.5,
        //   end: today + day * 12.5,
        //   name: 'Publish',
        //   dependency: 'testing',
        //   y: 2
        // }]
        data: strData
      }]
    });


  }
}
