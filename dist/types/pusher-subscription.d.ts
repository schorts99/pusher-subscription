import Pusher from "pusher-js";
import { Subscription } from "@schorts/shared-kernel";
export declare class PusherSubscription implements Subscription {
    private readonly pusher;
    private readonly channels;
    constructor(pusher: Pusher);
    connect(): void;
    subscribe(channel: string, event: string, handler: (payload: any) => void): void;
    unsubscribe(channel: string): void;
    disconnect(): void;
}
//# sourceMappingURL=pusher-subscription.d.ts.map