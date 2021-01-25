import {Entity, model, property} from '@loopback/repository';

@model()
export class CentroSalud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idCS?: string;

  @property({
    type: 'string',
    required: true,
  })
  decripcionCS: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreCS: string;

  @property({
    type: 'string',
    required: true,
  })
  direccionCS: string;

  @property({
    type: 'string',
    required: true,
  })
  telefonoCS: string;


  constructor(data?: Partial<CentroSalud>) {
    super(data);
  }
}

export interface CentroSaludRelations {
  // describe navigational properties here
}

export type CentroSaludWithRelations = CentroSalud & CentroSaludRelations;
