/* tslint:disable */
import {
  Album,
  Song
} from '../index';

declare var Object: any;
export interface ArtistInterface {
  "name": string;
  "description": string;
  "image"?: string;
  "id"?: any;
  albums?: Album[];
  songs?: Song[];
}

export class Artist implements ArtistInterface {
  "name": string;
  "description": string;
  "image": string;
  "id": any;
  albums: Album[];
  songs: Song[];
  constructor(data?: ArtistInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Artist`.
   */
  public static getModelName() {
    return "Artist";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Artist for dynamic purposes.
  **/
  public static factory(data: ArtistInterface): Artist{
    return new Artist(data);
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
      name: 'Artist',
      plural: 'Artists',
      path: 'Artists',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "image": {
          name: 'image',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        albums: {
          name: 'albums',
          type: 'Album[]',
          model: 'Album'
        },
        songs: {
          name: 'songs',
          type: 'Song[]',
          model: 'Song'
        },
      }
    }
  }
}
