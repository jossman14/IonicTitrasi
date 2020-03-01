import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PraktikumPage } from './praktikum.page';

describe('PraktikumPage', () => {
  let component: PraktikumPage;
  let fixture: ComponentFixture<PraktikumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraktikumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PraktikumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
