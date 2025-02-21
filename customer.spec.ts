import { get } from "http";
import { describe, it, expect } from "vitest";

const getPrice = (tableau?: number[]) => {
  if (tableau?.length) return tableau.length * 800;
  return 0;
};

describe("super test getPrice", () => {
  it("Si aucune offre n'est achetée, alors le prix d'achat est de 0", () => {
    //Given
    //When
    const result = getPrice();
    //Then
    expect(result).toBe(0);
  });

  it("Si on prend l'offre 1, on retourne 800", () => {
    // Given
    // When
    const result = getPrice([1]);
    // Then
    expect(result).toBe(800);
  });

  it("Si on achète 2 fois l'offre 1, on retourne 1600", () => {
    // Given
    // When
    const result = getPrice([1, 1]);
    // Then
    expect(result).toBe(1600);
  });
});
