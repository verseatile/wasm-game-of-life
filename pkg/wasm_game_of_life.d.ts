/* tslint:disable */
export enum Cell {
  Dead,
  Alive,
}
/**
*/
/**
*/
export class Universe {
  free(): void;
/**
* @returns {number} 
*/
  width(): number;
/**
* @returns {number} 
*/
  height(): number;
/**
* @returns {number} 
*/
  cells(): number;
/**
* @returns {Universe} 
*/
  static new(): Universe;
/**
* @returns {string} 
*/
  render(): string;
/**
*/
  tick(): void;
}
