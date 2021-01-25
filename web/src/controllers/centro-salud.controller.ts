import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {CentroSalud} from '../models';
import {CentroSaludRepository} from '../repositories';

export class CentroSaludController {
  constructor(
    @repository(CentroSaludRepository)
    public centroSaludRepository : CentroSaludRepository,
  ) {}

  @post('/centro-saluds', {
    responses: {
      '200': {
        description: 'CentroSalud model instance',
        content: {'application/json': {schema: getModelSchemaRef(CentroSalud)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CentroSalud, {
            title: 'NewCentroSalud',
            exclude: ['idCS'],
          }),
        },
      },
    })
    centroSalud: Omit<CentroSalud, 'idCS'>,
  ): Promise<CentroSalud> {
    return this.centroSaludRepository.create(centroSalud);
  }

  @get('/centro-saluds/count', {
    responses: {
      '200': {
        description: 'CentroSalud model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(CentroSalud) where?: Where<CentroSalud>,
  ): Promise<Count> {
    return this.centroSaludRepository.count(where);
  }

  @get('/centro-saluds', {
    responses: {
      '200': {
        description: 'Array of CentroSalud model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CentroSalud, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(CentroSalud) filter?: Filter<CentroSalud>,
  ): Promise<CentroSalud[]> {
    return this.centroSaludRepository.find(filter);
  }

  @patch('/centro-saluds', {
    responses: {
      '200': {
        description: 'CentroSalud PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CentroSalud, {partial: true}),
        },
      },
    })
    centroSalud: CentroSalud,
    @param.where(CentroSalud) where?: Where<CentroSalud>,
  ): Promise<Count> {
    return this.centroSaludRepository.updateAll(centroSalud, where);
  }

  @get('/centro-saluds/{id}', {
    responses: {
      '200': {
        description: 'CentroSalud model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CentroSalud, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CentroSalud, {exclude: 'where'}) filter?: FilterExcludingWhere<CentroSalud>
  ): Promise<CentroSalud> {
    return this.centroSaludRepository.findById(id, filter);
  }

  @patch('/centro-saluds/{id}', {
    responses: {
      '204': {
        description: 'CentroSalud PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CentroSalud, {partial: true}),
        },
      },
    })
    centroSalud: CentroSalud,
  ): Promise<void> {
    await this.centroSaludRepository.updateById(id, centroSalud);
  }

  @put('/centro-saluds/{id}', {
    responses: {
      '204': {
        description: 'CentroSalud PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() centroSalud: CentroSalud,
  ): Promise<void> {
    await this.centroSaludRepository.replaceById(id, centroSalud);
  }

  @del('/centro-saluds/{id}', {
    responses: {
      '204': {
        description: 'CentroSalud DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.centroSaludRepository.deleteById(id);
  }
}
