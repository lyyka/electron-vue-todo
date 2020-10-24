<script>
export default {
    props:{
        text: {
            type: String,
            required: true,
        },

        fullWidth: {
            type: Boolean,
            required: false,
            default: false,
        },

        large: {
            type: Boolean,
            required: false,
            default: false,
        },

        type: {
            type: String,
            required: false,
            default: 'button'
        }
    }
}
</script>
<template>
    <button
        :class="[fullWidth ? 'w-100' : '', large ? 'px-4 py-3' : 'px-3 py-2']"
        class="c-bg-orange text-white border-0 rounded shadow-sm"
        :type="type"
    >
        {{ text }}
    </button>
</template>