import { describe, it, expect } from "vitest";

const guessNearestColor = () => {
  return "let's have fun together";
};

describe("My first mob kata", () => {
  it("", () => {
    //Given

    //When
    const nearestColor = guessNearestColor();

    //Then
    expect(nearestColor).toBeDefined();
  });
});
