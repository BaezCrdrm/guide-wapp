import { Injectable } from '@angular/core';
import {Event} from './models/models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  configUrl = "./assets/config.json";
  apiBaseUrl:string = "http://18.221.160.127/guide-ws/service/scripts/rest/";
  private _events: Event[] = [];

  constructor(private httpClient: HttpClient)
  {
    console.log("Events.service >>>>>>>>>");
    // this.getConfig();
  }

  getConfig()
  {
    var self = this;
    var a = this.httpClient.get(this.configUrl);
    a.forEach(e => {
      console.log(e['service']['guide-api-url'].toString());
      var _url: string = e['service']['guide-api-url'].toString();
      self.apiBaseUrl = _url;
    });
  }

  getEventsList(): Observable<Event[]>
  {
    var self = this;
    var _url: string = this.apiBaseUrl + "req_events.php";
    var a = this.httpClient.get<any[]>(_url);
    // console.log("getEvents >>>>>>>>>");
    var ev: Event[] = [];
        
    a.forEach(e => {
      e.forEach(obj => {
        // console.log(obj);
        self._events.push(self.getItemsFormat(obj));
      });
    });

    return of(self._events);
  }

  getEventDetails(id): Observable<Event>
  {
    var self = this;
    var _url: string = this.apiBaseUrl + "req_events.php?ev_id=" + id;
    var a = this.httpClient.get<any[]>(_url);
    console.log("getEventDetails >>>>>>>>>");
    var tempObCol = new Observable<Event>();
    var ev: Event = new Event();
        
    a.forEach(e => {
      console.log("a");
      console.log(e);
      // e.forEach(obj => {
      //   // console.log(obj);
        
      // });
    });
    
    return null;
  } 

  private getItemsFormat(e:Object): Event
  {
    let obj = new Event();
    obj.ID = e['ev_id'];
    obj.Name = e['ev_name'];
    obj.Description = e['ev_des'];
    obj.StartSch = e['ev_sch'];
    obj.EndSch = e['ev_sch_end'];
    obj.EventType.ID = e['tp_id'];
    obj.EventType.Name = e['tp_name'];
    // obj.List: object[];
    // obj.Url = e['ev_url'];

    return obj;
  }
}
