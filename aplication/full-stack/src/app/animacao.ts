import { animate, AnimationAnimateMetadata, state, style, transition, trigger } from '@angular/animations';
import { AnimationEntryMetadata } from "@angular/core";

export const Animacao: AnimationEntryMetadata = 

trigger('routerAnimation', [
    state('*',
    style({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    transition(':enter',[
        style({
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
        animate('0.5s ease-in')
    ]),
    transition(':leave', [
        animate('0.5s ease-out', style({
            opacity: 0,
            transform: 'translateX(100%)'
        })),
    ])
]);
