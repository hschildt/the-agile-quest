import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

import { GameComponent } from './game.component';
import { RibbonComponent } from './ribbon.component';
import { StrategyCardComponent } from './strategy-card.component';
import { ValueGaugeComponent } from './value-gauge.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  exports: [
    GameComponent,
  ],
  declarations: [
    GameComponent,
    RibbonComponent,
    StrategyCardComponent,
    ValueGaugeComponent
  ],
})
export class GameModule {}