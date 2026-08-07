export interface ConfigType {
    ProjectName: string
    use_typeScript: boolean
    features: string[]
    css_framework: string
    repository: boolean
    gitConfig?: string[]
    vuetify?: string
    piniaPersistPlugin?: string[]
}