import { Component, OnInit } from '@angular/core';
import { Event } from '../models/models';
import { EventsService } from '../events.service';
import { ChannelsListService } from '../channels-list.service';


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
  constructor(private eventService: EventsService, 
    private channelsService: ChannelsListService) {  }

  ngOnInit() {
    this.getEventsList();
    // this.showConfig();
  }

  getEventsList():void{
    // Convierte Observable a "lista"
    this.eventService.getEventsList().
      subscribe(events => this.events = events);
  }

  getEventChannelList():void
  {
    // console.log("getEventChannelList   >>>>>>>> ");
    if(this.selectedEvent.ID)
      this.channelsService.getChannelsList(this.selectedEvent.ID).
        subscribe(ch => this.selectedEvent.List = ch);
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
    console.log("Current info");
    // console.log(this.selectedEvent);
    this.getEventChannelList();

    console.log(this.selectedEvent);
  }
}
