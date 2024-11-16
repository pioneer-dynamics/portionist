<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NotificationSubscriptionController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'notification' => 'required|in:' . implode(',', $this->getNotificationClasses()),
            'channels' => 'array',
            'channels.*' => 'in:' . implode(',', $this->getChannelsFor($request->notification)),
        ]);

        $request->user()->resetSubscriptions($request->notification);
        
        $request->user()->unsubscribe($request->notification, '*');

        foreach($request->channels as $channel) {
            $request->user()->subscribe($request->notification, $channel);
        }
    }

    private function getChannelsFor($notification)
    {
        return $this->getNotificationConfig($notification)['channels'];
    }

    private function getNotificationClasses()
    {
        return array_map(fn($item) => $item['class'], config('notifications.items'));
    }

    private function getNotificationConfig($notification)
    {
        return array_filter(config('notifications.items'), fn($item) => $item['class'] == $notification)[0];
    }
}
