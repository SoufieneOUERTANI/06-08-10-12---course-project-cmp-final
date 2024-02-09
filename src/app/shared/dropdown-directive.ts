import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector : '[appDropdown]'
})
export class DropdownDirective{

    // https://angular.io/api/core/HostBinding
    // The DOM property that is bound to a data property. This field also accepts:
        // classes, prefixed by class.
        // styles, prefixed by style.
        // attributes, prefixed by attr.

    @HostBinding('class.open') isOpen : boolean = false;

    // https://angular.io/api/core/HostListener
    // https://stackoverflow.com/questions/47771120/angular-is-there-list-of-hostlistener-events
    // https://github.com/angular/angular/blob/main/packages/compiler/src/schema/dom_element_schema_registry.ts#L78
    @HostListener('click') clickToggle(eventData :Event){
      this.isOpen = ! this.isOpen;
    }

}