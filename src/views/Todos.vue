<script>
    import VAddToDo from "@/components/molecules/VAddToDo"
    import VToDoList from "@/components/molecules/VToDoList"

    export default {
        components: { VAddToDo, VToDoList },
    };
</script>
<template>
    <div id="todo-wrapper">
        <div class="px-3 pt-3">
            <h1>{{ this.$t("title") }}</h1>
            <VAddToDo class="mb-4" />
        </div>
        <VToDoList />
    </div>
</template>