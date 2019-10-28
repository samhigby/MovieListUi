import {NgModule} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    exports: [
        MatListModule, MatFormFieldModule,
        MatInputModule, MatButtonModule,
        MatDialogModule, MatCardModule,
        MatIconModule, MatSidenavModule,
        MatChipsModule, MatSelectModule,
        MatToolbarModule
    ]
  })
  export class MaterialModule {}
