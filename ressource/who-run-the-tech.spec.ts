import { describe, it, expect } from "vitest";

const guessNearestColor = (startColor: string) => {
  return startColor;
};

describe("Guess nearest primary colors", () => {
  it("F00 nearest color is F00", () => {
    //Given
    const startColor = "F00";

    //When
    const nearestColor = guessNearestColor(startColor);

    //Then
    expect(nearestColor).toEqual("F00");
  });

  it("0F0 nearest color is 0F0", () => {
    //Given
    const startColor = "0F0";

    //When
    const nearestColor = guessNearestColor(startColor);

    //Then
    expect(nearestColor).toEqual("0F0");
  });

  it("00F nearest color is 00F", () => {
    //Given
    const startColor = "00F";

    //When
    const nearestColor = guessNearestColor(startColor);

    //Then
    expect(nearestColor).toEqual("00F");
  });

  it("F42 nearest color is F00", () => {
    //Given
    const startColor = "F42";

    //When
    const nearestColor = guessNearestColor(startColor);

    //Then
    expect(nearestColor).toEqual("F00");
  });
});
