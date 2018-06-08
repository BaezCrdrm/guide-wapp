import { Component, OnInit } from '@angular/core';
import { Event } from '../models/models';
import { EventsService } from '../events.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  // event:Event = new Event();
  // events = EVENTS;
  events: Event[];
  selectedEvent: Event;
  config;
  constructor(private eventService: EventsService) {  }

  ngOnInit() {
    this.getEventsList();
    // this.showConfig();
  }

  getEventsList():void{
    // Convierte Observable a "lista"
    this.eventService.getEventsList().subscribe(events => this.events = events);
  }

  // showConfig() {
  //   this.eventService.getConfig()
  //     .subscribe((data) => this.config = {
  //         heroesUrl: data['heroesUrl'],
  //         textfile:  data['textfile']
  //     });
  // }

  onSelectEvent(event:Event): void
  {
    this.selectedEvent = event;
    console.log("entro");
  }
}
