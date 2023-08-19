import { customAlphabet } from "nanoid";

// generate Id for task with numbers
export const nanoid = customAlphabet("1234567890", 10);