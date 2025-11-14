import { NgModule } from '@angular/core';
import { TuduComponentsComponent } from './tudu-components.component';
import { CommonModule } from '@angular/common';
import { CardLayoutComponent } from '../lib/components/card-layout/card-layout.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [TuduComponentsComponent, CardLayoutComponent, NavComponent],
  imports: [CommonModule],
  exports: [TuduComponentsComponent, CardLayoutComponent, NavComponent],
})
export class TuduComponentsModule {}
