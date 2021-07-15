import { Component, OnInit } from '@angular/core';

import { PatchesService } from '../patches.service';
import { Patch } from '../patches-list/patches-list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataSource!: Object;
  chartConfig!: any;
  pieSource!: Object;
  pieConfig!: any;

  patches:Patch[]=[];
  myPatchData:Object[]=[]
  mypieData:Object[]=[]

  constructor(private PatchesService:PatchesService) { 



  }

  ngOnInit(): void {
    this.getPatches();
  }

  public getPatches(): void {

    this.PatchesService.getPatches().then(response=> {
      this.patches=response
      let critical =0;
      let normal =0;
      let warning =0;


      for (let res of response) {
        let color="";
        if(res.attacks >= 25) {
          critical= critical+1;
          color = "#EA452E";
        } else {
          color= "#4CBB17";
          if(res.attacks >=15) {
            warning=warning+1;

          } else {
            normal=normal+1;

          }
        }
       
        let data = {
          "label" : res.name,
          "value" : res.attacks,
          "color": color
        }
        this.myPatchData.push(data);
      }

      this.mypieData = [{
        "label": "Critical",
        "value":critical  
      },
      {
        "label": "Warning",
        "value":warning  
      },
      {
        "label": "Normal",
        "value":normal  
      },
    ]

      this.chartConfig = {
        width: '1100',
        height: '500',
        type: 'column2d',
        dataFormat: 'json',
    };
  
    this.dataSource = {
        "chart": {
          "caption": "Number of Registered attacks per Patch",
          "subCaption": "How many registered attacks",
          "xAxisName": "Patch Name",
          "yAxisName": "Registered Attacks",
          "numberSuffix": "",
          "theme": "fusion",
          "exportEnabled": "1"
        },
        "data": this.myPatchData
      };

      this.pieConfig = {
        width: '1100',
        height: '500',
        type: 'pie2d',
        dataFormat: 'json',
    };

    this.pieSource = {
      "chart": {
        "caption": "Grouping of Patches Based on Severity",
        "subCaption": "Patch Classifications",
        "use3DLighting": "0",
        "showPercentValues": "1",
        "decimals": "1",
        "useDataPlotColorForLabels": "1",
        "theme": "fusion"
      },
      "data": this.mypieData
    };


    }).catch(
      error=> {
        console.log(error);
      }
    )

  
  }

}
