/* tslint:disable */
import {
  Album
} from '../index';

declare var Object: any;
export interface SongInterface {
  "number": number;
  "name": string;
  "duration"?: string;
  "file"?: string;
  "artistId"?: any;
  "albumId": any;
  "id"?: any;
  album?: Album;
}

export class Song implements SongInterface {
  "number": number;
  "name": string;
  "duration": string;
  "file": string;
  "artistId": any;
  "albumId": any;
  "id": any;
  album: Album;
  constructor(data?: SongInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Song`.
   */
  public static getModelName() {
    return "Song";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Song for dynamic purposes.
  **/
  public static factory(data: SongInterface): Song{
    return new Song(data);
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
      name: 'Song',
      plural: 'Songs',
      path: 'Songs',
      properties: {
        "number": {
          name: 'number',
          type: 'number'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "duration": {
          name: 'duration',
          type: 'string'
        },
        "file": {
          name: 'file',
          type: 'string'
        },
        "artistId": {
          name: 'artistId',
          type: 'any'
        },
        "albumId": {
          name: 'albumId',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        album: {
          name: 'album',
          type: 'Album',
          model: 'Album'
        },
      }
    }
  }
}
