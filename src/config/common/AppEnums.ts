export enum UserType {
  client,
  admin,
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

export const jwtTokens = Object.freeze({
  USER_REFRESH_TOKEN: "refreshToken",
  USER_ACCESS_TOKEN: "accessToken",
});

export const localStorageData = Object.freeze({
  USER_DATA: "UserData",
});

