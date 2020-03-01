import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndikatorAsBaPage } from './indikator-as-ba.page';

describe('IndikatorAsBaPage', () => {
  let component: IndikatorAsBaPage;
  let fixture: ComponentFixture<IndikatorAsBaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndikatorAsBaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndikatorAsBaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
