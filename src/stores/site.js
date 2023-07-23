import { defineStore } from 'pinia'

export const useSiteStore = defineStore('site', {
  state: () => {
    return {
      menuItems: [
        {to:'/', title: 'Home'},
        {to: '/what-we-do', title: 'What we do'},
        {to: '/the-digital-divide', title: 'The digital divide'},
        {to: '/donate', title: 'Get involved'},
      ],
      personList: [
        {id: 'person', name: 'Person'},
        {id: 'researcher', name: 'Researcher'},
        {id: 'org', name: 'Community Organisation'},
      ],
      todoList: [
        {id: 'help', name: 'help'},
        {id: 'work', name: 'work for you'},
        {id: 'donate', name: 'donate'},
      ],
      selectedPerson: 'person',
      selectedTodo: 'donate',
    }
  },
  actions: {
    setSelectedPerson(person) {
      this.selectedPerson = person;
    },
    setSelectedTodo(todo) {
      this.selectedTodo = todo;
    },
  },
});
