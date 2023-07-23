<script setup>
import { useSiteStore } from '../stores/site'
const siteStore = useSiteStore()
</script>

<template>
    <section class="help-form" v-if="siteStore.personList?.length > 0 && siteStore.todoList?.length > 0">
        <div class="container">

            <h2>How can we help you?</h2>
            <p>Let us know who you are and what you're looking for, and we'll help get you to the right place.</p>
            <form action="/" v-on:submit.prevent="onSubmit">
                <div class="row">
                    <label for="person">I am a </label>
                    <select v-model="siteStore.selectedPerson" id="person">
                        <option v-for="person in siteStore.personList" v-bind:value="person.id">
                            {{ person.name }}
                        </option>
                    </select>
                </div>
                <div class="row">
                    <label for="todo">and I want to </label>
                    <select v-model="siteStore.selectedTodo" id="todo">
                        <option v-for="todo in siteStore.todoList" v-bind:value="todo.id">
                            {{ todo.name }}
                        </option>
                    </select>
                </div>
                <button type="submit" class="btn-round btn-primary">Start now</button>
            </form>
        </div>
    </section>
</template>

<style scoped>
.help-form {
    background-color: #ececec;
    margin: -20px 0 20px;
    padding: 60px 0;
}

form {
    background-color: #fff;
    padding: 20px;
}

.row {
    margin-bottom: 20px;
}

label {
    font-size: 16px;
}

select {
    font-size: 16px;
    font-weight: 700;
    color: var(--color-secondary);
    border: 0;
    border-bottom: 2px solid var(--color-secondary);
}
    
@media (min-width: 768px) {
    form {
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 40px;
    }
    .row {
        margin: 0 20px 0 0;
    }
    label, select {
        font-size: 20px;
    }
}
</style>
