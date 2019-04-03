import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ]
})
export class MetarialModule { }
