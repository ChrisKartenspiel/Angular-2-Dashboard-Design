/* tslint:disable */
import {
  Client
} from '../index';

declare var Object: any;
export interface OrderInterface {
  "type"?: string;
  "amount": number;
  "id"?: any;
  "clientId"?: any;
  "createdAt": Date;
  "updatedAt": Date;
  client?: Client;
}

export class Order implements OrderInterface {
  "type": string;
  "amount": number;
  "id": any;
  "clientId": any;
  "createdAt": Date;
  "updatedAt": Date;
  client: Client;
  constructor(data?: OrderInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Order`.
   */
  public static getModelName() {
    return "Order";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Order for dynamic purposes.
  **/
  public static factory(data: OrderInterface): Order{
    return new Order(data);
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
      name: 'Order',
      plural: 'orders',
      path: 'orders',
      properties: {
        "type": {
          name: 'type',
          type: 'string'
        },
        "amount": {
          name: 'amount',
          type: 'number',
          default: 0
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "clientId": {
          name: 'clientId',
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
      },
      relations: {
        client: {
          name: 'client',
          type: 'Client',
          model: 'Client'
        },
      }
    }
  }
}
