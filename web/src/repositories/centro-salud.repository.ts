import {DefaultCrudRepository} from '@loopback/repository';
import {CentroSalud, CentroSaludRelations} from '../models';
import {DbMongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CentroSaludRepository extends DefaultCrudRepository<
  CentroSalud,
  typeof CentroSalud.prototype.idCS,
  CentroSaludRelations
> {
  constructor(
    @inject('datasources.dbMongo') dataSource: DbMongoDataSource,
  ) {
    super(CentroSalud, dataSource);
  }
}
