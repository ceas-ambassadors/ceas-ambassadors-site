import {Event} from '../models/events';

export interface IEventService{
    getEvents(): Promise<Event[]>;

}
const EventService = () => {
    const eventService = {
        async getEvents(): Promise<Event[]>{
            return []
        }
    }
    return (0);
}

