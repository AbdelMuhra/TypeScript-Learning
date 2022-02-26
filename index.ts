export type User = unknown;

export const users: unknown[] = [
    {
        name: 'Abdel Ghani Muhra',
        age: 21,
        occupation: 'Student'
    },
    {
        name: 'John Danaher',
        age: 400,
        occupation: 'Jiu-Jitsu'
    }
];

export function logPerson(user: unknown) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);
