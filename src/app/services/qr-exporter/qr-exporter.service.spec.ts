import { TestBed } from '@angular/core/testing';

import { QrExporterService } from './qr-exporter.service';

describe('QrExporterService', () => {
  let service: QrExporterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrExporterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
