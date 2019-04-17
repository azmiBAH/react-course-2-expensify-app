const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test( 'should add two numbers', () => {
    const result = add(3,5);

    expect(result).toBe(8);
});

test( 'result expected Just', () => {
    const greetingResult = generateGreeting('Just');
    expect(greetingResult).toBe('Hello Just!');
})