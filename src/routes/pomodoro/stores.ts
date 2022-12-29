import { writable } from 'svelte/store'

export let interval;
export const inputMinutes = writable(25);
export const countdown = writable((inputMinutes) * 60);
export const started = writable(false);
