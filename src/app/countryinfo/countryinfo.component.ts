import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-countryinfo',
  templateUrl: './countryinfo.component.html',
  styleUrls: ['./countryinfo.component.css']
})
export class CountryInfoComponent {
  @Input() name!: string;
  @Input() capital!: string;
  @Input() region!: string;
  @Input() income!: string;
  @Input() lendingType!: string;
  @Input() iso2Code!: string;
}
