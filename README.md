# 📡 @schorts/pusher-subscription

A lightweight, type-safe wrapper around Pusher JS for subscribing to real-time events in frontend applications. Implements the `Subscription` interface from `@schorts/shared-kernel`, enabling clean, modular integration with your pub-sub architecture.

## 🚀 Installation

```bash
npm install @schorts/pusher-subscription
```

## 🧱 Usage

### 1. Instantiate with a configured Pusher client

```ts
import { Pusher, PusherSubscription } from '@schorts/pusher-subscription';

const pusher = new Pusher('YOUR_APP_KEY', {
  cluster: 'YOUR_APP_CLUSTER',
  authEndpoint: '/pusher/auth',
  auth: {
    headers: {
      Authorization: `Bearer ${yourAccessToken}`,
    },
  },
});

const subscription = new PusherSubscription(pusher);
```

### 2. Connect and subscribe to events

```ts
subscription.connect();

subscription.subscribe('private-WAITER_KITCHEN_abc123', 'order_ready', (data) => {
  console.log('Order ready:', data);
});
```

### 3. Unsubscribe and disconnect

```ts
subscription.unsubscribe('private-WAITER_KITCHEN_abc123');
subscription.disconnect();
```

## 🧩 Interface

This class implements the `Subscription` interface from `@schorts/shared-kernel`.

## 🧠 Why Use This

- ✅ Type-safe and framework-agnostic
- ✅ Clean separation of subscription logic from transport
- ✅ Easy to swap for other clients (e.g. Socket.IO, Ably)
- ✅ Ideal for frontend apps using modular pub-sub architecture

## 📜 License

LGPL
