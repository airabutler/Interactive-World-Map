import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  @Output() name = new EventEmitter();
  @Output() capital = new EventEmitter();
  @Output() region = new EventEmitter();
  @Output() income = new EventEmitter();
  @Output() lendingtype = new EventEmitter();
  @Output() iso2code = new EventEmitter();

  constructor(private apiService: ApiService) { }

  onClickCountry(event: MouseEvent) {
    const target = event.target as SVGElement;
    const id = target.id;
    console.log(`Clicked element ID: ${id}`);

    this.apiService.getCountryInfo(id).subscribe((info: any) => {
      let res = info[1][0]
      this.name.emit(res.name);
      this.capital.emit(res.capitalCity);
      this.region.emit(res.region.value);
      this.income.emit(res.incomeLevel.value);
      this.lendingtype.emit(res.lendingType.value);
      this.iso2code.emit(res.iso2Code);
    });
  }
}
