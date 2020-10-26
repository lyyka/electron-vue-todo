<script>
    import VInput from '@/components/atoms/VInput'
    import VButton from '@/components/atoms/VButton'
    import VErrorLabel from '@/components/atoms/VErrorLabel'
    import { mapGetters, mapMutations } from 'vuex';
    import axios from 'axios'

    export default {
        components: {VInput, VButton, VErrorLabel},

        data() {
            return {
                form: {
                    email: '',
                    password: '',
                },
                errors: {},
                registrationSuccessful: false,
            }
        },

        mounted(){
            this.registrationSuccessful = this.$route.params.registered
        },

        computed: {
            ...mapGetters(['getBaseAPIUrl'])
        },

        methods: {
            ...mapMutations(['setAuthToken']),
            async handleLogin(){
                try{
                    const { data } = await axios.post(`${this.getBaseAPIUrl}/api/auth/login`, this.form)
                    if(data.jwt){
                        localStorage.setItem('user-token', data.jwt)
                        this.setAuthToken(data.jwt)
                        this.$router.push('/')
                    }
                }
                catch(e){
                    if(e.response.data.errors !== undefined){
                        this.errors = e.response.data.errors
                    }
                    else{
                        this.errors = {}
                    }
                }
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
                        type="password"
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