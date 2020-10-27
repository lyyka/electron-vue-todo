<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true,
        },
    },


}
</script>
<template>
    <div class="p-3">
        <p v-if="todo.completed" class="text-success mb-1">
            <ficon :icon="['fas', 'check']" />
            {{ this.$t('todoCompletedMark') }}
        </p>
        <h4 class="font-weight-bold">
            {{ todo.body }}
        </h4>
        <p v-if="todo.due_date" class="text-muted">
            {{ todo.due_date.toLocaleDateString(this.$i18n.locale) }}
        </p>
        <textarea class="border-0 mb-3 w-100" rows="1" :placeholder="this.$t('descriptionInputPlaceholder')"></textarea>
    </div>
</template>
<style lang="scss" scoped>
textarea{
    resize: none;
    // max-height: 100%;
}
</style>