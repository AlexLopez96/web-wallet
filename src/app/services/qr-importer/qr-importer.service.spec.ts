import { TestBed } from '@angular/core/testing';

import { QrImporterService } from './qr-importer.service';

describe('QrImporterService', () => {
  let service: QrImporterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrImporterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
