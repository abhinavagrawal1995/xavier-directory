import {Component, ViewEncapsulation, OnInit} from "@angular/core";
import { Observable } from "rxjs/Observable";
declare var firebase: any;  



@Component({
  selector: 'directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})

export class DirectoryComponent implements OnInit {
  private firebaseDao:any;
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
    debugger
    return firebase.database().ref('/xaviers-directory/' + 0).once('value').then(function(snapshot) {
      var name = (snapshot.val() && snapshot.val().name) || 'no data';
      debugger
      console.log(name)
    });
  }

}
