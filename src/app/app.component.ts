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
      // this.ganttChartHira()

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

  ganttChartHira(){
    let series_= [{"name":"Offices","data":[{"name":"New offices","id":"new_offices","owner":"Peter"},{"name":"Prepare office building","id":"prepare_building","parent":"new_offices","start":1585440000000,"end":1586131200000,"completed":{"amount":0.2},"owner":"Linda"},{"name":"Inspect building","id":"inspect_building","dependency":"prepare_building","parent":"new_offices","start":1586131200000,"end":1586304000000,"owner":"Ivy"},{"name":"Passed inspection","id":"passed_inspection","dependency":"inspect_building","parent":"new_offices","start":1586433600000,"milestone":true,"owner":"Peter"},{"name":"Relocate","id":"relocate","dependency":"passed_inspection","parent":"new_offices","owner":"Josh"},{"name":"Relocate staff","id":"relocate_staff","parent":"relocate","start":1586476800000,"end":1586563200000,"owner":"Mark"},{"name":"Relocate test facility","dependency":"relocate_staff","parent":"relocate","start":1586563200000,"end":1586736000000,"owner":"Anne"},{"name":"Relocate cantina","dependency":"relocate_staff","parent":"relocate","start":1586563200000,"end":1586822400000}]},{"name":"Product","data":[{"name":"New product launch","id":"new_product","owner":"Peter"},{"name":"Development","id":"development","parent":"new_product","start":1585526400000,"end":1586563200000,"completed":{"amount":0.6,"fill":"#e80"},"owner":"Susan"},{"name":"Beta","id":"beta","dependency":"development","parent":"new_product","start":1586692800000,"milestone":true,"owner":"Peter"},{"name":"Final development","id":"finalize","dependency":"beta","parent":"new_product","start":1586736000000,"end":1587081600000},{"name":"Launch","dependency":"finalize","parent":"new_product","start":1587124800000,"milestone":true,"owner":"Peter"}]}];
this.taskChart = new Chart({
      // Create the chart
      // var chart = Highcharts.ganttChart('gnttcontainer', {

      chart: {
        // type: 'heatmap',
        type: 'gantt',
        spacingLeft: 1,
        
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
series:series_,
    // tooltip: {
    //     pointFormatter: function () {
    //         var point = this,
    //             format = '%e. %b',
    //             options = point.options,
    //             completed = options.completed,
    //             amount = isObject(completed) ? completed.amount : completed,
    //             status = ((amount || 0) * 100) + '%',
    //             lines;

    //         lines = [{
    //             value: point.name,
    //             style: 'font-weight: bold;'
    //         }, {
    //             title: 'Start',
    //             value: dateFormat(format, point.start)
    //         }, {
    //             visible: !options.milestone,
    //             title: 'End',
    //             value: dateFormat(format, point.end)
    //         }, {
    //             title: 'Completed',
    //             value: status
    //         }, {
    //             title: 'Owner',
    //             value: options.owner || 'unassigned'
    //         }];

    //         return reduce(lines, function (str, line) {
    //             var s = '',
    //                 style = (
    //                     defined(line.style) ? line.style : 'font-size: 0.8em;'
    //                 );
    //             if (line.visible !== false) {
    //                 s = (
    //                     '<span style="' + style + '">' +
    //                     (defined(line.title) ? line.title + ': ' : '') +
    //                     (defined(line.value) ? line.value : '') +
    //                     '</span><br/>'
    //                 );
    //             }
    //             return str + s;
    //         }, '');
    //     }
    // },
    title: {
        text: 'Gantt Project Management'
    },
    xAxis: {
        currentDateIndicator: true,
        // min: today - 3 * day,
        // max: today + 18 * day
    }
});

  }
}
