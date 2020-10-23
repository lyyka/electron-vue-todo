<script>
export default {
    props: {
        value: { },

        checked: {
            type: Boolean,
            required: false,
            default: false
        },

        label: {
            type: String,
            required: true,
        },

        completedLabel: {
            type: Boolean,
            required: false,
            default: false,
        }
    },

    data() {
        return {
            content: this.value,
            isChecked: this.checked,
        }
    },

    methods: {
        onInput(){
            this.isChecked = !this.isChecked
            this.$emit('input', this.isChecked)
        }
    }
}
</script>
<template>
    <div class="cbw">
        <input
            :id="this.uid"
            @input="onInput"
            v-model="content"
            :checked="checked"
            type="checkbox"
        />
        <span class="check"></span>
        <label :class="[completedLabel ? 'text-muted completed-label' : '']" :for="this.uid" v-if="label">{{ label }}</label>
    </div>
</template>
<style lang="scss" scoped>
    .completed-label{
        text-decoration: line-through;
    }
</style>