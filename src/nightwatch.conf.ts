import {NightwatchOptions} from 'nightwatch'
import paths from './paths';

const settings: NightwatchOptions = {
    src_folders: [paths.tests],
    test_settings: {
        
    }
};

export = settings;