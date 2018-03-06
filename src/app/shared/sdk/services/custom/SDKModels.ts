/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Attachment } from '../../models/Attachment';
import { Client } from '../../models/Client';
import { Artist } from '../../models/Artist';
import { Album } from '../../models/Album';
import { Song } from '../../models/Song';
import { Order } from '../../models/Order';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Attachment: Attachment,
    Client: Client,
    Artist: Artist,
    Album: Album,
    Song: Song,
    Order: Order,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
