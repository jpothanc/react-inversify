import { Subject } from 'rxjs';
import { injectable } from 'inversify';

export type EventData  = {
    type: string
    data: number
}

export interface IEventManager {
    subscribeToEvent(callback: (data: EventData) => void):void;
     emitEvent(data: EventData):void;
}
@injectable()
export class EventManager {
  private eventSubject = new Subject<EventData>();

  // Method to subscribe to events
  subscribeToEvent(callback: (data: EventData) => void) {
    this.eventSubject.subscribe(callback);
  }

  // Method to emit events
  emitEvent(data: EventData) {
    this.eventSubject.next(data);
  }
}
