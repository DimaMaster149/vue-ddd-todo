import Vue from 'vue'

type Constructor<T> = new (...args: any[]) => T;

const context: { [s: string]: any } = {}

export function registry<T extends Constructor<{}>>(Service: T, key: string) {
  context[key] = Vue.observable(new Service())
}

export const contextMixin = {
  provide: context
}

export function get(key: string) {
  return context[key]
}
