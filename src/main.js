"use strict";

/*_________________________________________________
|                                                  |
|                                                  |
|                  Bus Event                       |
|                                                  |
|__________________________________________________*/

class BusEvent {
    
    /**
     * Cooking Event Here For Broadcasting
     * @param {*} key 
     * @param {*} params 
     * @return boradcast
     */
    _prepareFire(key, params) {
        let broadcast = new Event(key)
        broadcast.payload = params;
        return broadcast;
    }

    /**
     * Find Out event from window
     * By Passing Specific key
     * @param {*} key 
     * @param {*} callback 
     * @return window.addEventListener
     */
    _prepareCatch(key, callback) {
        return window.addEventListener(key, function(e) {
            let { type, payload, timeStamp } = e;
            let _value  = {
                name: type,
                payload,
                timestamp : timeStamp
            }
            callback(_value);
        });
    }

    /**
     * Emitting Your Event
     * Intialize broadcasting 
     * @param {*} key 
     * @param {*} params 
     * @return broadcast
     */
    $emit(key, params) {

        if ( key && typeof key === 'string' ) {} 
        else {
            throw Error(
                'You must provide your passed event key!'
            )
        }

        return this.broadcast(this._prepareFire(key, params || {}))
    }

    /**
     * Dispatch Event From here
     * @param {*} param 
     * @return window.dispatchEvent
     */
    broadcast(param) {
        return window.dispatchEvent(param)
    }

    /**
     * Get event from here
     * @param {*} key 
     * @param {*} callback
     * @return this._prepareCatch
     */
    $on(key, callback) {
        
        if ( key && typeof key === 'string' ) {} 
        else {
            throw Error(
                'You must provide your passed event key!'
            )
        }

        if (callback && typeof callback === 'function') {}
        else {
            throw Error(
                'You must provide a callback function!'
            )
        }

       return this._prepareCatch(key, callback)
    }
}

module.exports = new BusEvent();