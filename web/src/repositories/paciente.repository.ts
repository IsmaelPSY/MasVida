import {DefaultCrudRepository} from '@loopback/repository';
import {Paciente, PacienteRelations} from '../models';
import {DbMongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PacienteRepository extends DefaultCrudRepository<
  Paciente,
  typeof Paciente.prototype.idP,
  PacienteRelations
> {
  constructor(
    @inject('datasources.dbMongo') dataSource: DbMongoDataSource,
  ) {
    super(Paciente, dataSource);
  }
}
