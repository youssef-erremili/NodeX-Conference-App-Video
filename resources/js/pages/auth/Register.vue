<script lang="ts" setup>
import { Form } from '@inertiajs/vue3';
import InputError from '@/components/InputError.vue';
import TextLink from '@/components/TextLink.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthBase from '@/layouts/AuthLayout.vue';
import { login } from '@/routes';
import { store } from '@/routes/register';
</script>

<template>
    <AuthBase
        description="Enter your details below to create your account"
        title="Create an account"
    >
        <!-- Welcome Text -->
        <div class="text-center">
            <h1 class="mb-2 text-2xl font-semibold text-gray-900">Welcome!</h1>
            <p class="text-sm text-gray-600">Please enter your details to register.</p>
        </div>

        <Form
            v-slot="{ errors, processing }"
            :reset-on-success="['password', 'password_confirmation']"
            class="flex flex-col gap-6 px-10"
            v-bind="store.form()"
        >
            <div class="grid gap-6">
                <div class="grid gap-2">
                    <Label for="name">Name</Label>
                    <Input
                        id="name"
                        :tabindex="1"
                        autocomplete="name"
                        autofocus
                        class="h-11 rounded-lg bg-white! px-4 pr-10 text-sm transition-all border-2 border-gray-200 placeholder:text-gray-400 focus:border-transparent! focus:ring-1 focus:ring-gray-400!"
                        name="name"
                        placeholder="Full name"
                        required
                        type="text"
                    />
                    <InputError :message="errors.name" />
                </div>

                <div class="grid gap-2">
                    <Label for="email">Email address</Label>
                    <Input
                        id="email"
                        :tabindex="2"
                        autocomplete="email"
                        class="h-11 rounded-lg bg-white! px-4 pr-10 text-sm transition-all border-2 border-gray-200 placeholder:text-gray-400 focus:border-transparent! focus:ring-1 focus:ring-gray-400!"
                        name="email"
                        placeholder="Email@example.com"
                        required
                        type="email"
                    />
                    <InputError :message="errors.email" />
                </div>

                <div class="grid gap-2">
                    <Label for="password">Password</Label>
                    <Input
                        id="password"
                        :tabindex="3"
                        autocomplete="new-password"
                        class="h-11 rounded-lg bg-white! px-4 pr-10 text-sm transition-all border-2 border-gray-200 placeholder:text-gray-400 focus:border-transparent! focus:ring-1 focus:ring-gray-400!"
                        name="password"
                        placeholder="Password"
                        required
                        type="password"
                    />
                    <InputError :message="errors.password" />
                </div>

                <div class="grid gap-2">
                    <Label for="password_confirmation">Confirm password</Label>
                    <Input
                        id="password_confirmation"
                        :tabindex="4"
                        autocomplete="new-password"
                        class="h-11 rounded-lg bg-white! px-4 pr-10 text-sm transition-all border-2 border-gray-200 placeholder:text-gray-400 focus:border-transparent! focus:ring-1 focus:ring-gray-400!"
                        name="password_confirmation"
                        placeholder="Confirm password"
                        required
                        type="password"
                    />
                    <InputError :message="errors.password_confirmation" />
                </div>

                <Button
                    :disabled="processing"
                    class="w-full py-6 inline-flex rounded-xl bg-gray-900 text-sm font-semibold text-white transition-all hover:bg-gray-800 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    data-test="register-user-button"
                    tabindex="5"
                    type="submit"
                >
                    <Spinner v-if="processing" />
                    Create account
                </Button>
            </div>

            <div class="text-center text-sm text-muted-foreground">
                Already have an account?
                <TextLink
                    :href="login()"
                    :tabindex="6"
                    class="font-semibold underline transition-colors hover:text-gray-600"
                >Log in
                </TextLink
                >
            </div>
        </Form>
    </AuthBase>
</template>
