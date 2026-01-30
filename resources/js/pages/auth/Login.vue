<script lang="ts" setup>
import { Form } from '@inertiajs/vue3';
import InputError from '@/components/InputError.vue';
import TextLink from '@/components/TextLink.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthBase from '@/layouts/AuthLayout.vue';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

defineProps<{
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}>();
</script>
<template>
    <AuthBase>
        <!-- Welcome Text -->
        <div class="mb-8 text-center">
            <h1 class="mb-2 text-2xl font-semibold text-gray-900">Welcome!</h1>
            <p class="text-sm text-gray-600">Please enter your details to login.</p>
        </div>

        <div
            v-if="status"
            class="mb-6 rounded-lg bg-emerald-50 p-4 text-center text-sm font-medium text-emerald-700"
        >
            {{ status }}
        </div>

        <Form
            v-slot="{ errors, processing }"
            :reset-on-success="['password']"
            class="flex flex-col gap-5 px-10"
            v-bind="store.form()"
        >
            <div class="grid gap-5">
                <!-- Email Field -->
                <div class="grid gap-2 mb-2">
                    <Label class="text-sm font-medium text-gray-700" for="email">
                        Email address
                    </Label>
                    <Input
                        id="email"
                        :tabindex="1"
                        autocomplete="email"
                        autofocus
                        class="h-11 rounded-lg bg-white! px-4 pr-10 text-sm transition-all border-2 border-gray-200 placeholder:text-gray-400 focus:border-transparent! focus:ring-1 focus:ring-gray-400!"
                        name="email"
                        placeholder="Enter your email address"
                        required
                        type="email"
                    />
                    <InputError :message="errors.email" />
                </div>

                <!-- Password Field -->
                <div class="grid gap-2">
                    <div class="flex items-center justify-between">
                        <Label class="text-sm font-medium text-gray-700" for="password">
                            Password
                        </Label>
                        <TextLink
                            v-if="canResetPassword"
                            :href="request()"
                            :tabindex="5"
                            class="text-sm text-gray-900 underline transition-colors hover:text-gray-600 "
                        >
                            Forgot password?
                        </TextLink>
                    </div>
                    <div class="relative">
                        <Input
                            id="password"
                            :tabindex="2"
                            autocomplete="current-password"
                            class="h-11 rounded-lg bg-white! px-4 pr-10 text-sm transition-all border-2 border-gray-200 placeholder:text-gray-400 focus:border-transparent! focus:ring-1 focus:ring-gray-400!"
                            name="password"
                            placeholder="Enter your password"
                            required
                            type="password"
                        />
                    </div>
                    <InputError :message="errors.password" />
                </div>

                <!-- Log In Button -->
                <Button
                    :disabled="processing"
                    :tabindex="4"
                    class="py-6 w-full rounded-xl bg-gray-900 text-sm font-semibold text-white transition-all hover:bg-gray-800 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    data-test="login-button"
                    type="submit"
                >
                    <Spinner v-if="processing" class="mr-2" />
                    Log In
                </Button>
            </div>
            <!-- Sign Up Link -->
            <div class="mt-4 text-center text-sm text-gray-600">
                Don't have an account yet?
                <TextLink
                    v-if="canRegister"
                    :href="register()"
                    :tabindex="6"
                    class="font-semibold underline transition-colors hover:text-gray-600"
                >
                    Sign up
                </TextLink>
            </div>
        </Form>
    </AuthBase>
</template>
