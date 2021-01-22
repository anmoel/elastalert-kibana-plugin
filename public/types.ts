import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface ElastAlertPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ElastAlertPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}
