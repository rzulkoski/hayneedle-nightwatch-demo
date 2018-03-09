// import {NightwatchOptions} from 'nightwatch'
import paths from './paths';

var seleniumServer = require('selenium-server')
var chromeDriver = require('chromedriver')
var geckoDriver = require('geckodriver');

const settings: any = {
    src_folders: [paths.tests],
    selenium: {
        server_path: seleniumServer.path,
        start_process: true,
        start_session: true,
        log_path: false,
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': chromeDriver.path,
            'webdriver.gecko.driver': geckoDriver.path,
        },
    },
    test_settings: {
        default: {
            launch_url: 'http://localhost',
            selenium_host: '127.0.0.1',
            selenium_port: 4444,
            silent: true,
            output: true,
            disable_colors: false,
            screenshots: {
                enabled: false,
            },
            username: '',
            access_key: '',
            proxy: '',
            desiredCapabilities: {
                browserName: 'chrome',
                handlesAlerts: false,
                javascriptEnabled: true,
                acceptSslCerts: true,
                acceptInsecureCerts: true,
            },
            globals: {},
            exclude: [],
            filter: '',
            log_screenshot_data: false,
            use_xpath: true,
            cli_args: {},
            end_session_on_fail: false,
            skip_testcases_on_fail: false,
        },
        chrome: {
			desiredCapabilities: {
                browserName: 'chrome',
                handlesAlerts: false,
                javascriptEnabled: true,
                acceptSslCerts: true,
                acceptInsecureCerts: true,
            },
		},
		firefox: {
			desiredCapabilities: {
				browserName: 'firefox',
				marionette: true,
				javascriptEnabled: true,
                acceptSslCerts: true,
                acceptInsecureCerts: true,
			},
        },
        safari: {
			desiredCapabilities: {
				browserName: 'safari',
				javascriptEnabled: true,
                acceptSslCerts: true,
                acceptInsecureCerts: true,
			},
		},
    },
};

export = settings;