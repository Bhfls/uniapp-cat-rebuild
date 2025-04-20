//TODO:模拟数据
/**
 * @typedef {Object} CatItem
 * @property {number} id - 猫咪ID
 * @property {string} color - 猫咪颜色
 * @property {string} name - 猫咪名称
 * @property {string} description - 猫咪描述
 * @property {string} image - 猫咪头像
 * @property {string} state - 猫咪状态
 * @property {boolean} isNeutered - 猫咪是否绝育
 * @property {string} frequentlyFrequentedLocations - 猫咪常去地点
 * @property {boolean} isMale - 猫咪性别
 *
 * @type {import('vue').PropType<CatItem[]> }
 */
export const cats = [
    {
        id: 1,
        name: '小花',
        color: '白色',
        description: '小花是一只非常可爱的猫咪，非常活泼可爱，喜欢玩耍。',
        image: '../../static/cat1.png',
        state: '健康',
        isNeutered: true,
        frequentlyFrequentedLocations: '公园、小区',
        isMale: true,
    },
    {
        id:2,
        name: '小黑',
        color: '黑色',
        short_description: '非常沉默的猫咪，非常懒懒，不活跃。',
        image: '../../static/cat2.png',
        state: '健康',
        isNeutered: false,
        frequentlyFrequentedLocations: '公园、小区',
        isMale: false,
    },
    {
        id:3,
        name: '小黄',
        color: '黄色',
        short_description: '小黄是一只非常可爱的猫咪，非常活泼可爱，喜欢玩耍。',
        image: '../../static/cat3.png',
        state: '健康',
        isNeutered: true,
        frequentlyFrequentedLocations: '公园、小区',
        isMale: true,
    }
]