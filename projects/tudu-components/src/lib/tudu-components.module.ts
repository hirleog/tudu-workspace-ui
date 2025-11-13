import { NgModule } from '@angular/core';
import { TuduComponentsComponent } from './tudu-components.component';
import { CommonModule } from '@angular/common';
import { CardLayoutComponent } from '../lib/components/card-layout/card-layout.component';

@NgModule({
  declarations: [TuduComponentsComponent, CardLayoutComponent],
  imports: [CommonModule],
  exports: [TuduComponentsComponent, CardLayoutComponent],
})
export class TuduComponentsModule {}
