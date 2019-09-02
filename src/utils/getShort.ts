import uuidv4 from "uuid/v4";

export const getShort = () => uuidv4().substr(0, 8);
