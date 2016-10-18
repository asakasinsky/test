'use strict';

function log(mess) {
    if (!window.stopLog) {
        console.log(mess);
    }
}
