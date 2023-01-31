export interface DataTeamInterface {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: string;
}

export interface DataContactInterface {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  registrarId: number;
}

export interface DataInvoiceInterface {
  id: number;
  name: string;
  email: string;
  cost: string;
  phone: string;
  date: string;
}

export interface TransactionsInterface {
  txId: string;
  user: string;
  date: string;
  cost: string;
}

export interface BarDataInterface {
  country: string;
  "hot dog": number;
  "hot dogColor": string;
  burger: number;
  burgerColor: string;
  kebab: number;
  kebabColor: string;
  donut: number;
  donutColor: string;
}

export interface PieDataInterface {
  id: string;
  label: string;
  value: number;
  color: string;
}

interface DataInterface {
  x: string;
  y: number;
}

export interface LineDataInterface {
  id: string;
  color: string;
  data: DataInterface[];
}

// interface coordinateInterface {

// }
// interface geometryInterface {
//   type: string;
//   coordinates:
//     | [[number, number][][]]
//     | [[number, number][][], [number, number][][]]
//     | [number[][]];
// }

// interface FeatureInterface {
//   id: string;
//   type: string;
//   properties: { name: string };
//   geometry: geometryInterface;
// }

// export interface GeoFeatureInterface {
//   type: string;
//   features: FeatureInterface[];
// }
