export class Event
{
    ID: string;
    Name: string;
    Description: string;
    StartSch: any;
    EndSch: any;
    EventType: EventType;
    List: Channel[];
    Url: string;

    constructor() 
    {
        this.EventType = new EventType();
    }
}

export class EventType
{
    ID: number;
    Name: string;
    Imgr: string;
    StrColor: string;

    constructor() 
    {
        this.ID = 0;
    }
}

export class Channel
{
    ID: number;
    Name: string;
    Abv: string;
    Url: string;

    constructor() {}
}