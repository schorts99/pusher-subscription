import { Subscriber, MessageHandler, Subscription } from "@schorts/shared-kernel";
import Pusher, { Channel } from "pusher-js";

export class PusherSubscription implements Subscriber {
  private readonly channels = new Map<string, Channel>();

  constructor(
    private readonly pusher: Pusher,
  ) {}

  connect(): void {
    this.pusher.connect();
  }

  async subscribe<T = any>(
    channel: string,
    event: string,
    handler: MessageHandler<T>,
  ): Promise<Subscription> {
    let ch = this.channels.get(channel);

    if (!ch) {
      ch = this.pusher.subscribe(channel);
      this.channels.set(channel, ch);
    }

    ch.bind(event, handler);

    return {
      unsubscribe: () => {
        ch.unbind(event, handler);
      },
    };
  }

  disconnect(): void {
    this.pusher.disconnect();
    this.channels.clear();
  }
}
