import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../models/models';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
 
  
  eventService: EventsService;
  

  constructor() { console.log("description >>>>> Constructor", console.log('entro' !!)); }

  ngOnInit() {
    
  }

  getEventDetails():void
  {
    console.log("description >>>>> ngOnInit");
    if(this.event.ID)
      this.eventService.getEventDetails(this.event.ID).subscribe(event => this.event = event);
  }

  @Input() event:Event

}
