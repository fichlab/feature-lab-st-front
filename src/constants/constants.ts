export const EMAIL_REG_EX = '^\\S+@\\S+\\.\\S+$';
export const NAME_REG_EX = '^[A-Za-zА-Яа-яЁё \\-]+$';
export const MIN_LENGTH_NAME = 2;
export const MAX_LENGTH_NAME = 60;
export const MIN_LENGTH_EMAIL = 6;
export const MAX_LENGTH_EMAIL = 60;
export const MIN_LENGTH_PROJECT = 15;
export const MAX_LENGTH_PROJECT = 500;

export const ROUTE_HOME = '/';
export const ROUTE_COMPETENCIES = '/competencies';

// competencies subroutes
export const SUBROUTE_GAMEDEV = `gamedev`;

// full route paths for subroutes
export const ROUTE_GAMEDEV = `${ROUTE_COMPETENCIES}/${SUBROUTE_GAMEDEV}`;
