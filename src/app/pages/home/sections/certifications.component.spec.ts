import { ComponentFixture, TestBed } from '@angular/core/testing';
import { certificationsComponent } from './certifications.component';


describe('certificationsComponent', () => {
  let component: certificationsComponent;
  let fixture: ComponentFixture<certificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [certificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(certificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
