import Pusher, { Channel } from "pusher-js";
import { Subscription } from "@schorts/shared-kernel";

export class PusherSubscription implements Subscription {
  private readonly channels = new Map<string, Channel>();

  constructor(
    private readonly pusher: Pusher,
  ) {}

  connect(): void {
    this.pusher.connect();
  }

  subscribe(channel: string, event: string, handler: (payload: Record<string, any> | string) => void): void {
    let ch = this.channels.get(channel);
  
    if (!ch) {
      ch = this.pusher.subscribe(channel);

      this.channels.set(channel, ch);
    }
  
    ch.bind(event, handler);
  }

  unsubscribe(channel: string): void {
    this.pusher.unsubscribe(channel);
    this.channels.delete(channel);
  }

  disconnect(): void {
    this.pusher.disconnect();
    this.channels.clear();
  }
}
