import { Component, OnInit } from '@angular/core';
import { ListItem } from './list/list.component';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   
    list :Array<ListItem>;
    constructor() {}

    ngOnInit() {
      this.list = [
        {
          label: "1",
          value : {},
          isSelected: false,
          subrows: [
            {
              label: "11",
              value : {},
              isSelected: false,
              subrows: [
                {
                  label: "111",
                  value : {},
                  isSelected: false,
                  subrows: []
                },
                {
                  label: "112",
                  value : {},
                  isSelected: false,
                  subrows: []
                },
                {
                  label: "113",
                  value : {},
                  isSelected: false,
                  subrows: []
                }
              ]
            },
            {
              label: "12",
              value : {},
              isSelected: false,
              subrows: [
                {
                  label: "121",
                  value : {},
                  isSelected: false,
                  subrows: []
                },
                {
                  label: "122",
                  value : {},
                  isSelected: false,
                  subrows: []
                },
                {
                  label: "123",
                  value : {},
                  isSelected: false,
                  subrows: []
                }
              ]
            }
          ]
        }
      ]
    }

    stateChanged(val){
      console.log(val);
    }
    
}
