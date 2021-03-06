import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-counting',
    templateUrl: './counting.component.html',
    styleUrls: ['./counting.component.css']
})
export class CountingComponent{
    @Input()
    counting: string;
    firstname: string;
    lastname: string;
    constructor(){}
}