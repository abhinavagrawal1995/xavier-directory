import {Component, Injectable, OnInit} from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Person } from "../person";
declare var firebase: any;  



@Component({
  selector: 'directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})

export class DirectoryComponent implements OnInit {
  private firebaseDao:any;
  people:Person[] = new Array();
  private dataReady:boolean = false;
  colConfig = [
    {field: 'name', header: 'Name'},
    {field: 'batch', header: 'Batch'},
    {field: 'mobile', header: 'Mobile'},
    {field: 'company_name', header: 'Company'},
    {field: 'business_category', header: 'Business Category'},
    {field: 'email', header: 'Email'},
    {field: 'landline', header: 'Landline'},
    {field: 'office_address', header: 'Office Address'},
    {field: 'website', header: 'Website'}
  ];
  constructor() {     
  }

  ngOnInit() {
    var config = {
      apiKey: "AIzaSyA741Utl4owb1vRT7LFiBEcq6-BDJ1k58k",
      authDomain: "xaviers-directory.firebaseapp.com",
      databaseURL: "https://xaviers-directory.firebaseio.com",
      projectId: "xaviers-directory",
      storageBucket: "xaviers-directory.appspot.com",
      messagingSenderId: "60672208607"
    };
    firebase.initializeApp(config);
    this.firebaseDao = firebase.database();
    this.testDao()    
  }

  private testDao() {
    let val = this.firebaseDao.ref();
    let self = this;
    val.on('value', function(snapshot) {
      let data = snapshot.val()
      if(data == null) {
        console.error("Unable to fetch data")
        return;
      }
      data.forEach(person => {
        self.people.push(<Person> person)  
      });
      self.dataReady = true     
      
    });
  }

}
