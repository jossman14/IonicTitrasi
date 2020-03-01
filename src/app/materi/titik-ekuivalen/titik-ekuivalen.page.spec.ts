import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TitikEkuivalenPage } from './titik-ekuivalen.page';

describe('TitikEkuivalenPage', () => {
  let component: TitikEkuivalenPage;
  let fixture: ComponentFixture<TitikEkuivalenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitikEkuivalenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TitikEkuivalenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
