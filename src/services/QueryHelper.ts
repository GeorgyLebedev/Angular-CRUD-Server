import {
  Between,
  In,
  IsNull,
  LessThan,
  LessThanOrEqual,
  Like,
  MoreThan,
  MoreThanOrEqual,
  Not,
  Repository
} from "typeorm";
import {iCondition} from "../interfaces/iCondition";

export const findAllWithConditions = async (repository: Repository<any>, params: iCondition) => {
  let result
  params.inverse = (params.inverse.toString() === 'true')
  switch (params.condition) {
    case 'equal':
      result = params.inverse ?
        await repository.find({where: {[params.column]: Not(params.value)}}) :
        await repository.find({where: {[params.column]: params.value}})
      break
    case 'more':
      result = params.inverse ?
        await repository.find({where: {[params.column]: Not(MoreThan(params.value))}}) :
        await repository.find({where: {[params.column]: MoreThan(params.value)}})
      break
    case 'moreEqual':
      result = params.inverse ?
        await repository.find({where: {[params.column]: Not(MoreThanOrEqual(params.value))}}) :
        await repository.find({where: {[params.column]: MoreThanOrEqual(params.value)}})
      break
    case 'less':
      result = params.inverse ?
        await repository.find({where: {[params.column]: Not(LessThan(params.value))}}) :
        await repository.find({where: {[params.column]: LessThan(params.value)}})
      break
    case 'lessEqual':
      result = params.inverse ?
        await repository.find({where: {[params.column]: Not(LessThanOrEqual(params.value))}}) :
        await repository.find({where: {[params.column]: LessThanOrEqual(params.value)}})
      break
    case 'in':
      result = params.inverse ?
        await repository.find({where: {[params.column]: Not(In(params.value))}}) :
        await repository.find({where: {[params.column]: In(params.value)}})
      break
    case 'between':
      result = params.inverse ?
        await repository.find({where: {[params.column]: Not(Between(params.valueArray.toString().split(',')[0], params.valueArray.toString().split(',')[1]))}}) :
        await repository.find({where: {[params.column]: Between(params.valueArray.toString().split(',')[0], params.valueArray.toString().split(',')[1])}})
      break
    case 'like':
      result = params.inverse ?
        await repository.find({where: {[params.column]: Not(Like(params.value))}}) :
        await repository.find({where: {[params.column]: Like(params.value)}})
      break
    case 'isEmpty':
      result = params.inverse ?
        await repository.find({where: {[params.column]: Not(IsNull())}}) :
        await repository.find({where: {[params.column]: IsNull()}})
      break
  }

  return result
}
