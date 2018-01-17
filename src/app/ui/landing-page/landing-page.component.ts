import { Component, OnInit } from '@angular/core';
import { Event } from './event.model';
import { Http, Response} from '@angular/http';
import { EventsService } from '../../events.service';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  
    events: Event[];
    selectedEvent: Event;
    toDeleteId:number;
  
    constructor(private eventService: EventsService) { }
  
    ngOnInit() {
      this.eventService.getEvents().subscribe(events => this.events = events);
    }
  
    onselectedEvent(event: Event) {
    this.selectedEvent =  event;
    }
  
    deleteEvent(event: Event){
      this.toDeleteId = event.EventId;
      this.eventService.deleteEvent(this.toDeleteId).subscribe(
      result => console.log(result));    
      let indexToDelete = this.events.indexOf(event);
        if (indexToDelete !== -1) {
          this.events.splice(indexToDelete, 1);
        }     
      console.log(this.toDeleteId); 
    }
}

