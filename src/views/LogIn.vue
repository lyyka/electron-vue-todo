<script>
    import VInput from '@/components/atoms/VInput'
    import VButton from '@/components/atoms/VButton'

    export default {
        components: {VInput, VButton},

        data() {
            return {
                form: {
                    email: '',
                    password: '',
                },
                registrationSuccessful: false,
            }
        },

        mounted(){
            this.registrationSuccessful = this.$route.params.registered
        },

        methods: {
            async handleLogin(){

            }
        }
    };
</script>
<template>
    <div class="d-flex justify-content-center align-items-center">
        <div class="w-lg-50 w-75">
            <form @submit.prevent="handleLogin">
                <h2 class="mb-4">
                    <span v-if="!registrationSuccessful">
                        {{ this.$t('loginTitle') }}
                    </span>
                    <span v-else>
                        {{ this.$t('loginTitleTwo') }}
                    </span>
                </h2>
                <div class="mb-3">
                    <VInput 
                        v-model="form.email" 
                        :placeholder="this.$t('fields.email')" 
                    />
                    <VErrorLabel
                        :errors="errors"
                        name='email'
                    />
                </div>
                <div class='mb-3'>
                    <VInput 
                        v-model="form.password" 
                        :placeholder="this.$t('fields.password')" 
                    />
                    <VErrorLabel
                        :errors="errors"
                        name='password'
                    />
                </div>
                <VButton
                    class="mt-4"
                    type="submit"
                    :text="this.$t('loginButton')"
                    :fulWidth="true"
                    :large="true"
                />
            </form>
            <div v-if="!registrationSuccessful">
                <hr />
                <span>
                    {{ this.$t('noAccountYet') }}
                    <router-link to="/register"
                        class="d-inline-block c-text-orange"
                    >
                        {{ this.$t('registerTitle') }}
                    </router-link>
                </span>
            </div>
        </div>
    </div>
</template>