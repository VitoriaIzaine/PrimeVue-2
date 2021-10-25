import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Primevue from 'primevue/config'

import 'primevue/resources/themes/saga-blue/theme.css'      
import 'primevue/resources/primevue.min.css'                
import 'primeicons/primeicons.css'

// PrimeVUe Componentes
import Knob from 'primevue/knob';
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Primevue);

app.component('Knob',Knob);
app.component('Password',Password);
app.component('InputText',InputText);



app.mount('#app');
