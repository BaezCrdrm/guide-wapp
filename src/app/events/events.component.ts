import { Component, OnInit } from '@angular/core';
import { Event } from '../models/models';
import { EventsService } from '../events.service';
import { ChannelsListService } from '../channels-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  private sub: any;
  type:number;
  events: Event[];
  selectedEvent: Event;
  calculatedDuration: any;
  timeCDFormat;
  config;

  constructor(private eventService: EventsService, 
    private channelsService: ChannelsListService,
    private route: ActivatedRoute) { this.timeCDFormat = "minutos"; }

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
    // https://angular-2-training-book.rangle.io/handout/routing/routeparams.html
    this.sub = this.route.params.subscribe(params => {
      this.type = +params['type'];
    });

    if(this.type == 0) {
      this.type = null;
    }

    // Convierte Observable a "lista"
    this.eventService.getEventsList(this.type).
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
