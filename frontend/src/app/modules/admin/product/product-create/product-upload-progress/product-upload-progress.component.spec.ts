import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUploadProgressComponent } from './product-upload-progress.component';

describe('ProductUploadProgressComponent', () => {
  let component: ProductUploadProgressComponent;
  let fixture: ComponentFixture<ProductUploadProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUploadProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductUploadProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
