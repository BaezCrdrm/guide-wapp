import { TestBed, inject } from '@angular/core/testing';

import { ChannelsListService } from './channels-list.service';

describe('ChannelsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChannelsListService]
    });
  });

  it('should be created', inject([ChannelsListService], (service: ChannelsListService) => {
    expect(service).toBeTruthy();
  }));
});
