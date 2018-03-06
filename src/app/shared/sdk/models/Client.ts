/* tslint:disable */
import {
  Order
} from '../index';

declare var Object: any;
export interface ClientInterface {
  "name"?: string;
  "surname"?: string;
  "order": number;
  "email": string;
  "role"?: string;
  "image"?: string;
  "eventDate"?: Date;
  "realm"?: string;
  "username"?: string;
  "emailVerified"?: boolean;
  "id"?: any;
  "createdAt": Date;
  "updatedAt": Date;
  "password"?: string;
  accessTokens?: any[];
  orders?: Order[];
}

export class Client implements ClientInterface {
  "name": string;
  "surname": string;
  "order": number;
  "email": string;
  "role": string;
  "image": string;
  "eventDate": Date;
  "realm": string;
  "username": string;
  "emailVerified": boolean;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  "password": string;
  accessTokens: any[];
  orders: Order[];
  constructor(data?: ClientInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Client`.
   */
  public static getModelName() {
    return "Client";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Client for dynamic purposes.
  **/
  public static factory(data: ClientInterface): Client{
    return new Client(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Client',
      plural: 'Clients',
      path: 'Clients',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "surname": {
          name: 'surname',
          type: 'string'
        },
        "order": {
          name: 'order',
          type: 'number',
          default: 0
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "role": {
          name: 'role',
          type: 'string',
          default: 'ROLE_USER'
        },
        "image": {
          name: 'image',
          type: 'string'
        },
        "eventDate": {
          name: 'eventDate',
          type: 'Date'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
        orders: {
          name: 'orders',
          type: 'Order[]',
          model: 'Order'
        },
      }
    }
  }
}
