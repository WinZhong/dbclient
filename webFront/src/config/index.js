/**
 * Created by yujie on 2019/4/17 11:34
 */

// 根对象
const root = window.$rootScope ? window.$rootScope : {};

// rest 根路径
const restRoot = root.restRoot;


export default {
  root,
  restRoot,
}