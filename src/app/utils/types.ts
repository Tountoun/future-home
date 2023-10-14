export enum Gender {
     MALE = 'MALE',
     FEMALE = 'FEMALE',
}

export enum Role {
     ADMIN = 'ADMIN',
     USER = 'USER',
}

export interface HLocation {
     id: number;
     name: string;
     city: string;
     state: string;
     photo: string;
     availableUnits: number;
     wifi: boolean;
     laundry: boolean;
}

export interface HProperty {
     property: string;
     value: string;
}

export interface User {
     id: string;
     name: string;
     email: string;
     password: string;
     gender: Gender;
     role: Role;
     country: string;
}

export interface Country {
     name: string;
     continent: string;
}

export interface Group {
     continent: string;
     countries: Country[];
}

export interface RemoteCountry {
     name: {
          common: string;
          official: string;
          nativeName: {
               [key: string]: {
                    official: string;
                    common: string;
               };
          };
     };
     tld: string[];
     cca2: string;
     ccn3: string;
     cca3: string;
     cioc: string;
     independent: boolean;
     status: string;
     unMember: boolean;
     currencies: {
          [key: string]: {
               name: string;
               symbol: string;
          };
     };
     idd: {
          root: string;
          suffixes: string[];
     };
     capital: string[];
     altSpellings: string[];
     region: string;
     subregion: string;
     languages: {
          [key: string]: string;
     };
     translations: {
          [key: string]: {
               official: string;
               common: string;
          };
     };
     lating: number[];
     landlocked: boolean;
     borders: string[];
     area: number;
     demonyms: {
          [key: string]: {
               f: string;
               m: string;
          };
     };
     flag: string;
     maps: {
          googleMaps: string;
          openStreetMaps: string;
     };
     population: number;
     gini: {
          [key: string]: number;
     };
     fifa: string;
     car: {
          signs: string[];
          side: string;
     };
     timezones: string[];
     continents: string[];
     flags: {
          png: string;
          svg: string;
          alt: string;
     };
     coatOfArms: {
          png: string;
          svg: string;
     };
     startOfWeek: string;
     capitalInfo: {
          latlng: number[];
     };
}
interface e {
     name: {
          common: string;
          official: string;
          nativeName: {
               [key: string]: {
                    official: string;
                    common: string;
               };
          };
     };
     tld: string[];
     cca2: string;
     ccn3: string;
     cca3: string;
     cioc: string;
     independent: boolean;
     status: string;
     unMember: boolean;
     currencies: {
          [key: string]: {
               name: string;
               symbol: string;
          };
     };
     idd: {
          root: string;
          suffixes: string[];
     };
     capital: string[];
     altSpellings: string[];
     region: string;
     subregion: string;
     languages: {
          [key: string]: string;
     };
     translations: {
          [key: string]: {
               official: string;
               common: string;
          };
     };
     latlng: number[];
     landlocked: boolean;
     borders: string[];
     area: number;
     demonyms: {
          [key: string]: {
               f: string;
               m: string;
          };
     };
     flag: string;
     maps: {
          googleMaps: string;
          openStreetMaps: string;
     };
     population: number;
     gini: {
          [key: string]: number;
     };
     fifa: string;
     car: {
          signs: string[];
          side: string;
     };
     timezones: string[];
     continents: string[];
     flags: {
          png: string;
          svg: string;
          alt: string;
     };
     coatOfArms: {
          png: string;
          svg: string;
     };
     startOfWeek: string;
     capitalInfo: {
          latlng: number[];
     };
}
