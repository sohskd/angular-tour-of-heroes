import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Storm' },
      { id: 13, name: 'Wolverine' },
      { id: 14, name: 'Magneto' },
      { id: 15, name: 'Cyclops' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const request_data = [
    { id: 1, country: 'Singapore', region: 'APAC', lob: 'Corporate Technology', topic: 'Student Engagement', speakerName: 'John Doe', submittedDate: '1/1/2018', daysLeftToMeetSla: '22 Days', status: 'Pending'},
    { id: 2, country: 'Hong Kong', region: 'APAC', lob: 'CIB', topic: 'Publication', speakerName: 'John Doe', submittedDate: '10/1/2018', daysLeftToMeetSla: '10 Days', status: 'Approved'},
    { id: 3, country: 'USA', region: 'America', lob: 'Cyber Security', topic: 'Cyber information session', speakerName: 'Bob', submittedDate: '12/1/2018', daysLeftToMeetSla: '6 Days', status: 'Rejected'}
    return {request_data, heroes};
  }
}
