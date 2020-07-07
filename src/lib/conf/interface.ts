
interface ConfigurationSource {
  [key: string]: any
};

export interface IConfigurationsLoader<T extends ConfigurationSource> {
  load: () => Promise<T>;
}
