export enum UserType {
  client,
  admin,
}

export enum APPOINTMENT_TYPE {
  SIMPLE=1,
  COMPLEX=2
}

export enum STATUS {
  PENDING = 0,
  APPROVED,
  RUNNING,
  COMPLETE,
  CANCELLED
}

export enum PRICINGTYPE{
  HOURLY_BASIS = 1,
  ONE_TIME_BASIS,
  MILESTONE_BASIS,
}

export enum DOCTYPE{
  DESIGN = 1,
  TECHNICAL = 2,
  ARCHIVE = 3
}

export const jwtTokens = Object.freeze({
  USER_REFRESH_TOKEN: "refreshToken",
  USER_ACCESS_TOKEN: "accessToken",
});

export const localStorageData = Object.freeze({
  USER_DATA: "UserData",
});

