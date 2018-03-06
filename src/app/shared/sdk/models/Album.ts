/* tslint:disable */
import {
  Artist,
  Song
} from '../index';

declare var Object: any;
export interface AlbumInterface {
  "title": string;
  "description"?: string;
  "year"?: string;
  "image"?: string;
  "artistId": any;
  "id"?: any;
  artist?: Artist;
  songs?: Song[];
}

export class Album implements AlbumInterface {
  "title": string;
  "description": string;
  "year": string;
  "image": string;
  "artistId": any;
  "id": any;
  artist: Artist;
  songs: Song[];
  constructor(data?: AlbumInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Album`.
   */
  public static getModelName() {
    return "Album";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Album for dynamic purposes.
  **/
  public static factory(data: AlbumInterface): Album{
    return new Album(data);
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
      name: 'Album',
      plural: 'Albums',
      path: 'Albums',
      properties: {
        "title": {
          name: 'title',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "year": {
          name: 'year',
          type: 'string'
        },
        "image": {
          name: 'image',
          type: 'string'
        },
        "artistId": {
          name: 'artistId',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        artist: {
          name: 'artist',
          type: 'Artist',
          model: 'Artist'
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
