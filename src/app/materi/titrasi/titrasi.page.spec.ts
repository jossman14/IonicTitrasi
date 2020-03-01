import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TitrasiPage } from './titrasi.page';

describe('TitrasiPage', () => {
  let component: TitrasiPage;
  let fixture: ComponentFixture<TitrasiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitrasiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TitrasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
