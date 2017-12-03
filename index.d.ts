export const cities: {
  /**
   * cityName: [lng, lat]
   */
  [key: string]: [number, number];
}

export const provinces: {
  /**
   * provinceName: [lng, lat]
   */
  [key: string]: [number, number];
}

export function findCity(cityName: string): null | [number, number]