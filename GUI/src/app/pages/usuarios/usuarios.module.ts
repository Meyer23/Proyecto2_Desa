// Angular
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

// Angular Material
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';


// Project
import {UsuariosRoutingModule} from './usuarios-routing.module';
import {UsuariosComponent} from './usuarios.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule} from "@angular/flex-layout";
import { UsuariosEditComponent } from './usuarios-edit.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    declarations: [UsuariosComponent, UsuariosEditComponent],
    imports: [
        CommonModule,
        UsuariosRoutingModule,
        MatCardModule,
        MatIconModule,
        MatProgressBarModule,
        MatExpansionModule,
        MatGridListModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatTableModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        FlexLayoutModule,
        MatPaginatorModule,
        FormsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UsuariosModule {
}
