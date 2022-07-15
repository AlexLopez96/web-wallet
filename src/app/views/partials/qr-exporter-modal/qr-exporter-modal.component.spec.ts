import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrExporterModalComponent } from './qr-exporter-modal.component';

describe('QrExporterModalComponent', () => {
  let component: QrExporterModalComponent;
  let fixture: ComponentFixture<QrExporterModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrExporterModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrExporterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
