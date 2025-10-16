import Pusher, { Channel } from "pusher-js";
import { Subscription } from "@schorts/shared-kernel";

export class PusherSubscription implements Subscription {
  private readonly channels = new Map<string, Channel>();

  constructor(
    private readonly pusher: Pusher,
  ) {}

  connect() {
    this.pusher.connect();
  }

  subscribe(channel: string, event: string, handler: (payload: any) => void) {
    const ch = this.channels.get(channel) ?? this.pusher.subscribe(channel);

    ch.bind(event, handler);
    this.channels.set(channel, ch);
  }

  unsubscribe(channel: string) {
    this.pusher.unsubscribe(channel);
    this.channels.delete(channel);
  }

  disconnect() {
    this.pusher.disconnect();
    this.channels.clear();
  }
}
