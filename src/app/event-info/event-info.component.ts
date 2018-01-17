import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';
import { Event } from '../ui/landing-page/event.model';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.scss']
})
export class EventInfoComponent implements OnInit {
  AddressList: any;
  evenDetails: Event;
  statusMessage: string;
  title: string;
  EventPostcode: string;

  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 15;

  constructor(private eventService: EventsService, 
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer ) {}

  videolist = [{name:"Fer", string:"6wD4V0rvlDI"},
  {name:"car", string:"6q5smuwgARY"},
  {name:"lom", string:"8g4-Vz69xYM"},
  {name:"tom", string:"15gXlORbThM"},
  {name:"tom", string:"38-M5ZkYzAY"}]

  ngOnInit() {
    this.getEventtoEdit();
    
  }

  getEmbedUrl(item: any){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.string);

  }

  findAddress() {
    
        this.eventService.getEventPostcode(this.EventPostcode).subscribe(
          (Data) => {
            if (Data == null) {
              this.statusMessage = 'Postcode do not exist!' ;
            }else {}
            this.AddressList =  Data;
            this.lat =  this.AddressList.latitude;
            this.lng =  this.AddressList.longitude;
            console.log(this.AddressList);
            console.log(this.lat);
            console.log(this.lng);
          },
          (error) => {
            this.statusMessage = 'Problem with the service';
            console.log(error);
          }
        );
      }




  getEventtoEdit() {
    var  eventId: any = this.activatedRoute.snapshot.params['id'];
    this.eventService.getEventById(eventId).subscribe(
      (eventData) => {
        if (eventData == null) {
          this.statusMessage = 'Event with given id does not exits' ;
        }else {
        this.evenDetails =  eventData;
        console.log(this.evenDetails);
        this.title = this.evenDetails.eventTitle ;
        this.EventPostcode = this.evenDetails.eventPostcode ;
        console.log( this.EventPostcode);
        this.findAddress();
        }
        
      },
      (error) => {
        this.statusMessage = 'Problem with the service';
        console.log(error);
      }
    );
    
  }
}
