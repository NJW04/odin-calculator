# odin-calculator
A calculator with working and interactive UI.
However this calculator operates differently, as it does not take into account BEDMAS. It will sequentially go through the entered equation, using the answer from the first sum, as the starting point for the next sum. 
E.g. 2 + 8 ÷ 2 = 5 rather than 6 because it went, 2 + 8 = 10 first, then went 10 ÷ 2 = 5.
I've tried to prevent user error as best I can, not allowing multiple '.'s for a single number, e.g. "2..3 + 2" and not allowing the chaining of signs without a number between, e.g. "2++3".
