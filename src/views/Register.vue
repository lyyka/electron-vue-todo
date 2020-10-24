<script>
    import { mapGetters } from 'vuex';
    import axios from 'axios'
    import VInput from '@/components/atoms/VInput'
    import VButton from '@/components/atoms/VButton'
    import VErrorLabel from '@/components/atoms/VErrorLabel'

    export default {
        components: {VInput, VButton, VErrorLabel},

        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: '',
                },
                errors: {},
            }
        },

        computed: {
            ...mapGetters(['getBaseAPIUrl']),
        },

        methods: {
            async register() {
                try{
                    const {data} = await axios.post(`${this.getBaseAPIUrl}/api/auth/register`, this.form)
                    if(data.success){
                        this.$router.push({
                            name: 'login',
                            params: {
                                registered: true,
                            }
                        })
                    }
                }
                catch(e) {
                    this.errors = e.response.data.errors
                }
            }
        },
    };
</script>
<template>
    <div class="d-flex justify-content-center align-items-center">
        <div class="w-lg-50 w-75">
            <form @submit.prevent="register">
                <h2 class="mb-4">{{ this.$t('registerTitle') }}</h2>
                <div class="mb-3">
                    <VInput 
                        v-model="form.name" 
                        :placeholder="this.$t('fields.name')" 
                    />
                    <VErrorLabel
                        :errors="errors"
                        name='name'
                    />
                </div>
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
                <div class="mb-3">
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
                    :text="this.$t('registerBtn')"
                    :fulWidth="true"
                    :large="true"
                />
            </form>
            <hr />
            <span>
                {{ this.$t('alreadyHaveAccount') }}
                <router-link to="/login"
                    class="d-inline-block c-text-orange"
                >
                    {{ this.$t('loginTitle') }}
                </router-link>
            </span>
        </div>
    </div>
</template>