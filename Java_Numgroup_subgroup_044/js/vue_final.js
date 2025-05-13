const { createApp, ref } = Vue
    const { createVuetify } = Vuetify

    const vuetify = createVuetify()

    createApp({
      template: '#app-template',
      data() {
        return {
          tab: 'one',
          name: '',
          items: [
            { title: 'СНИЛС 000 000 000 00' },
            { title: 'Иванов' },
            { title: 'Иван' },
            { title: 'Иванович' },
          ],
          passport: [
            { name: 'Иванов', ves: 69, rost: 178, age: 30, vr_priv: 'Курение' },
            { name: 'Петров', ves: 79, rost: 168, age: 20, vr_priv: 'Курение' }
          ]
        }
      },
      methods: {
        addItem() {
          if (this.name.trim()) {
            this.items.push({ title: this.name });
            this.name = '';
          }
        }
      }
    }).use(vuetify).mount('#app')