import { IEnumItem } from './i-enum-item';
import { IEnumItemData } from './i-enum-item-data';

/**
 * 枚举接口
 */
export interface IEnum<T extends IEnumItemData> {
    /**
     * 所有枚举项
     */
    readonly items: Promise<IEnumItem<T>[]>;
    /**
     * 获取满足条件的单个枚举项
     * 
     * @param predicate 断言
     */
    get(predicate: (data: T) => boolean): Promise<IEnumItem<T>>;
    /**
     * 根据值获取枚举项
     * 
     * @param v 值
     */
    getByValue(v: number): Promise<IEnumItem<T>>;
}