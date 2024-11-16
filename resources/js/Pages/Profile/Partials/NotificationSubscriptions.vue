<script setup>
    import ActionSection from "@/Components/ActionSection.vue";
    import { useForm, usePage } from '@inertiajs/vue3';
    import { ref, computed, onBeforeMount } from "vue";
    import Toggle from "@/Components/Toggle.vue";
    import PrimaryButton from "@/Components/PrimaryButton.vue";
    import InputLabel from "@/Components/InputLabel.vue";

    const form = useForm({
        subscriptions: {}
    });

    const subscriptionForm = useForm({});

    const allChannels = computed(() => [...new Set(usePage().props.config.notifications.items.map(item => item.channels).flat())]);

    const allNotifications = computed(() => [...new Set(usePage().props.config.notifications.items.flat())]);

    const getLabel = (notification) => {
        return notification?.label 
            ? notification.label 
            : notification.class.split('\\').pop().replace(/([A-Z])/g, ' $1').trim();
    }

    const getClassBaseName = (notification) => {
        return notification.class.split('\\').pop();
    }

    onBeforeMount(() => {
        for(const notification in allNotifications.value) {
            var isSubscribed = usePage().props.auth.user.notification_subscriptions.filter((subscription) => subscription.type == allNotifications.value[notification].class && subscription.unsubscribed_at == null).map((subscription) => subscription.channel == '*' ? allChannels.value.flat() : subscription.channel).flat()
            var noSubscription = usePage().props.auth.user.notification_subscriptions.filter((subscription) => subscription.type == allNotifications.value[notification].class).flat().length == 0
            form.subscriptions[getClassBaseName(allNotifications.value[notification])] = noSubscription ? allChannels.value : isSubscribed;
        }
    })

    const changeSubscription = (notification) => {
        subscriptionForm.transform((data) => {
            return {
                notification: notification.class,
                channels: form.subscriptions[getClassBaseName(notification)]
            }
        }).post(route('notification-subscriptions'), {
            preserveScroll: true,
            onSuccess: () => {
                console.log('success');
            }
        });
    }
        
</script>
<template>
    <ActionSection>
        <template #title>Subscriptions</template>
        <template #description>Manage notifications and emails sent from {{$page.props.config.app.name}}.</template>
        <template #content>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Type
                            </th>
                            <th v-for="channel in allChannels" :key="'channel-'+channel" scope="col" class="px-6 py-3">
                                {{ channel.toUpperCase() }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="notification in $page.props.config.notifications.items" :key="notification.class" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ getLabel(notification) }}
                            </th>
                            <td class="px-6 py-4" v-for="channel in allChannels" :key="'subscription-'+channel">
                                <Toggle v-if="notification.channels.includes(channel)" v-model:checked="form.subscriptions[getClassBaseName(notification)]" @change="changeSubscription(notification)" :value="channel"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </template>
    </ActionSection>
</template>