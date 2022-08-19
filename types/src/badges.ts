import { Abstract } from "./utility";

export type BadgeType = Abstract<string, 'BadgeType'>;

export const BadgeType = {
  Dfdao: 'Dfdao' as BadgeType,
  StartYourEngine: 'StartYourEngine' as BadgeType
} as const;