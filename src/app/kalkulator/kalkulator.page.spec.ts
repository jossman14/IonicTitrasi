import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KalkulatorPage } from './kalkulator.page';

describe('KalkulatorPage', () => {
  let component: KalkulatorPage;
  let fixture: ComponentFixture<KalkulatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalkulatorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KalkulatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
