import { defineCustomElement } from 'vue';
import MsgH1 from './components/MsgH1.vue';

const MsgH1Element = defineCustomElement(MsgH1);

// Définir le Web Component
customElements.define('msg-h1', MsgH1Element);
