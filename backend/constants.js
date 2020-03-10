export const TEST_SERVER_PORT = 3033;
export const isProduction = process.env.NODE_ENV === "production";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isTest = process.env.NODE_ENV === "test";

export const PASSWORD_SALT = "$2y$12$KlMHumOX2ivRmRI6Vln0ee63u.swM5lsoM4czFLFlA/qtFZp0SgB2";