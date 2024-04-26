import { addition } from "./math";
import { test, expect } from "vitest";

test("testing addition method", () => {
  expect(addition(2, 4)).toEqual(6);
});
