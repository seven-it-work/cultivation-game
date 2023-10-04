package com.seven.server.entity;

import cn.hutool.core.math.MathUtil;

/**
 * 修炼对象
 */
public class CultivationObj {
    private String id;
    private String name;
    private double lingLi;
    private int physique;

    /**
     * 获取等级
     * @return
     */
    public double getLevel() {
        if (this.lingLi <= 0) {
            return 0;
        }
        return Math.log(this.lingLi) / Math.log(2);
    }

    /**
     * 生命值
     * @return
     */
    public double getLifeValue(){
        return this.getLevel() * physique + this.getItemBonus("life");
    }

    /**
     * 物品加成
     * @return
     */
    public double getItemBonus(String type){
        return 0;
    }


}
