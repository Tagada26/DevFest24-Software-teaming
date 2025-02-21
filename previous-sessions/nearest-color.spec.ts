import { describe, it, expect } from "vitest";

const guessNearestColor = (startColor: string) => {
  var colors = startColor.split("");
  var redValue = colors[0];
  var greenValue = colors[1];
  // todo transformer les lettres en valeurs ?
  if (redValue == "F") return "red";
  if (greenValue == "F") return "green";
  return null;
};

describe("Guess nearest primary colors", () => {
  it("red is win ", () => {
    //Given
    const startColor = "F00";

    //When
    const nearestColor = guessNearestColor(startColor);

    //Then
    expect(nearestColor).toBeDefined;
    expect(nearestColor).toEqual("red");
  });
  it("green is win ", () => {
    //Given
    const startColor = "0F0";
    //When
    const nearestColor = guessNearestColor(startColor);

    //Then
    expect(nearestColor).toBeDefined;
    expect(nearestColor).toEqual("green");
  });
});
