import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KDPage } from './kd.page';

describe('KDPage', () => {
  let component: KDPage;
  let fixture: ComponentFixture<KDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KDPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
