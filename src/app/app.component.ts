import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gig';



countries = [
    {"key":"1","value":"1"},
    {"key":"1","value":"2"},
    {"key":"1","value":"3"},
    {"key":"1","value":"4"},
    {"key":"1","value":"5"}
];

countrycode = [
    {"key":"1","value":"+1"},
    {"key":"2","value":"+2"},
    {"key":"3","value":"+3"},
    {"key":"4","value":"+4"},
    {"key":"5","value":"+5"}
];




styleGuide = {
    caretClass: 'caret',
    selectBoxClass: 'dropdown-wrapper',
    selectMenuClass: 'dropdown',
    optionsClass: 'option' 
};
}
