import { is, isArray } from "./is/index"

/**
 * @description 获取localStorage
 * @param { String } key Storage 名称
 * @returns string
 * 
 * */
export function localGet(key: string) {
    const value = window.localStorage.getItem(key);
    try {
        return JSON.parse(window.localStorage.getItem(key) as string);
    } catch (error) {
        return value;
    }
}
/**
 * @description 存储localStorage
 * @param { String } key Storage 名称
 * @param { Any } value Storage值
 * @returns void
 * 
 * */
export function localSet(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
}
/**
 * @description 清除localStorage
 * @param { String } key Storage 名称
 * @returns void
 * 
 * */
export function localRemove(key: string) {
    window.localStorage.removeItem(key);
}
/**
 * @description 清除所有localStorage
 * @returns void
 * */
export function localClear() {
    window.localStorage.clear();
}

/**
 * @description 对象数组深克隆
 * @param { Object } obj 源对象
 * @returns object
 * */
export function deepClone<T>(obj: any): T {
    let newObj: any;
    try {
        newObj = obj.push ? [] : {};
    } catch(error) {
        newObj = {};
    }
    for (let attr in obj) {
        if (typeof obj[attr] === "object") {
            newObj[attr] = deepClone(obj[attr]);
        } else {
            newObj[attr] = obj[attr];
        }
    }
    return newObj;
}
/**
 * @description 生成随机数
 * @param { Number } min 最小值
 * @param { Number } max 最大值
 * @returns number
 * */
export function randomNum(min: number, max: number):number {
    return Math.floor(Math.random() * (min - max) + min);
}
/**
 * @description 递归查询当前路由所对应的路由
 * @param { Array } menuList 最小值
 * @param { String } path 当前地址
 * @returns array
 * */
export function getTabPane<T, U>(menuList: any[], path: U):T {
    let result: any;
    for (let item of menuList || []) {
        if (item.path === path) {
            return result = item;
        };
        const res = getTabPane(item.children, path);
        if (res) result = res;
    }
    return result;
}
/**
 * @description 使用递归处理路由菜单，生成一维数组
 * @param { Array } menuList 所有菜单列表
 * @param { Array } newArr 菜单的一维数组
 * @returns array
 * */
export function handleRouter(routerList: Menu.MenuOptions[], newArr: string[] = []) {
    routerList.forEach((item: Menu.MenuOptions) => {
        typeof item === "object" && item.path && newArr.push(item.path);
        item.children && item.children.length && handleRouter(item.children, newArr);
    })
    return newArr;
}
/**
 * @description 扁平化数组对象
 * @param { Array } arr 数组对象
 * @returns array
 * */
export function getFlatArr(arr: any) {
    return arr.reduce((pre:any, current: any) => {
        let flatArr = [...pre, current];
        if (current.children) flatArr = [...flatArr, ...getFlatArr(current.children)];
        return flatArr;
    }, [])
}
/**
 * @description 格式化表格单元格默认值
 * @param { Number } row 行
 * @param { Number } col 列
 * @param { String } callValue 当前单元格值
 * @returns string
 * */
export function defaultFormat(row: number, col: number, callValue: any) {
    if (isArray(callValue)) return callValue.length ? callValue.join(' / ') : "--";
    return callValue ?? "--";
}
export function formatValue(callValue:any) {
    if (isArray(callValue)) return callValue.length ? callValue.join(" / ") : "--";
    return callValue ?? "--";
}

