import {NgModule} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    exports: [
        MatListModule, MatFormFieldModule, MatInputModule, MatButtonModule
    ]
  })
  export class MaterialModule {}
