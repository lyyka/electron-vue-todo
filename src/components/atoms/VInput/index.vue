<script>
export default {
    props: {
        value: {
            type: [String, Number, Date],
            required: false,
            default: "",
        },
        
        type: {
            type: String,
            required: false,
            default: "text",
        },

        placeholder: {
            type: String,
            required: false,
            default: "",
        },
    },

    watch: {
        value: function(a) {
            this.inputValue = a
        }
    },

    data() {
        return {
            inputValue: this.value,
        }
    },

    methods: {
        onInput(){
            this.$emit('input', this.inputValue)
        }
    }
}
</script>
<template>
    <input
        @input="onInput"
        class="d-block w-100"
        :placeholder="placeholder"
        v-model="inputValue"
        :type="type"
    />
</template>