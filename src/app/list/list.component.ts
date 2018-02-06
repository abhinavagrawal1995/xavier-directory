import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private _list:Array<ListItem>;
  @Input("list")
  set list(list : Array<ListItem>) {
    if(list == null)
      this._list = new Array();
    else
      this._list = list;
  }
  get list() : Array<ListItem>  {
    return this._list;
  }

  @Output()
  onStateChanged: EventEmitter<Array<ListItem>> = new EventEmitter();

  

  constructor() { }

  ngOnInit() {
  }

  itemClicked(item:ListItem) {
    if(item.isSelected) {
      item.isSelected = false;
      this.setSubRowsState(item,false);
    }
    else {
      item.isSelected = true;
      this.setSubRowsState(item, true);
    }
    this.onStateChanged.emit(this.list);
  }

  setSubRowsState(row:ListItem, state:boolean) {
    for(let key in row.subrows) {
      let subrow = row.subrows[key]
      subrow.isSelected = state;
      this.setSubRowsState(subrow, state);
    }
  }


  subrowStateChanged(row: ListItem, subrowState:Array<ListItem>) {
    let selectedSubrows:number = 0;
    for(let key in row.subrows){
      if(row.subrows[key].isSelected)
      selectedSubrows++;
    }
    if(selectedSubrows == 0)
      row.isSelected = false;
    else if(selectedSubrows == row.subrows.length)
      row.isSelected = true;
    this.onStateChanged.emit(this.list);
  }
}
export class ListItem {
  label: string;
  value: any;
  subrows: Array<ListItem>;
  isSelected: boolean = false;
  constructor(label:string, value:any, subrows:Array<ListItem>){
    this.label = label;
    this.value=value;
    this.subrows = subrows;
    if(!subrows)
      this.subrows = new Array();
  }
}
