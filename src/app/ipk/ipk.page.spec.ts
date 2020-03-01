import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IPKPage } from './ipk.page';

describe('IPKPage', () => {
  let component: IPKPage;
  let fixture: ComponentFixture<IPKPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IPKPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IPKPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
