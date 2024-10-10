# DevFest24-Software-teaming

## Bienvenu.e.s à cet atelier

### Kata Nearest color

Introduction
Une couleur est faite de trois composants : rouge, vert et bleu. En informatique, on représente les couleurs en mélangeant ces trois composants. Chaque composant peut avoir une valeur allant de 0 (absence de la couleur) à 255 (couleur maximale). Parfois, on utilise aussi des nombres hexadécimaux (entre 00 et FF) pour représenter ces valeurs, où 00 équivaut à 0 et FF à 255 en décimal.

Lorsqu’on écrit une couleur en hexadécimal, les deux premiers chiffres représentent le rouge, les deux suivants le vert, et les deux derniers le bleu.

Par exemple :

FF0000 représente du rouge
00FF00 représente du vert
0000FF représente du bleu
Pour cet exercice, on utilise une version simplifiée, avec seulement 3 chiffres :

F00 pour le rouge (FF0000)
0F0 pour le vert (00FF00)
00F pour le bleu (0000FF)
Partie 1 : Trouver la couleur la plus proche

L’idée est de prendre une couleur (comme F42) et de deviner laquelle, parmi F00 (rouge), 0F0 (vert), et 00F (bleu), est la plus proche.

Exemple : La couleur la plus proche de F42 est F00 (rouge).

Partie 2 : Cas d’égalité

Il est possible que plusieurs couleurs soient à égalité pour être les plus proches. Dans ce cas, on les liste toutes.

Exemple : Le jaune FF0 est fait à partir de rouge (F00) et de vert (0F0), donc les deux couleurs sont les plus proches.

Bonus

Refais l’exercice avec des couleurs à 6 chiffres.
Trouve la couleur la plus éloignée.
Compare les couleurs avec des mots-clés.

---

Introduction
A color is composed by an amount of red, green and blue.
In computer science, a way to represent a color is to compose between these three amount of colors.
Each amount of color have a presence from 0 (the color is absent) to 255 (full presence of color).
But, because some developers love hexadecimal, they decided to use numbers between 0 and F. So, 00 means 0 in decimal and FF means 255 in decimal.

For color composition, the first pair of digits are used for the red, the second pair for the green and last pair for the blue.

The hexadecimal representation of the colors looks like:

FF0000 for red
00FF00 for green
0000FF for blue
But, for the exercice we decided to represent colors with only 3 digits, so the alias will be:

F00 for FF0000
0F0 for 00FF00
00F for 0000FF
Part 1: nearest color
The idea is to use a set of colors (F00, 0F0, 00F) and guess the nearest color from the set.

Example: the nearest color of F42 is F00.

Part 2: equality
The idea is to list all the colors in equality cases, because, sometimes, more than one color is the nearest color.

Example: because yellow FF0 is composed by red F00 and green 0F0, the nearest colors are both of them.

Bonus
Do the same with 6 digit hexadecimal colors
Find the farthest color
Compare with color keywords
