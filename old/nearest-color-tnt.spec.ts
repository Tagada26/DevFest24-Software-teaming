import { describe, it, expect } from "vitest";

const RED = "F00";
const GREEN = "0F0";
const BLUE = "00F";

const guessNearestColor = (color: string) => {
  if (color === GREEN) return GREEN;
  return RED;
};

// Exemple : La couleur la plus proche de F42 est F00 (rouge).
describe("My first mob kata", () => {
  it("La couleur la plus proche de F42 est F00 (rouge).", () => {
    const testColor = "F42";

    const nearestColor = guessNearestColor(testColor);

    expect(nearestColor).toBe(RED);
  });
  it("La couleur la plus proche de 0F0 est 0F0 (vert).", () => {
    const testColor = "0F0";

    const nearestColor = guessNearestColor(testColor);

    expect(nearestColor).toBe("0F0");
  });
});
