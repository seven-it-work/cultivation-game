package com.seven.server.entity;

import cn.hutool.core.math.MathUtil;
import com.seven.server.entity.talent.TalentEnum;
import lombok.Data;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 修炼对象
 */
@Data
public class CultivationObj {
    private String id;
    private String name;
    private double lingLi;
    private int physique;
    private HashMap<TalentEnum, Integer> talentMap = new HashMap<TalentEnum, Integer>();
    private double currentLife;
    private double currentSpirit;
    private List<String> relationshipObject;

    /**
     * 获取等级
     *
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
     * 等级*体质天赋+体质相关物品加成
     *
     * @return
     */
    public double getLifeValue() {
        return this.getLevel() * talentMap.getOrDefault(TalentEnum.PHYSIQUE, 0) + this.getItemBonus(TalentEnum.PHYSIQUE);
    }

    /**
     * 精神值
     * <p>
     * 等级*精力天赋+精力相关物品加成
     *
     * @return
     */
    public double getSpiritValue() {
        return this.getLevel() * talentMap.getOrDefault(TalentEnum.ENERGY, 0) + this.getItemBonus(TalentEnum.ENERGY);
    }

    /**
     * 攻击力
     * 等级*灵根天赋+灵根相关物品加成+装备物品类型天赋加成
     *
     * @return
     */
    public double getAttackValue() {
        return this.getLevel() * talentMap.getOrDefault(TalentEnum.LING_GEN, 0) + this.getItemBonus(TalentEnum.LING_GEN) + this.getItemAttackBonus();
    }

    /**
     * 防御力
     * <p>
     * 等级*体魄天赋+体魄相关物品加成
     *
     * @return
     */
    public double getDefenseValue() {
        return this.getLevel() * talentMap.getOrDefault(TalentEnum.BODY, 0) + this.getItemBonus(TalentEnum.BODY);
    }


    /**
     * 物品加成
     *
     * @return
     */
    public double getItemBonus(TalentEnum talentEnum) {
        return 0;
    }

    /**
     * 物品攻击力加成
     * - 剑根 装备剑时，提升的攻击力，也就是攻击天赋
     * - 刀根 ，提升的攻击力，也就是攻击天赋
     * - 拳根 ，提升的攻击力，也就是攻击天赋
     * - 暗器根 ，提升的攻击力，也就是攻击天赋
     * - 枪根 ，提升的攻击力，也就是攻击天赋
     * - 弓根 ，提升的攻击力，也就是攻击天赋
     *
     * @return
     */
    public double getItemAttackBonus() {
        return 0;
    }

    /**
     * 精神比例
     *
     * @return
     */
    public double getSpiritProportion() {
        return this.currentLife / this.getSpiritValue();
    }

    public boolean canDoAttack() {
        return this.currentSpirit >= 2;
    }

    /**
     * 普通攻击照成伤害
     * 每次普通攻击消耗2点精力，精力小于2不能攻击
     * <p>
     * 攻击力*精力比-对方防御力*精力比
     *
     * @param cultivationObj 攻击对方
     */
    public void doOrdinaryAttack(CultivationObj cultivationObj) {
        if (this.canDoAttack()) {
            this.currentSpirit -= 2;
            double harm = this.getAttackValue() * this.getSpiritProportion() - cultivationObj.getDefenseValue() * cultivationObj.getSpiritProportion();
            cultivationObj.currentLife -= harm;
        }
    }

    /**
     * 判断是否能执行恢复
     */
    public boolean canDoRecover() {
        return this.getSpiritProportion() <= 0.3;
    }

    /**
     * 恢复生命、精力
     * 等级*恢复天赋+恢复相关物品加成
     *
     * @return
     */
    public void doRecover() {
        if (this.canDoRecover()) {
            double recoverValue = this.getLevel() * talentMap.getOrDefault(TalentEnum.SELF_HEALING, 0) + this.getItemBonus(TalentEnum.SELF_HEALING);
            this.currentLife += recoverValue;
            this.currentSpirit += recoverValue;
        }
    }

    /**
     * 执行修炼
     *
     * @return
     */
    public double doPractice(String space) {
        return 0;
    }
}
