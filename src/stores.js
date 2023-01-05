import { writable } from 'svelte/store'


export const isStarted = writable(false);
export const isFinished = writable(false);
export const isTimeToResetInterval = writable(false);
export const inputMinutes = writable(0.1);
