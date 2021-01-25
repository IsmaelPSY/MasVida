import {Entity, model, property} from '@loopback/repository';

@model()
export class Paciente extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombreP: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idP?: string;

  @property({
    type: 'number',
    required: true,
  })
  edadP: number;

  @property({
    type: 'number',
    required: true,
  })
  estaturaP: number;

  @property({
    type: 'string',
  })
  temperaturaP?: string;

  @property({
    type: 'string',
  })
  alergiasP?: string;

  @property({
    type: 'string',
    required: true,
  })
  sintomasP: string;


  constructor(data?: Partial<Paciente>) {
    super(data);
  }
}

export interface PacienteRelations {
  // describe navigational properties here
}

export type PacienteWithRelations = Paciente & PacienteRelations;
