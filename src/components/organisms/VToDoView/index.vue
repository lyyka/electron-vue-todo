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
    </div>
</template>