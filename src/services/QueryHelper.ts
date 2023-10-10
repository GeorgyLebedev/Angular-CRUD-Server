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
  switch (params.condition) {
    case 'equal':
      return params.inverse ?
        await repository.find({[params.column]: params.value}) :
        await repository.find({[params.column]: Not(params.value)})
      break
    case 'more':
      return params.inverse ?
        await repository.find({[params.column]: MoreThan(params.value)}) :
        await repository.find({[params.column]: Not(MoreThan(params.value))})
      break
    case 'moreEqual':
      return params.inverse ?
        await repository.find({[params.column]: MoreThanOrEqual(params.value)}) :
        await repository.find({[params.column]: Not(MoreThanOrEqual(params.value))})
      break
    case 'less':
      return params.inverse ?
        await repository.find({[params.column]: LessThan(params.value)}) :
        await repository.find({[params.column]: Not(LessThan(params.value))})
      break
    case 'lessEqual':
      return params.inverse ?
        await repository.find({[params.column]: LessThanOrEqual(params.value)}) :
        await repository.find({[params.column]: Not(LessThanOrEqual(params.value))})
      break
    case 'in':
      return params.inverse ?
        await repository.find({[params.column]: In(params.value)}) :
        await repository.find({[params.column]: Not(In(params.value))})
      break
/*    case 'between':
      return params.inverse ?
        await repository.find({[params.column]: Between(params.value)}) :
        await repository.find({[params.column]: Not(Between(params.value))})
      break*/
    case 'like':
      return params.inverse ?
        await repository.find({[params.column]: Like(params.value)}) :
        await repository.find({[params.column]: Not(Like(params.value))})
      break
    case 'isNotEmpty':
      return params.inverse ?
        await repository.find({[params.column]: IsNull()}) :
        await repository.find({[params.column]: Not(IsNull())})
      break
  }
}
