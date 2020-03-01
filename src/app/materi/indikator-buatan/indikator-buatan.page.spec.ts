import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndikatorBuatanPage } from './indikator-buatan.page';

describe('IndikatorBuatanPage', () => {
  let component: IndikatorBuatanPage;
  let fixture: ComponentFixture<IndikatorBuatanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndikatorBuatanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndikatorBuatanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
