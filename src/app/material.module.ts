import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatIconModule
    ]
})
export class MaterialModule { }
