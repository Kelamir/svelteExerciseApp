import { writable } from 'svelte/store'


export const isStarted = writable(false);
export const inputMinutes = writable(1);