import {derived, writable} from 'svelte/store'


export const isStarted = writable(false);
export const inputMinutes = writable(25);
export const countdown = derived(inputMinutes, $inputMinutes => ($inputMinutes * 60));
export const timeLeft = writable(0);