import { Channel } from "pusher-js";
import { expectTypeOf } from "expect-type";

import { PusherSubscription } from "../src";

describe("PusherSubscription", () => {
  describe('#channels', () => {
    it('has a private property channels of type Map<string, Channel>()', () => {
      expectTypeOf<PusherSubscription["channels"]>().toEqualTypeOf<Map<string, Channel>>();
    });
  });

  describe("#connect", () => {
    it('receives no params', () => {
      expectTypeOf<PusherSubscription["connect"]>().parameters.toEqualTypeOf<[]>();
    });

    it('returns void', () => {
      expectTypeOf<PusherSubscription["connect"]>().returns.toEqualTypeOf<void>();
    });
  });

  describe("#subscribe", () => {
    it('receives a channel string', () => {
      expectTypeOf<PusherSubscription["subscribe"]>().parameters.toEqualTypeOf<[string, string, (payload: Record<string, any> | string) => void]>();
    });

    it('returns void', () => {
      expectTypeOf<PusherSubscription["subscribe"]>().returns.toEqualTypeOf<void>();
    });
  });

  describe("#unsubscribe", () => {
    it('receives a channel string', () => {
      expectTypeOf<PusherSubscription["unsubscribe"]>().parameters.toEqualTypeOf<[string]>();
    });

    it('returns void', () => {
      expectTypeOf<PusherSubscription["unsubscribe"]>().returns.toEqualTypeOf<void>();
    });
  });

  describe("#disconnect", () => {
    it('receives no params', () => {
      expectTypeOf<PusherSubscription["disconnect"]>().parameters.toEqualTypeOf<[]>();
    });

    it('returns void', () => {
      expectTypeOf<PusherSubscription["disconnect"]>().returns.toEqualTypeOf<void>();
    });
  });
});
