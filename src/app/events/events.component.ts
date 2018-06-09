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
  events: Event[];
  selectedEvent: Event;
  calculatedDuration: any;
  timeCDFormat;
  config;

  constructor(private eventService: EventsService, 
    private channelsService: ChannelsListService) { this.timeCDFormat = "minutos"; }

  ngOnInit() {
    this.getEventsList();
    // this.showConfig();
  }

  onSelectEvent(event:Event): void
  {
    this.selectedEvent = event;
    console.log("Current info");
    // console.log(this.selectedEvent);
    this.getEventChannelList();
    //console.log(this.selectedEvent);
    
    this.calculateDuration();
  }

  private getEventsList():void{
    // Convierte Observable a "lista"
    this.eventService.getEventsList().
      subscribe(events => this.events = events);
  }

  private getEventChannelList():void
  {
    // console.log("getEventChannelList   >>>>>>>> ");
    if(this.selectedEvent.ID)
      this.channelsService.getChannelsList(this.selectedEvent.ID).
        subscribe(ch => this.selectedEvent.List = ch);
  }

  private calculateDuration():void{
    // new Date("2013-02-20T12:01:04.753Z").getTime();
    console.log("CalculateDuration");
    let td = (this.selectedEvent.EndSch).valueOf() - (this.selectedEvent.StartSch).valueOf();
    this.calculatedDuration = (td / (1000*60));
    this.timeCDFormat = "minutos";

    if(this.calculatedDuration >= 120)
    {
      console.log("Entroooo!");
      this.calculatedDuration = (td / (1000*3600));
      this.timeCDFormat = "horas";
    }
  }

  // showConfig() {
  //   this.eventService.getConfig()
  //     .subscribe((data) => this.config = {
  //         heroesUrl: data['heroesUrl'],
  //         textfile:  data['textfile']
  //     });
  // }
}
