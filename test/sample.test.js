/**
 * Sample JavaScript/Node.js Test File
 * Uses the built-in Node.js `assert` module — no extra dependencies needed.
 */

const assert = require("assert");

// ── Helper functions to test ──────────────────────────────────────────────────

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Division by zero is not allowed.");
  return a / b;
}

function greet(name) {
  if (!name || name.trim() === "") throw new Error("Name cannot be empty.");
  return `Hello, ${name}!`;
}

// ── Test runner (lightweight, no framework needed) ───────────────────────────

let passed = 0;
let failed = 0;

function test(description, fn) {
  try {
    fn();
    console.log(`  ✅  ${description}`);
    passed++;
  } catch (err) {
    console.error(`  ❌  ${description}`);
    console.error(`       → ${err.message}`);
    failed++;
  }
}

// ── Test cases ────────────────────────────────────────────────────────────────

console.log("\n📋  Running sample tests…\n");

// Addition
test("add(2, 3) should equal 5", () => {
  assert.strictEqual(add(2, 3), 5);
});

test("add(-1, 1) should equal 0", () => {
  assert.strictEqual(add(-1, 1), 0);
});

// Subtraction
test("subtract(10, 4) should equal 6", () => {
  assert.strictEqual(subtract(10, 4), 6);
});

// Multiplication
test("multiply(3, 7) should equal 21", () => {
  assert.strictEqual(multiply(3, 7), 21);
});

test("multiply(0, 99) should equal 0", () => {
  assert.strictEqual(multiply(0, 99), 0);
});

// Division
test("divide(10, 2) should equal 5", () => {
  assert.strictEqual(divide(10, 2), 5);
});

test("divide(7, 2) should equal 3.5", () => {
  assert.strictEqual(divide(7, 2), 3.5);
});

test("divide by zero should throw an error", () => {
  assert.throws(() => divide(5, 0), /Division by zero/);
});

// Greet
test('greet("World") should return "Hello, World!"', () => {
  assert.strictEqual(greet("World"), "Hello, World!");
});

test("greet with empty string should throw an error", () => {
  assert.throws(() => greet(""), /Name cannot be empty/);
});

// ── Summary ───────────────────────────────────────────────────────────────────

console.log(`\n────────────────────────────────────`);
console.log(`  Results: ${passed} passed, ${failed} failed`);
console.log(`────────────────────────────────────\n`);

if (failed > 0) process.exit(1);
