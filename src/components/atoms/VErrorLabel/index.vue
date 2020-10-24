<script>
export default {
    props:{
        errors: {
            type: Object,
            required: true,
        },

        name: {
            type: String,
            required: true,
        }
    }
}
</script>
<template>
    <label class="text-danger mt-1 mb-0" v-if="errors[name]">
        {{ this.$t(errors[name]) }}
    </label>
</template>