import { NgModule } from "@angular/core";
import { count } from "rxjs";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
    declarations: [
      CounterComponent
    ],
    exports: [
      CounterComponent
    ],
})

export class CounterModule {
}
