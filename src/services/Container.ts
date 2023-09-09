// src/container.js
import { Container } from 'inversify';
import { IDataService, ConcreteDataService } from '../services/DataService';
import {IEventManager,EventManager}  from '../services/EventManager';

const container = new Container();
//container.bind(EventManager).toSelf().inSingletonScope();
container.bind<IDataService>('DataService').to(ConcreteDataService).inSingletonScope();
container.bind<IEventManager>('EventManager').to(EventManager).inSingletonScope();


export default container;


// // diContainer.ts
// import { Container } from 'inversify';
// import 'reflect-metadata';
// import { DataService, ConcreteDataService } from './DataService';

// const container = new Container();
// container.bind<DataService>('DataService').to(ConcreteDataService);
// export default container;
