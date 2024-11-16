<?php
namespace App\Traits;

use App\Models\User;

trait ChecksSubscriptions
{
    private function noSubscriptionConfigurationExists(User $user, $notification)
    {
        return $user->notificationSubscriptions()
                ->whereType($notification)
                ->doesntExist();
    }

    private function hasDefaultSubscription(User $user, $notification)
    {
        return $this->noSubscriptionConfigurationExists($user, $notification);
    }

    private function doesntHaveDefaultSubscription(User $user, $notification)
    {
        return ! $this->hasDefaultSubscription($user, $notification);
    }

    private function hasAtLeastOneChannelSubscribed(User $user, $notification)
    {
        return $user->notificationSubscriptions()
                ->whereType($notification)
                ->whereNull('unsubscribed_at')
                ->exists();
    }

    private function doesntHaveAtLeasetOneChannelSubscribed(User $user, $notification)
    {
        return ! $this->hasAtLeastOneChannelSubscribed($user, $notification);
    }

    private function isntSubscribedToNotification(User $user, $notification)
    {
        return $this->doesntHaveDefaultSubscription($user, $notification) 
                && $this->doesntHaveAtLeasetOneChannelSubscribed($user, $notification);
    }
}