import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndikatorAlamiPage } from './indikator-alami.page';

describe('IndikatorAlamiPage', () => {
  let component: IndikatorAlamiPage;
  let fixture: ComponentFixture<IndikatorAlamiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndikatorAlamiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndikatorAlamiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
