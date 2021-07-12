import debug from 'debug';

debug.enable('*');

export default (...namespaces: string[]): debug.Debugger => debug(namespaces.length ? namespaces.join(':') : 'Playgroud');
