import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KurvaTitrasiPage } from './kurva-titrasi.page';

describe('KurvaTitrasiPage', () => {
  let component: KurvaTitrasiPage;
  let fixture: ComponentFixture<KurvaTitrasiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurvaTitrasiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KurvaTitrasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
