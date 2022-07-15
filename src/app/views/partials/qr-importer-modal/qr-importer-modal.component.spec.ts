import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrImporterModalComponent } from './qr-importer-modal.component';

describe('QrImporterModalComponent', () => {
  let component: QrImporterModalComponent;
  let fixture: ComponentFixture<QrImporterModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrImporterModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrImporterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
