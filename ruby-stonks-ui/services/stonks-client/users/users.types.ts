
export enum StonksUserIdentityProviderType {
    Github
}

export type StonksUserIdentity = Readonly<{
    provider: StonksUserIdentityProviderType,
    providerId: string,
}>

export type StonksUser = Readonly<{
    userId: string,
    email: string,
    identities: readonly StonksUserIdentity[],
}>

export type StonksUsersClient = Readonly<{
    UpsertUser(user: StonksUser): Promise<StonksUser>
}>