import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name!: string;
  capital!: string;
  region!: string;
  income!: string;
  lendingType!: string;
  iso2Code!: string;

  /**
   * Updates the value of the name property.
   * @param value The new value for the name property.
   */
  onNameChange(value: string) {
    this.name = value;
  }

  /**
   * Updates the value of the capital property.
   * @param value The new value for the capital property.
   */
  onCapitalChange(value: string) {
    this.capital = value;
  }

  /**
   * Updates the value of the region property.
   * @param value The new value for the region property.
   */
  onRegionChange(value: string) {
    this.region = value;
  }

  /**
   * Updates the value of the income property.
   * @param value The new value for the income property.
   */
  onIncomeChange(value: string) {
    this.income = value;
  }

  /**
   * Updates the value of the lendingType property.
   * @param value The new value for the lendingType property.
   */
  onLendingTypeChange(value: string) {
    this.lendingType = value;
  }

  /**
   * Updates the value of the iso2Code property.
   * @param value The new value for the iso2Code property.
   */
  onISO2CodeChange(value: string) {
    this.iso2Code = value;
  }
}
