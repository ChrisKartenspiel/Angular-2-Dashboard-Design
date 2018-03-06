import { NgModule } from '@angular/core';
import {
  MdProgressSpinnerModule,
  MdDialogModule,
  MdProgressBarModule,
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdSidenavModule,
  MdInputModule,
  MdAutocompleteModule,
  MdTabsModule,
  MdTooltipModule,
  MdSnackBarModule,
  MdIconModule,
  MdDatepickerModule,
  MdCheckboxModule,
  MdSliderModule,
  MdRadioModule,
  MdSlideToggleModule,
  MdSelectModule,
  MdListModule,
  MdGridListModule
} from '@angular/material';

const imports = [
  MdDialogModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdSidenavModule,
  MdInputModule,
  MdAutocompleteModule,
  MdTabsModule,
  MdTooltipModule,
  MdSnackBarModule,
  MdIconModule,
  MdDatepickerModule,
  MdCheckboxModule,
  MdSliderModule,
  MdRadioModule,
  MdSlideToggleModule,
  MdSelectModule,
  MdListModule,
  MdGridListModule
];

@NgModule({
  imports,
  exports: imports,
})
export class CommonMaterialModule {}
