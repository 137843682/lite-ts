import { valueInterceptorMetadata } from './interceptor-metadata';
import { IValueInterceptor } from '../../contract';
import { enum_ } from '../../model';

/**
 * 数值拦截器
 * 
 * @param valueType 数值类型
 */
export function ValueIntercept(valueType: number): (ctor: new () => IValueInterceptor) => void;

/**
 * 数值拦截器
 * 
 * @param predicate 断言
 */
export function ValueIntercept(predicate: (entry: enum_.ValueTypeData) => boolean): (ctor: new () => IValueInterceptor) => void;

/**
 * 数值拦截装饰器
 * 
 * @param any 数值类型或断言
 */
export function ValueIntercept(any: number | ((entry: enum_.ValueTypeData) => boolean)) {
    return (ctor: new () => IValueInterceptor) => {
        if (typeof any == 'number') {
            valueInterceptorMetadata.valueType[any] = ctor;
        }
        else {
            valueInterceptorMetadata.predicates.push({
                ctor,
                predicate: any,
            });
        }
    };
}
