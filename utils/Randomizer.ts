// utils/randomizer.ts
export function randomEmail(email: string): string {
    return email.replace('@', `+${Date.now()}@`)
}
