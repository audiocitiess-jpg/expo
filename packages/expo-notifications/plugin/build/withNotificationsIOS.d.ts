import { ConfigPlugin, XcodeProject } from 'expo/config-plugins';
import { Props } from './withNotifications';
export declare const withNotificationsIOS: ConfigPlugin<Props>;
/**
 * Save sound files to the Xcode project root and add them to the Xcode project.
 */
export declare function setNotificationSounds(projectRoot: string, { sounds, project, projectName, }: {
    sounds: string[];
    project: XcodeProject;
    projectName: string | undefined;
}): XcodeProject;
