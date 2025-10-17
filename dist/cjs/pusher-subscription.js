"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PusherSubscription = void 0;
class PusherSubscription {
    pusher;
    channels = new Map();
    constructor(pusher) {
        this.pusher = pusher;
    }
    connect() {
        this.pusher.connect();
    }
    subscribe(channel, event, handler) {
        let ch = this.channels.get(channel);
        if (!ch) {
            ch = this.pusher.subscribe(channel);
            this.channels.set(channel, ch);
        }
        ch.bind(event, handler);
    }
    unsubscribe(channel) {
        this.pusher.unsubscribe(channel);
        this.channels.delete(channel);
    }
    disconnect() {
        this.pusher.disconnect();
        this.channels.clear();
    }
}
exports.PusherSubscription = PusherSubscription;
//# sourceMappingURL=pusher-subscription.js.map