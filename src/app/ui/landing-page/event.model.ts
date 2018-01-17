export class Event {
    EventId: number;
    eventTitle: string;
    eventStartDate: string;
    eventEndDate: string;
    eventPostcode: string;
    eventDescription: string;

    constructor( eventTitle: string, eventStartDate: string, eventEndDate: string, eventPostcode: string,
        eventDescription: string ){
      
            this.eventTitle =     eventTitle;  
            this.eventStartDate =  eventStartDate;
            this.eventEndDate =   eventEndDate;
            this.eventPostcode = eventPostcode;
            this.eventDescription =  eventDescription;

    }
}